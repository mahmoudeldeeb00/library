import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  login(model:any){
    return this.http.post('https://localhost:44316/api/Authi/Token', model);
  }

  register(regmodel:any){
    console.log(regmodel)
    return this.http.post('https://localhost:44316/api/Authi/register', regmodel);

  }
  AddBook(bookmodel:any){
    return this.http.post('https://localhost:44316/api/Book/Add New Book', bookmodel);

  }

}
