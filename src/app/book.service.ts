import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http : HttpClient) { }
  

  //////////////////////////// books //////////////////////
  // get books 
public getBooks (): Observable<any>{
  return this.http.get("https://localhost:44316/api/Book/View Books");
}

public AddBook (book:any): Observable<any>{
  return this.http.post("https://localhost:44316/api/Book/Add New Book",book, {responseType: 'text'});

}

public EditBook ( id:number , book:any):Observable<any>{
  return  this.http.put("https://localhost:44316/api/Book/Edit Book",book,{params:{BookId:id},responseType: 'text'});
}

public DeleteBook ( id:number ):Observable<any>{
  return  this.http.delete("https://localhost:44316/api/Book/Delete Book ",{params:{BookId:id},responseType: 'text'});
}

public getBookDetails (id : number): Observable<any>{
  return this.http.get("https://localhost:44316/api/Book/View One Book By Id ",{params:{Id:id}})
}

public CheckBook (userid:string, bookid:number,libraryId:number): Observable<any>{
  return this.http.post("https://localhost:44316/api/Book/Check Book",'', { params:{ UserId :userid, BookId:bookid, LibraryId:libraryId} ,responseType: 'text'});

}
public DeleteCheck ( id:number ):Observable<any>{
  return  this.http.post("https://localhost:44316/api/Book/Finish The Check", id,{responseType: 'text'});
}
public getBookChecked (userId : string): Observable<any>{
  return this.http.get("https://localhost:44316/api/Book/Books Checked To User",{params:{UserId:userId}})
}


  //////////////////////////// authors //////////////////////

// get authorss
public getAuthors (): Observable<any>{
  return this.http.get("https://localhost:44316/api/Author/View Authors")
}
//add new Author
public AddAuhtor (author:any):Observable<any>{
  return  this.http.post("https://localhost:44316/api/Author/Add Author",author, {responseType: 'text'});
}

public EditAuhtor ( id:number , author:any):Observable<any>{
  return  this.http.put("https://localhost:44316/api/Author/Edit Model",author,{params:{Id:id},responseType: 'text'});
}
public DeleteAuthor(id:number):Observable<any>{
  return this.http.delete("https://localhost:44316/api/Author/Delete Author" ,{params:{Id:id}} )
}
public getAuthorDetails (id : number): Observable<any>{
  return this.http.get("https://localhost:44316/api/Author/Get One Author",{params:{Id:id}})
}


public SaveAuthorPhoto (file:FormData): Observable<any>{
  return this.http.post("https://localhost:44316/api/helper/SaveFile" , file, {responseType:'text'});

}



/////////////////////// Library //////////////////////////////
public GetAllLibraries():Observable<any>{
  return this.http.get("https://localhost:44316/api/Library/View libraries");
}

public AddLibrary(lib:any):Observable<any>{
  return this.http.post("https://localhost:44316/api/Library/Add Library",lib, {responseType: 'text'});
}


// //////////////    Selectors   //////////////////// // 
//cities list
public GetCities (): Observable<any>{
  return this.http.get("https://localhost:44316/api/helper/cities");

}
//Book Types list
public GetBookTypes (): Observable<any>{
  return this.http.get("https://localhost:44316/api/helper/BookTypes");

}
}
