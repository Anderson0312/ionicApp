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
  constructor(public loadingController: LoadingController, private service: AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res)=>{
        this.user = res.document.records;
        console.log(this.user[1])
        this.loadingController.dismiss();
      })
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait..'
    });
    await loading.present();
  }

}
