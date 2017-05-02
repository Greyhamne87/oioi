import { Component, Injectable, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotPasswordPage } from '../forgotPassword/forgotPassword';

import {Headers} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import{ NgForm, FormGroup, FormControl, Validators } from '@angular/forms'

import { AlertController } from 'ionic-angular';

@Injectable()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {

  }

  registerForm:FormGroup;


  ngOnInit(){
    this.registerForm = new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(){

    const body = JSON.stringify({email: this.registerForm.value.email, password: this.registerForm.value.password});

    //We need to set our headers otherwise it will be set as plain text
    const headers = new Headers({'Content-Type' : 'application/json'});

    // This sets up our observible it does not send the request yet!!!
    // No one has subscribed to the observible
    // return this.http.post('http://localhost:3000/user/register',body);

    // So we need to chain a few methods to setup and send our post request
    // .map will help help transform data once it comes from the server
    
    this.http.post('http://localhost:3000/user/register', body, {headers : headers})
      .map((response: Response) => response.json()) // our callback function
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(
          data => console.log(data),
          error => console.error(error),
          () => { 
            let alert = this.alertCtrl.create({
            title: 'Sign up complete',
            subTitle: 'You have successfully signed up!!!',
            buttons: [{
            text: 'Login here',
              handler:() =>{
                this.navCtrl.push(HomePage);
              }
            }]
                      
          });
          alert.present();
      }       
    );  
  }

  toggle: boolean;

  togglePassword(status){
    if(status == false){
      this.toggle = true;
    }

    if(status == true){
      this.toggle = false;
    }
  }

  
  homePage(){
    this.navCtrl.pop(HomePage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }


}
