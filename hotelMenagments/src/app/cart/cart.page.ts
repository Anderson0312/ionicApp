import { AppServiceService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { ProfileMenuPage } from '../pages/component/profile-menu/profile-menu.page';
import { ProfilePopupPage } from '../profile-popup/profile-popup.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  orders= <any>[];
  constructor(private modalCtrl : ModalController, private popoverControl : PopoverController, private service :AppServiceService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllCart().subscribe((result) => {
        this.orders = result.document.records;
        console.log(this.orders);
        this.loadingController.dismiss();
      });
    });
  }

  notificationModal($event :any) {

  }

  deleteItem(orderid :any ){

  }

  remove(i:any) {

  }

  add(i:any) {
    
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message : 'Please Wait...'
    });
    await loading.present();
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
      'city': 'naded'      
    },
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
