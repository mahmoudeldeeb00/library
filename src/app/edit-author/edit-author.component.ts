import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
 authorId!:number;
 public  authorForm!:FormGroup ;
  public Cities:any ;
  
  constructor( private r:ActivatedRoute,private formbuilder:FormBuilder, private service:BookService, private route :Router) { 
    this.r.paramMap.subscribe(res=>{
      this.authorId = Number(res.get("id"));
    })
   
  }

  ngOnInit(): void {
    this.getCities();
     this.init();
     this.intiateValues();
  }


  intiateValues(){
this.service.getAuthorDetails(this.authorId).subscribe((res)=>{
  res.birthDay = new Date(res.birthDay).toISOString().slice(0,10); 
    this.authorForm.patchValue(res)
    console.log(this.authorForm.value)
})
  }

getCities(){
  this.service.GetCities().subscribe((res:any[])=>{
    this.Cities = res;
   })
}
  private init (): void{

    this.authorForm = this.formbuilder.group({
      id :'',
      name:['',Validators.required],
      details:'',
      birthDay:'',
      cityId: ['',Validators.required],
      pictureSrc: ''  
    })
  }

   //save book function
 public editAuthor():void{
 
  this.service.EditAuhtor( this.authorId,this.authorForm.value).subscribe((result)=>{
    alert("author edited succefully" )
    this.route.navigate(['author'])
  })
 }


  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append("image", file);
        const upload$ = this.service.SaveAuthorPhoto(formData).subscribe((res)=>{
          this.authorForm.get('pictureSrc')?.setValue(res) ;
        });
  
       
    }
  }





}
