import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email: '', password: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public alertCtrl: AlertController
  ) {
    //this.test();
  }

  signin() {
    this.auth.registerUser(this.user.email, this.user.password)
      .then((user) => {
        // El usuario se ha creado correctamente
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Debe ingresar email y contraseña válidos',//err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })

  }

  login() {
    this.auth.loginUser(this.user.email, this.user.password).then((user) => {
    }
    )
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Debe ingresar email y contraseña válidos',//err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
  }

  test() {
    this.user.email = 'sebillac@hotmail.com';
    this.user.password = '123456';
  }
}