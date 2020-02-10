import {Component, ApplicationRef} from '@angular/core';
import * as firebase from 'firebase';
import {enableDebugTools} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lhbng';

  constructor() {
    const config = {
      apiKey: 'AIzaSyAffGHoZ3V6gkxTu65teJon0Pu589njvyE',
      authDomain: 'lhbng-37305.firebaseapp.com',
      databaseURL: 'https://lhbng-37305.firebaseio.com',
      projectId: 'lhbng-37305',
      storageBucket: 'lhbng-37305.appspot.com',
      messagingSenderId: '488315777880',
      appId: '1:488315777880:web:86d87beb9813e472feeb2d'
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
}
