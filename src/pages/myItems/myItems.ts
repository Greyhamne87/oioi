import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import {Headers} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import { ListItemPage } from '../listItem/listItem';

@Component({
  selector: 'page-myItems',
  templateUrl: 'myItems.html'
})
export class myItemsPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public http: Http) {
   
    this.http.get('http://localhost:3000/user/myItems/userId/' + localStorage.getItem("userId") + '/token/'+ localStorage.getItem("token") +'')
      .map((response: Response) => response.json()) // our callback function
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(
        data => {console.log(data)},
        error => console.error(error),
        () => { 
          //console.log("oioi:" + data)
      }       
    );
  
  }

  //Get a users items

  

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
