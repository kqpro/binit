import { Component, OnInit } from '@angular/core';

// App version
const { version: appVersion } = require('../../../package.json')

/**
 * This class represents the body component.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  appVersion: string;


  /**
   * Constructor.
   * Set version of app.
   */
  constructor() {
    this.appVersion = appVersion
  }

  
}
