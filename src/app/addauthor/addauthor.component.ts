import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  public  authorForm!:FormGroup ;
  public Cities:any ;
 
  constructor(private formbuilder:FormBuilder, private service:BookService, private route :Router) { 
   this.service.GetCities().subscribe((res:any[])=>{
    this.Cities = res;
   })
    
  }

  ngOnInit(): void {
    this.init()
  // this.setcitylist()
  }
  
 //save book function
 public saveauthor():void{
 
  this.service.AddAuhtor(this.authorForm.value).subscribe((result)=>{
    alert("author added succefully" )
    this.route.navigate(['author'])
  })
 }
// setcitylist():void{
//   this.service.GetCities().subscribe((result)=>{
//     this.Cities= result ; 
    
//   })
// }
private init (): void{
  this.authorForm = this.formbuilder.group({
    Name:'',
    Details:'',
    BirthDay:'',
    CityId: '',
    pictureSrc: ''  
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