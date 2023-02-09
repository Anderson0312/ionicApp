import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrdersPage } from '../popup/orders/orders.page';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orders= [{
    "date": "today, 23 Aug 2021",
    "order": [{
      "id": "01",
      "image": "001.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CONFIRM"
    },
    {
      "id": "02",
      "image": "002.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CONFIRM"
    },
    {
      "id": "03",
      "image": "003.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CANCELLED"
    },
    {
      "id": "04",
      "image": "004.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CONFIRM"
    },
    {
      "id": "05",
      "image": "005.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CONFIRM"
    },
    {
      "id": "06",
      "image": "006.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CANCELLED"
    },
    {
      "id": "07",
      "image": "007.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transID": "323244",
      "time": "20 Min",
      "status": "CONFIRM"
    }],
  },
  {
  "date": "today, 01 Febre 2022",
  "order": [{
    "id": "01",
    "image": "001.jpg",
    "title": "Hamburger",
    "amount": "55.40",
    "transID": "323244",
    "time": "20 Min",
    "status": "CONFIRM"
  },
  {
    "id": "02",
    "image": "002.jpg",
    "title": "Hamburger",
    "amount": "55.40",
    "transID": "323244",
    "time": "20 Min",
    "status": "CANCELLED"
  },
  {
    "id": "03",
    "image": "003.jpg",
    "title": "Hamburger",
    "amount": "55.40",
    "transID": "323244",
    "time": "20 Min",
    "status": "CONFIRM"
  },
]
}
]

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  segmentChanged($event: any) {
    console.log($event.detail.value);

  }

  async presentPopover($event: any) {
    const popover = await this.popoverController.create({
      component: OrdersPage,
      event: $event,
      mode: 'ios',
      translucent: true
    })
    await popover.present();
  }

}
