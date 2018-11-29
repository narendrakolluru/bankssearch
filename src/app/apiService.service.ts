import { Injectable } 				from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class apiService {
  constructor(private http: HttpClient){
  }

  getCityDetails(searchText) {
            return this.http
            .get("https://vast-shore-74260.herokuapp.com/banks?city=" + searchText, {
                headers: {
                  "Content-Type" : "application/json",
                }

            });
        }
  }
