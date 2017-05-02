import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import { ListItemPage } from '../listItem/listItem';

@Component({
  selector: 'page-myItems',
  templateUrl: 'myItems.html'
})
export class myItemsPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
   
  }

  deleteItem() {
  let alert = this.alertCtrl.create({
    title: 'Delete XXX',
    message: 'This action cant be reversed',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          console.log('Delete');
        }
      }
    ]
  });
  alert.present();
}

  listItem(){
    this.navCtrl.push(ListItemPage);
  }
}
