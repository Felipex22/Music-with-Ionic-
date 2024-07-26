import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;
    validation_messages = {

      email: [
        {type: "required", message: "Campo obligatorio"}, 
        {type: "email", message: "email invalido"}],

      password: [
        {type: "required", message: "Campo obligatorio"}] 

    };

  
    

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private authservice: AuthenticateService, 
    private navCtrl: NavController, 
    private toastController: ToastController,
    private storage: Storage
  )
    
    { 

    this.loginForm = this.formBuilder.group(
      
      {email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required]))}

    )

    }


  ngOnInit() {
    
    console.log(this.loginForm)
  }

  loginUser(dataLogin: any){

      this.authservice.loginUser(dataLogin).then(res => {
        
        this.storage.set("isUserLoggedIn",true)
        this.navCtrl.navigateForward("menu/home");

      }).catch(err => {
        
        this.presentToast('bottom')
      })
  }

  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Ops! Something went wrong. Check your email or password and try again',
      duration: 2000,
      position: position,
    });


    await toast.present();
  }

  gotoRegister(){

    this.router.navigateByUrl("/register")
  }
}
