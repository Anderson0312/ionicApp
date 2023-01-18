import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  getAllDishes(): Observable<any>{
    return this.http.get('assets/json/dish.json')
  }

  getAllOrders(): Observable<any> {
    return this.http.get('assets/json/order.json')
  }

  getAllPayments(): Observable<any>{
    return this.http.get('assets/json/payments.json')
  }
}
