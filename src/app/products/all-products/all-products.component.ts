import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  //To hold the product details
  allhouses:any=[] //array(20)

    //To hold search term
    searchTerm: string=""

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllHouses().subscribe((result)=>{
      console.log(result);  //array (20)
      this.allhouses=result;
      
    })
    // this.searchTerm=this.api.searchTerm
    // console.log(this.searchTerm);
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm=result;
      console.log(this.searchTerm);
      
    })
    
  }


}
