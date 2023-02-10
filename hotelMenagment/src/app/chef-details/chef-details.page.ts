import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.page.html',
  styleUrls: ['./chef-details.page.scss'],
})
export class ChefDetailsPage implements OnInit {

  user = <any>[];
  segId = 'overview';

  orders = <any>[];
  dish = <any>[];
  constructor(public loadingController: LoadingController, private service: AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res)=>{
        this.user = res.document.records;
        console.log(this.user[1])
        this.loadingController.dismiss();
      })
      this.service.getAllDishes().subscribe((res) =>{
        this.dish = res.document.records;
        console.log(this.dish)
      })
      this.service.getAllOrders().subscribe((res) =>{
        this.orders = res.document.records;
        console.log(this.orders)
      })
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait..'
    });
    await loading.present();
  }

  segmentChanged($event:any){
    this.segId = $event.detail.value;
  }

  goToEvent(){

  }

  presentPopover($event:any){

  }

}
