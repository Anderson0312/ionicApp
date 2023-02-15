import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

import { ProfilePopupPage } from '../profile-popup/profile-popup.page';
import { ProfileMenuPage } from '../pages/component/profile-menu/profile-menu.page';



@Component({
  selector: 'app-searchchef',
  templateUrl: './searchchef.page.html',
  styleUrls: ['./searchchef.page.scss'],
})
export class SearchchefPage implements OnInit {
  data = [
    {
      "image_id": "01",
      "image": "001.jpg"
    },
    {
      "image_id": "02",
      "image": "002.jpg"
    },
    {
      "image_id": "03",
      "image": "003.jpg"
    },
    {
      "image_id": "04",
      "image": "004.jpg"
    },
    {
      "image_id": "05",
      "image": "005.jpg"
    },
  ]
  constructor(private modalCtrl : ModalController, private popoverControl : PopoverController) { }

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

  async presentPopover($event: any){
    const popover = await this.popoverControl.create({
      component: ProfileMenuPage,
      event: $event,
      mode: 'ios',
      translucent: true
    })
    await popover.present();
  }

}
