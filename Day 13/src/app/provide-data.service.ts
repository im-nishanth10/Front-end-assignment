import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor(private http:HttpClient) { }
  getComments(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>console.log(data));
  }
  getData(){
    console.log(this.http.get("https://jsonplaceholder.typicode.com/users"));
  }
  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
