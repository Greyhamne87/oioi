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



  homePage(){
    this.navCtrl.push(HomePage);
  }


}
