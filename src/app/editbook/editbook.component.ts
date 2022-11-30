import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit ,AfterViewChecked{
baseId!:number;
bookForm!:FormGroup ;
bookTypes :any ; 
AuthorsList:any;
librariesList:any;
librariesIds = new Array();
  constructor(private r:ActivatedRoute , private bookserv : BookService,private formbuilder:FormBuilder , private route :Router) { 
    this.r.paramMap.subscribe(res=>{
      this.baseId = Number(res.get('id'))
    })

  }

  ngOnInit(): void {
this.init()

  }


  init(){
    this.bookserv.GetBookTypes().subscribe((res:any[])=>this.bookTypes=res);
    this.bookserv.getAuthors().subscribe((res:any[])=>this.AuthorsList=res);
    this.bookserv.GetAllLibraries().subscribe((res:any[])=>this.librariesList=res);

    this.bookForm = this.formbuilder.group({

      name:['',[Validators.required,Validators.minLength(5)]],
      price:'',
      publishDate:'',
      pageNumbers:'',
      bookTypeId:['',Validators.required],
      authorId:['',Validators.required],
      libraiesFoundIn:['']
    })

      this.bookserv.getBookDetails(this.baseId).subscribe((res)=>{
        this.librariesIds = JSON.parse(res.libraiesFoundIn)
        res.publishDate = new Date(res.publishDate).toISOString().slice(0,10); 
        this.bookForm.patchValue(res);
      
        this.librariesIds.forEach((element,e) => {
          document.getElementById("btn-"+ element)?.style.setProperty('opacity','1');
        });
      })
    
  }


  EditBook(){
    this.bookForm.get('libraiesFoundIn')?.setValue(JSON.stringify(this.librariesIds))
this.bookserv.EditBook(this.baseId , this.bookForm.value).subscribe((res)=>{
  alert(res);
  this.route.navigate(['/books']);
})
  }
  AddLib(id:number){
    if(!this.librariesIds.includes(id)){
      this.librariesIds.push(id);
      this.updatebtns();
    }
    else{
      this.librariesIds.splice(this.librariesIds.indexOf(id));
      this.updatebtns();
    }
  
  }

  updatebtns(){

Array.from(document.getElementsByClassName('lib-btn')).forEach((element:any) => {
  element?.style.setProperty('opacity','0.3');
});

    this.librariesIds.forEach((element,e) => {
      document.getElementById("btn-"+ element)?.style.setProperty('opacity','1');
    });

  }
  ngAfterViewChecked(): void {
  this.updatebtns();
}
}
