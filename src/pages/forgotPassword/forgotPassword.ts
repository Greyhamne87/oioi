import { Component, Injectable, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import {Headers} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import{ NgForm, FormGroup, FormControl, Validators } from '@angular/forms'

import { AlertController } from 'ionic-angular';

@Injectable()

@Component({
  selector: 'page-forgotPassword',
  templateUrl: 'forgotPassword.html'
})
export class ForgotPasswordPage implements OnInit {

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {

  }

  forgotPasswordForm:FormGroup;


  ngOnInit(){
    this.forgotPasswordForm = new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]),
    });
  }

  onSubmit(){

    const body = JSON.stringify({email: this.forgotPasswordForm.value.email});
    const headers = new Headers({'Content-Type' : 'application/json'});

    this.http.post('http://localhost:3000/user/forgotPassword', body, {headers : headers})
      .map((response: Response) => response.json()) // our callback function
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(  
          data => {
            //What we get back
            console.log(data);
          },
          error => {
            // What we show if theres an error
              let alert = this.alertCtrl.create({
              title: 'Email not recognised',
              subTitle: 'This email address is not a registered account',
              buttons: [{
              text: 'Close',
                handler:() =>{
                 
                }
              }]
                        
            });
            alert.present();
        
            },
          () => {
            //What we show if we have a successfull post request
            let alert = this.alertCtrl.create({
              title: 'Success!!!',
              subTitle: 'Please check your email',
              buttons: [{
              text: 'Close',
                handler:() =>{
                 
                }
              }]
                        
            });
          alert.present();
      }        
    );  
  }


  homePage(){
    this.navCtrl.push(HomePage);
  }


}
