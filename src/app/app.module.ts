import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/* Pages */
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { dashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { myItemsPage } from '../pages/myItems/myItems';
import { ListItemPage } from '../pages/listItem/listItem';
import { QuestboardPage } from '../pages/questboard/questboard';
import { TwitchPage } from '../pages/twitch/twitch';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';

/* Components */
import { DashboardComponent } from '../components/dashboard.component';
import { BackComponent } from '../components/back.component';
import { ListingComponent } from '../listings/listing.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    dashboardPage,
    ProfilePage,
    myItemsPage,
    ListItemPage,
    QuestboardPage,
    TwitchPage,
    ForgotPasswordPage,
    DashboardComponent,
    BackComponent,
    ListingComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    dashboardPage,
    ProfilePage,
    myItemsPage,
    QuestboardPage,
    TwitchPage,
    ListItemPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
