import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';

import {MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';
import {IntroComponent} from './navigation/intro/intro.component';
import {IntroVideoComponent} from './navigation/intro-video/intro-video.component';
import {PackagesComponent} from './packages/packages.component';
import {PackagesService} from './services/packages.service';
import {AuthGardService} from './services/auth-gard.service';
import {RouterModule, Routes} from '@angular/router';
import { ViewPackageComponent } from './view-package/view-package.component';
import { PackageTypesComponent } from './package-types/package-types.component';
import { SearchPackageComponent } from './search-package/search-package.component';

const appRoutes: Routes = [
  {path: 'packages', component: PackagesComponent},
  {path: 'packages/view/:id', component: ViewPackageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    IntroVideoComponent,
    PackagesComponent,
    ViewPackageComponent,
    PackageTypesComponent,
    SearchPackageComponent
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
    AuthGardService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
