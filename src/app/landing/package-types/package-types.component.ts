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
      title: 'Transportation',
      description: 'Mashaer by buses or Train (based on Camp location)'
    },
    {
      title: 'Housing',
      description: 'Mina Tents prepared with gypsum board and aluminium doors- and AC as it is shown in the program- ' +
        'internal loud speakers- sofa bed- pillow- sheet cases for sleeping- thick cotton blanket- shelves for luggage- shelves for shoes - ' +
        'fabric carpet for camp halls - installed Wi-Fi service and a bathroom for every 30 pilgrim and a separate bathroom for special needs pilgrims - '
    },
    {
      title: 'Food',
      description: 'Assembly at meeting point before departure to Mashaer served with 5 small sandwiches (Cheese/ Tuna/ Mortadella/ Turkey/ Peanut butter and Jam)/ Small bag of chips/ bottle of juice/Water bottle'
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
