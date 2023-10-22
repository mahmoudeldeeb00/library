import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
 chekIfAdmin:boolean =false;
 authorsisxts =false ;
  Authors :any ; 
  Aauthors = new BehaviorSubject<any>({});
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  ///////////////////
  constructor(private service :BookService ,private aserv: AuthService) {
    
     this.aserv.CheckUserIsAdmin().subscribe(res=>{
      this.chekIfAdmin = res.includes("Admin")
     })
     this.fetchAuthors();
     
    
   }
  ngOnInit(): void {
  }
  
 
 
  fetchAuthors(): void {
    this.service.getAuthors().subscribe(
      (response) => {
     
        this.Authors = response;   
        if(response.count >0)
          this.authorsisxts= true;
        console.log(response)
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchAuthors();
  }
 

DeleteAuthor(id:number){
//server side
this.service.DeleteAuthor(id).subscribe();
//dom side 
  const deletedrow = document.getElementById('author-'+ id); 
  deletedrow?.style.setProperty('opacity','0')
  setTimeout(function(){
    deletedrow?.remove()
  },1000) 

}


}
