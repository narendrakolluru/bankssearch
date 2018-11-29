import { Component } from '@angular/core';
import { apiService } from './apiService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [apiService]

})
export class AppComponent {
  listOfData : any;
  constructor (private apiservice : apiService){}
  title = 'citysearch';

  search(reqObj){
    reqObj = reqObj.toUpperCase();
    this.apiservice.getCityDetails(reqObj).subscribe(
      (response)=>{
        this.listOfData = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  // https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI

}
