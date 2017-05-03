import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import { ListItemPage } from '../listItem/listItem';

@Component({
  selector: 'page-myItems',
  templateUrl: 'myItems.html'
})
export class myItemsPage {

  listings: any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public http: Http) {
   
    this.http.get('http://localhost:3000/user/myItems/userId/' + localStorage.getItem("userId") + '/token/'+ localStorage.getItem("token") +'')
      .map((response: Response) => {
        const listings = response.json().obj;
        let listingsArr = [];
        for(let listing of listings){
          listingsArr.push({
            "title": listing.title,
            "subtitle": listing.subtitle
          });
        }
        return listingsArr;
      }) 
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(
        data => {
          this.listings = data,
          console.log("Listings:" + this.listings)
        },
        error => console.error(error),
    );
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
