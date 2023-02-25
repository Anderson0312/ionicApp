import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  constructor(
    public http: HttpClient
  ) { }

  getAllDishes(): Observable<any>{
    return this.http.get('assets/json/dish.json')
  }

  getAllOrders(): Observable<any> {
    return this.http.get('assets/json/order.json')
  }

  getAllPayments(): Observable<any>{
    return this.http.get('assets/json/payment.json')
  }

  getAllMenuDishes(): Observable<any>{
    return this.http.get('assets/json/menuDush.json')
  }


}
