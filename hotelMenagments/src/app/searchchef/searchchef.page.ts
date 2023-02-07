import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePopupPage } from '../popup/profile-popup/profile-popup.page';



@Component({
  selector: 'app-searchchef',
  templateUrl: './searchchef.page.html',
  styleUrls: ['./searchchef.page.scss'],
})
export class SearchchefPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  notificationModal($event :any) {

  }

  async presentModal($event: any) {
    const modal = await this.modalCtrl.create({
      component: ProfilePopupPage,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      swipeToClose: true,
      mode:'ios',
      keyboardClose:true,
      componentProps: {
        'name': 'yamin',
      'city': 'naded'      },
      cssClass: 'my-modal'
    });
    return await modal.present();
  }

}
