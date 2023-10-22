import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl=environment.domain;

  constructor(private http : HttpClient) { }
  

  //////////////////////////// books //////////////////////
  // get books 
public getBooks (): Observable<any>{
  return this.http.get(`${this.baseurl}/api/Book/View Books`);
}

public AddBook (book:any): Observable<any>{
  return this.http.post(`${this.baseurl}/api/Book/Add New Book`,book, {responseType: 'text'});

}

public EditBook ( id:number , book:any):Observable<any>{
  return  this.http.put(`${this.baseurl}/api/Book/Edit Book`,book,{params:{BookId:id},responseType: 'text'});
}

public DeleteBook ( id:number ):Observable<any>{
  return  this.http.delete(`${this.baseurl}/api/Book/Delete Book`,{params:{BookId:id},responseType: 'text'});
}

public getBookDetails (id : number): Observable<any>{
  return this.http.get(`${this.baseurl}/api/Book/View One Book By Id `,{params:{Id:id}})
}

public CheckBook (userid:string, bookid:number,libraryId:number): Observable<any>{
  return this.http.post(`${this.baseurl}/api/Book/Check Book`,'', { params:{ UserId :userid, BookId:bookid, LibraryId:libraryId} ,responseType: 'text'});

}
public DeleteCheck ( id:number ):Observable<any>{
  return  this.http.post(`${this.baseurl}/api/Book/Finish The Check`, id,{responseType: 'text'});
}
public getBookChecked (userId : string): Observable<any>{
  return this.http.get(`${this.baseurl}/api/Book/Books Checked To User`,{params:{UserId:userId}})
}


  //////////////////////////// authors //////////////////////

// get authorss
public getAuthors (): Observable<any>{
  return this.http.get(`${this.baseurl}/api/Author/View Authors`)
}
//add new Author
public AddAuhtor (author:any):Observable<any>{
  return  this.http.post(`${this.baseurl}/api/Author/Add Author`,author, {responseType: 'text'});
}

public EditAuhtor ( id:number , author:any):Observable<any>{
  return  this.http.put(`${this.baseurl}/api/Author/Edit Model`,author,{params:{Id:id},responseType: 'text'});
}
public DeleteAuthor(id:number):Observable<any>{
  return this.http.delete(`${this.baseurl}/api/Author/Delete Author` ,{params:{Id:id}} )
}
public getAuthorDetails (id : number): Observable<any>{
  return this.http.get(`${this.baseurl}/api/Author/Get One Author`,{params:{Id:id}})
}


public SaveAuthorPhoto (file:FormData): Observable<any>{
  return this.http.post(`${this.baseurl}/api/helper/SaveFile` , file, {responseType:'text'});

}



/////////////////////// Library //////////////////////////////
public GetAllLibraries():Observable<any>{
  return this.http.get(`${this.baseurl}/api/Library/View libraries`);
}

public AddLibrary(lib:any):Observable<any>{
  return this.http.post(`${this.baseurl}/api/Library/Add Library`,lib, {responseType: 'text'});
}


// //////////////    Selectors   //////////////////// // 
//cities list
public GetCities (): Observable<any>{
  return this.http.get(`${this.baseurl}/api/helper/cities`);

}
//Book Types list
public GetBookTypes (): Observable<any>{
  return this.http.get(`${this.baseurl}/api/helper/BookTypes`);

}
}
