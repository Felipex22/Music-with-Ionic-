import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register: FormGroup;
  regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  pswdFormatMessage = "The password must contain the following criterias:\n Min 8 characters, max 15 characters, at least 1 uppercase letter, at least 1 lowercase letter, at least 1 number, no spaces in blank and, 1 special character (!?/@ etc)"

  constructor(
    private formbuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService) { 

      this.register = this.formbuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(this.regexp_password)]],
        password_confirmation: ['', Validators.required],
        name: ['', Validators.required],
        last_name: ['', Validators.required]
      }, {
        validators: this.passwordMatchValidator // Agregar la validación personalizada aquí
      });
      
    }

  ngOnInit() {
  }


  gotoLogin(){

    this.navCtrl.navigateBack("/login")
  }

  
  passwordMatchValidator: Validators = (control: FormGroup):  ValidationErrors | null => {

    const password = control.get('password');
    const confirmPassword = control.get('password_confirmation');

    return password && confirmPassword && password.value !== confirmPassword.value ? { 'passwordMismatch': true } : null;
  }

  registerForm(registerData: any){

    console.log(registerData);
    this.storage.set("user",registerData);
    this.authService.registerUser(registerData).then(res => {

        this.navCtrl.navigateBack("/login")
    });
  }

}
