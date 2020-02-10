import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';

import {MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';
import {IntroVideoComponent} from './landing/intro-video/intro-video.component';
import {PackagesComponent} from './reservation/packages/packages.component';
import {PackagesService} from './services/packages/packages.service';
import {AuthService} from './services/auth-guard/auth.service';
import {RouterModule, Routes} from '@angular/router';
import {ViewPackageComponent} from './reservation/view-package/view-package.component';
import {PackageTypesComponent} from './landing/package-types/package-types.component';
import {SearchPackageComponent} from './reservation/search-package/search-package.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent, data: {title: 'Landing'}},
  {path: 'reservation/packages', component: PackagesComponent, data: {title: 'Packages List'}},
  {path: 'reservation/search-packages', component: SearchPackageComponent, data: {title: 'Search'}},
  {path: 'packages', component: PackagesComponent, data: {title: 'Packages List'}},
  {path: 'packages/view/:id', component: ViewPackageComponent, data: {title: 'Package Detail'}}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroVideoComponent,
    PackagesComponent,
    ViewPackageComponent,
    PackageTypesComponent,
    SearchPackageComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [
    MDBSpinningPreloader,
    PackagesService,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
