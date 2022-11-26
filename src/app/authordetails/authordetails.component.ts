import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { authorModel } from 'src/models/authorModel';
import { BookService } from '../book.service';

@Component({
  selector: 'app-authordetails',
  templateUrl: './authordetails.component.html',
  styleUrls: ['./authordetails.component.css']
})
export class AuthordetailsComponent implements OnInit {
  baseId!:number;
  authModel! :authorModel;
  constructor(private r :ActivatedRoute , private _service :BookService,private title:Title ) { 

this.r.paramMap.subscribe(s=>{
  this.baseId = Number(s.get('id'));
})
  }

  ngOnInit(): void {
    this.fetchData();
    
  }
  fetchData(){
    this._service.getAuthorDetails(this.baseId).subscribe((res:authorModel)=>{
      this.title.setTitle(res.name)
      this.authModel = res;
    
   
    })
  }

}
