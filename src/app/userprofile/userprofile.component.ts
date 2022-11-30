import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userId!:string;
  bookschecked!:any[];
  constructor( private authserv:AuthService ,private bookserv:BookService) { 
    this.authserv.getUserInfo().subscribe((res:any)=>{
      this.userId=res.id
    })

  }

  ngOnInit(): void {
  
  }

  GetCheckedBooks(){
    let show:boolean =true;
     var div = document.getElementById('booksdiv')
     if(div?.style.getPropertyValue('opacity')=='0'){
       div?.style.setProperty('height','100%')
       div?.style.setProperty('opacity','1')
 

     }else{
      div?.style.setProperty('opacity','0')
      div?.style.setProperty('height','0px')
    
  
     }
      this.bookserv.getBookChecked(this.userId).subscribe((res)=>{
        this.bookschecked = res
      })
    
  }


  DeleteCheck(id:number){
      this.bookserv.DeleteCheck(id).subscribe((res)=>{
        var li = document.getElementById('check-'+id)
        li?.style.setProperty('transition','all ease-in-out 2s')
       li?.style.setProperty('opacity','0')
        setTimeout(() => {
          li?.remove()
        },2000);
      })
  }

}

