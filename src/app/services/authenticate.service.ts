import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){

    return new Promise((accept,reject) =>{

      if(credentials.email == "2201felipe@gmail.com" && credentials.password == "1" ){

        accept("Login correcto")
        
      } else {

        reject("usuario o contrasena incorrecto")
      }

    }) 

  }

  registerUser(registerData: any){

    registerData.password = btoa(registerData.password)
    return this.storage.set("user",registerData);
    

  }

}
