import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-package-types',
  templateUrl: './package-types.component.html',
  styleUrls: ['./package-types.component.scss']
})
export class PackageTypesComponent implements OnInit {

  colorSelect: Array<any>;
  sizeSelect: Array<any>;

  // tslint:disable-next-line:ban-types
  public itemsList: Object[] = [
    {
      title: 'Description',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson asquid.'
    },
    {
      title: 'Details',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson adsquid.'
    },
    {
      title: 'Shipping',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson adsquid.'
    }
  ];
  ngOnInit() {
    this.colorSelect = [
      { value: 'Black', label: 'Black' },
      { value: 'White', label: 'White' },
      { value: 'Red', label: 'Red' },
    ];
    this.sizeSelect = [
      { value: 'XS', label: 'XS' },
      { value: 'S', label: 'S' },
      { value: 'L', label: 'L' },
    ];
  }
}
