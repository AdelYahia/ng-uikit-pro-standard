import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Package} from '../../models/package.model';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  packages: Package[] = [];
  packagesSubject = new Subject<Package[]>();

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }


  emitPackages() {
    this.packagesSubject.next(this.packages);
  }

  savePackage() {
    firebase.database().ref('/packages').set(this.packages);
  }

  findPackages() {
    firebase.database().ref('/packages')
      .on('value', (data) => {
        this.packages = data.val() ? data.val() : [];
        this.emitPackages();
      });
  }

  findPackageById(id: number) {
    return new Promise(
      ((resolve, reject) => {
        firebase.database().ref('/packages/' + id)
          .once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      })
    );
  }

  // ***************************
  // This Part is implemented with json-server
  // *****************************
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getPackages(): Observable<any> {
    return this.http.get('http://localhost:3000/packages').pipe(
      map(this.extractData));
  }

  getPackage(id): Observable<any> {
    return this.http.get('http://localhost:3000/packages/' + id).pipe(
      map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
