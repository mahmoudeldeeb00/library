import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books : any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  isAdmin!:boolean;
  constructor(private service : BookService ,private title:Title , private authserv:AuthService) {
    this.title.setTitle("books")
this.authserv.CheckUserIsAdmin().subscribe((res:string[])=>{
  this.isAdmin = res.includes("Admin")


}
  )
  }

  ngOnInit(): void {
    this.getBooks();
  
  }
 hellomsg:string = "Welcome To Home Page"

private getBooks ():void {
  this.service.getBooks().subscribe(result =>{
      this.books = result;
     
  })

}

  onTableDataChange(event: any) {
    this.page = event;
    this.getBooks();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getBooks();
  }

  RemoveBook(id:number){
   
     this.service.DeleteBook(id).subscribe(res=>{

      var deleted = document.getElementById('book-'+id)
      deleted?.style.setProperty("transition","all 2s  ease-in-out")
      deleted?.style.setProperty("opacity","0")
      setTimeout(function(){
  deleted?.remove();
      },2000)

     })
  }

}
