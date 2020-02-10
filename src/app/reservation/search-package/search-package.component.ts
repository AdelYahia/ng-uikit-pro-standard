import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth-guard/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-package',
  templateUrl: './search-package.component.html',
  styleUrls: ['./search-package.component.scss']
})
export class SearchPackageComponent implements OnInit {
  searchePackageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  errorMessage: string;

  searchText = new Subject();
  results: Observable<string[]>;
  data: any = [
    'Jeddah',
    'Mecca',
    'Riyadh',
    'Madinah'
  ];


  ngOnInit() {
    this.initForm();
    this.results = this.searchText.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }

  initForm() {
    this.searchePackageForm = this.formBuilder.group({});

  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  }

}
