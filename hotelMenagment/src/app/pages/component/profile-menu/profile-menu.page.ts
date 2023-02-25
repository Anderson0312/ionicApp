import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.page.html',
  styleUrls: ['./profile-menu.page.scss'],
})
export class ProfileMenuPage implements OnInit {

  constructor(private popoverController : PopoverController) { }

  ngOnInit() {
  }

  Close(){
    this.popoverController.dismiss();
  }

}
