import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { myItemsPage } from '../pages/myItems/myItems';
import { QuestboardPage } from '../pages/questboard/questboard';
import { TwitchPage } from '../pages/twitch/twitch';
 
@Component({
  selector: 'dashboard-component',
  template: `
      <ion-footer>
    <ion-grid class="dashboardFooter dashboardFooter--cyan">
      <ion-row>
        <ion-col width-20 text-center>
         <ion-icon ios="ios-list" md="md-list" class="dashboardFooterIcon" name="items"  color="light" (click)="myItems()"></ion-icon>
        </ion-col>

        <ion-col width-20 text-center>
          <ion-icon ios="ios-map" md="md-map" class="dashboardFooterIcon" name="twitch"  color="light" (click)="questboard()"></ion-icon>
        </ion-col>

        <ion-col width-20 text-center>
          <ion-icon ios="ios-game-controller-a" md="md-game-controller-a" name="logo-twitch" class="dashboardFooterIcon"  color="light" name="twitch" (click)="twitch()"></ion-icon>
        </ion-col>

        <ion-col width-20 text-center>
          <ion-icon class="dashboardFooterIcon" name="person" color="light" (click)="profile()"></ion-icon>
        </ion-col>

        <ion-col width-20 text-center>
           <ion-icon class="dashboardFooterIcon" name="log-out" color="light" (click)="logout()"></ion-icon>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-footer>
  `
})

export class DashboardComponent {
  constructor(public navCtrl: NavController) {}

  myItems(){
    this.navCtrl.push(myItemsPage);
  }

  questboard(){
    this.navCtrl.push(QuestboardPage);
  }

  profile(){
    this.navCtrl.push(ProfilePage);
  }

  twitch(){
    this.navCtrl.push(TwitchPage);
  }

  logout(){
    localStorage.clear();
    this.navCtrl.push(HomePage);
  }

}  