import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  Close() {
    this.popoverController.dismiss();
  }

}
