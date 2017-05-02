import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class dashboardPage {

  constructor(public navCtrl: NavController) {
    console.log(localStorage.getItem("token"));
  }



}
