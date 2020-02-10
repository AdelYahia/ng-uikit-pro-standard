import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPackageComponent } from './search-package.component';

describe('SearchPackageComponent', () => {
  let component: SearchPackageComponent;
  let fixture: ComponentFixture<SearchPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
