import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookModel } from 'src/models/bookModel';
import { BookService } from '../book.service';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})


export class BookdetailsComponent implements OnInit{
  
   bookDetails:bookModel ={id:0,name:'',authorId:0,authorName:'',bookTypeName:'',pageNumbers:0,price:0,publishDate:new Date()};
  id!:number;  
  constructor(private route :ActivatedRoute , private bookserv:BookService) {
    
    this.route.paramMap.subscribe((res)=>{
      this.id = Number(res.get("id"));
    })
   }

  ngOnInit(): void {
    this.fetchBookData();
  }

  fetchBookData(){
    this.bookserv.getBookDetails(this.id).subscribe((res : bookModel)=>{
      this.bookDetails = res;
      console.log(res)
    })
  }

}

