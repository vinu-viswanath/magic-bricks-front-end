import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //To hold search term
  searchTerm= new BehaviorSubject('')

  //Backend path
  BASE_URL = 'http://localhost:5000'

  constructor(private http:HttpClient) { }

  //get all Houses
  getAllHouses(){
    return this.http.get(`${this.BASE_URL}/products/all-products`)
  }

  //View particular product
  viewHouses(product_id:any){
    return this.http.get(`${this.BASE_URL}/products/viewproduct/${product_id}`)
  }
  
}
