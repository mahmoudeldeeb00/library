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
AuthorsList:any;
librariesList:any;

librariesIds = new Array();
  constructor(private formbuilder : FormBuilder,private bookservice:BookService , private route :Router) { }

  ngOnInit(): void {
this.oninit()
this.bookservice.GetBookTypes().subscribe((res:any[])=>this.bookTypes=res);
this.bookservice.getAuthors().subscribe((res:any[])=>this.AuthorsList=res);
this.bookservice.GetAllLibraries().subscribe((res:any[])=>this.librariesList=res);

  }

savebook():void{
this.bookForm.get('libraiesFoundIn')?.setValue(JSON.stringify(this.librariesIds))
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
      BookTypeId:['',Validators.required],
      AuthorId:['',Validators.required],
      libraiesFoundIn:['']
    })
  }


get name(){
  return this.bookForm.get("Name")
}
 AddLib(id:number){

  if(!this.librariesIds.includes(id)){
    document.getElementById("btn-"+ id)?.style.setProperty('opacity','1');
    this.librariesIds.push(id);
  }
  else{
    document.getElementById("btn-"+ id)?.style.setProperty('opacity','.2');
    this.librariesIds.splice(this.librariesIds.indexOf(id));
  }


 }







}
