import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
bookForm!:FormGroup ;
bookTypes :any ; 
  constructor(private formbuilder : FormBuilder,private bookservice:BookService , private route :Router) { }

  ngOnInit(): void {
this.oninit()
this.bookservice.GetBookTypes().subscribe((res:any[])=>this.bookTypes=res);
  }

savebook():void{
this.bookservice.AddBook(this.bookForm.value).subscribe((result)=>{
  alert(result )
    this.route.navigate(['books'])
},err=>{
  console.log(err)
}
);


}

  oninit():void{
    this.bookForm = this.formbuilder.group({
      Name:['',[Validators.required,Validators.minLength(5)]],
      Price:'',
      PublishDate:'',
      PageNumbers:'',
      BookTypeId:'',
      AuthorId:''
    })
  }


get name(){
  return this.bookForm.get("Name")
}








}
