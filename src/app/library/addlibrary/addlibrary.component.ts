import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrls: ['./addlibrary.component.css']
})
export class AddlibraryComponent implements OnInit {
libraryForm!:FormGroup;
cityList!:any;
  constructor(private formbd : FormBuilder,private bserv:BookService,private r:Router) {
       this.bserv.GetCities().subscribe((res:any[])=>{
    this.cityList = res;
   })
   }

  ngOnInit(): void {
    this.init()
  }

 
 
 AddLibrary(){
  this.bserv.AddLibrary(this.libraryForm.value).subscribe((res)=>{
    console.log(" add method works ")
    alert(res);
    this.r.navigate(['library'])
  })
 }
 
 private init ():void{

  this.libraryForm = this.formbd.group({
    
    name:['',Validators.required],
    address:['',Validators.required],
    cityId:['',Validators.required],
  })
 }

}
