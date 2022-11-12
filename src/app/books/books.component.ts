import { Component, OnInit } from '@angular/core';
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
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service : BookService) { }

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
}
