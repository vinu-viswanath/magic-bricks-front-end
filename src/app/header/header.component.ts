import { Component } from '@angular/core';
import { ApiService } from '../products/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private api:ApiService){}

  //To hold search term
  searchTerm:string=""

  search(event:any){
    console.log(event.target.value); //search value
    
    //to assign new value to behavior subject use next() method
    this.api.searchTerm.next(event.target.value) //add search term to behaviour subject
    
  }

}
