import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  Authors: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  
 
  ///////////////////
  constructor(private service :BookService ) { }
public authors : any ; 
  ngOnInit(): void {
   // this.getAuthors();
    this.fetchAuthors();
  }
  // private getAuthors():void{
  //     this.service.getAuthors().subscribe(result => {
  //     this.authors = result;
     
  //     });
  // }
  
  fetchAuthors(): void {
    this.service.getAuthors().subscribe(
      (response) => {
        this.Authors = response;
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchAuthors();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchAuthors();
  }

}
