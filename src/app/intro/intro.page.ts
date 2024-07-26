import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [

    {

      title: "Merge Music",
      img: "https://thefader-res.cloudinary.com/private_images/w_1260,c_limit,f_auto,q_auto:best/lofi-anime-girl-hip-hop-chilled-cow_4m7v_eeeyjp/youtube-is-restoring-lofi-hiphop-radio-livestreams-after-false-copyright-strikes.jpg",
      description: "Encuentra tus beats favoritos",
      icon: "radio-sharp"
    }
    ,
    {

      title: "Descubre nuevas melodias",
      img: "https://img.freepik.com/foto-gratis/chica-estilo-manga-joven-lofi-dibujos-animados-estudiando-mientras-escucha-musica-llueve-calle-ai-generativo_123827-24916.jpg?t=st=1720749347~exp=1720752947~hmac=f5e20042594db9ee6f341f62698b5f7d72c6a8b09c0a537b4d8f74359c719c47&w=996",
      description: "+100 canciones en tu bolsillo",
      icon: "musical-notes-sharp"
    }
    ,
    {

      title: "Siente la Musica en tu piel",
      img: "https://img.freepik.com/premium-photo/anime-girl-lofi-illustration_950633-776.jpg?w=360",
      description: "Musica libre de copyright",
      icon: "headset-sharp"
    }
    ,
    {

      title: "Bienvenido, User",
      img: "https://wallpapers-clan.com/wp-content/uploads/2023/01/chainsaw-man-pochita-pfp-11.jpg",
      description: null,
      icon: null
    }

  ]


  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  close(){

      this.storage.set("isIntroShowed",true)
      this.router.navigateByUrl("/menu/home")
      
  }

  gotoLogin(){

    this.router.navigateByUrl("/login")

  }

}
