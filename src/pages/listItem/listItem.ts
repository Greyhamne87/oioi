import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {Headers} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import{ FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'page-listItem',
  templateUrl: 'listItem.html'
})
export class ListItemPage implements OnInit {


  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public http: Http) {
   
  }

  listItemForm:FormGroup;

  ngOnInit(){
    this.listItemForm = new FormGroup({
        title: new FormControl(null, [Validators.required]),
        subtitle: new FormControl(null, [Validators.required]),
        category: new FormControl(null, [Validators.required]),
        description: new FormControl("", [Validators.required, Validators.minLength(20) , Validators.maxLength(500)]),
        cost: new FormControl(null, [Validators.required]),
        postage: new FormControl(false),
        offerPostage: new FormControl(false),
        orNearestOffer: new FormControl(false),
    });
  }

  listMyItem(){
    const body = JSON.stringify({
      title: this.listItemForm.value.title, 
      subtitle: this.listItemForm.value.subtitle,
      category: this.listItemForm.value.category,
      description: this.listItemForm.value.description,
      cost: this.listItemForm.value.cost,
      postage: this.listItemForm.value.postage,
      offerPostage: this.listItemForm.value.offerPostage,
      orNearestOffer: this.listItemForm.value.orNearestOffer,
      userId: localStorage.getItem("userId")
    
    });

   
    const headers = new Headers({'Content-Type' : 'application/json'});

    
    this.http.post('http://localhost:3000/user/listItem', body, {headers : headers})
      .map((response: Response) => response.json()) // our callback function
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(
          data => console.log(data),
          error => console.error(error),
          () => { 
            let alert = this.alertCtrl.create({
            title: 'Item listed',
            subTitle: 'Oi Oi',
            buttons: [{
            text: 'What next?',
              handler:() =>{
                
              }
            }]
                      
          });
          alert.present();
      }       
    );
  }

}