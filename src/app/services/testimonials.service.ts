import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  apiUrl:string = "https://reqres.in/api/users?page=1";

  constructor(private apiClient:HttpClient) { }

  getPersons(){
    let responce = this.apiClient.get(this.apiUrl);
    return responce;
  }
}
