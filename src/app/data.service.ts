import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // create an instance of the HttpClient
  // in order to use the HttpClient, we need to create an instance of it through dependency injection within the constructor:
  constructor(private http: HttpClient) {  // http is the intance data type will be the HttpClient

  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(UserId) {
    console.log();
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+ UserId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
}
