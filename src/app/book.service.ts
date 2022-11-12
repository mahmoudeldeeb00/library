import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http : HttpClient) { }
  // get books 
public getBooks (): Observable<any>{
  return this.http.get("https://localhost:44316/api/Book/View Books");
}
// get authorss
public getAuthors (): Observable<any>{
  return this.http.get("https://localhost:44316/api/Author/View Authors")
}
//add new Author
public AddAuhtor (author:any):Observable<any>{
  return  this.http.post("https://localhost:44316/api/Author/Add Author",author, {responseType: 'text'});
}
//addbook
public AddBook (book:any): Observable<any>{
  return this.http.post("https://localhost:44316/api/Book/Add New Book",book,{responseType: 'text'});

}

public SaveAuthorPhoto (file:FormData): Observable<any>{
  console.log(file)
  return this.http.post("https://localhost:44316/api/helper/SaveFile" , file, {responseType:'text'});

}



// selects Helper
//cities list
public GetCities (): Observable<any>{
  return this.http.get("https://localhost:44316/api/helper/cities");

}
//Book Types list
public GetBookTypes (): Observable<any>{
  return this.http.get("https://localhost:44316/api/helper/BookTypes");

}
}
