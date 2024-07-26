import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private logOut: NavController,private storage: Storage) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  async logout(){

    console.log("cerrar sesion");
    await this.storage.set("isUserLoggedIn",false);
    this.logOut.navigateRoot('/login');

  }

}

