import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.page.html',
  styleUrls: ['./profile-popup.page.scss'],
})
export class ProfilePopupPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  dismiss(){
    this.popoverController.dismiss();
  }

}
