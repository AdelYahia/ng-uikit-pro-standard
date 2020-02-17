import {Component, OnDestroy, OnInit} from '@angular/core';
import {PackagesService} from '../../services/packages/packages.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Package} from '../../models/package.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit, OnDestroy {

  // packages: any = [];
  packagesLocal: Package[];
  packagesSubscription: Subscription; //  to subscribe to the packages of the service


  constructor(public packagesService: PackagesService,
              private route: ActivatedRoute,
              private  router: Router) {
  }

  ngOnInit() {
    this.packagesSubscription = this.packagesService.packagesSubject.subscribe(
      (packages: Package[]) => {
        this.packagesLocal = packages;
      }
    );
    this.packagesService.findPackages();
    this.packagesService.emitPackages();
  }

  onViewPackage(id: number) {
    this.router.navigate(['packages', 'view', id]);
  }

  ngOnDestroy() {
    this.packagesSubscription.unsubscribe();
  }

  // private getPackages() {
  //   this.packagesLocal = [];
  //   this.packagesService.getPackages().subscribe((data: {}) => {
  //     // @ts-ignore
  //     this.packagesLocal = data;
  //   });
  // }

}
