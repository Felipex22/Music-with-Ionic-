import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router) {}

  async canActivate(){
    
   const login = await this.storage.get("isUserLoggedIn")
    
    if(login){

      return true;

    } else {

      this.router.navigateByUrl('/login')
      
      return false;
    }

  }
};