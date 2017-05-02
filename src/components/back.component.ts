import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'back-component',
  template: `
<ion-header>
  <ion-navbar>
  </ion-navbar>
</ion-header>
  `
})

export class BackComponent {
    constructor(public navCtrl: NavController) {}

}  

