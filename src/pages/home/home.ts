import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { dashboardPage } from '../dashboard/dashboard';

import {Headers} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import { AlertController } from 'ionic-angular';
import{ FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
     if(localStorage.getItem("token")){
        this.navCtrl.push(dashboardPage);
     }
  }


  loginForm:FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup({
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]),
        password: new FormControl(null, [Validators.required])
    });
  }

  

   onSubmit(){

    const body = JSON.stringify({email: this.loginForm.value.email, password: this.loginForm.value.password});
    const headers = new Headers({'Content-Type' : 'application/json'});

    this.http.post('http://localhost:3000/user/login', body, {headers : headers})
      .map((response: Response) => response.json()) // our callback function
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(  
          data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
          },
          error => {
          
              let alert = this.alertCtrl.create({
              title: 'Login Failed',
              subTitle: 'Invalid login credentials',
              buttons: [{
              text: 'Close',
                handler:() =>{
                 
                }
              }]
                        
            });
            alert.present();
        
            },
          () => { 
            this.navCtrl.push(dashboardPage);
      }        
    );  
  }

  
  private toggle: boolean;

  togglePassword(status){
    if(status == false){
      this.toggle = true;
    }

    if(status == true){
      this.toggle = false;
    }
  }  

  registerPage(){
    this.navCtrl.push(RegisterPage);
  }
}
