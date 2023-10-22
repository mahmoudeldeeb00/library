import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName:string ="User";
 
  isAuthenticated : boolean = !!localStorage.getItem('token');
  constructor(private authiservice : AuthService , public router :Router) {
    if(!!localStorage.getItem('token')){
      this.GetUserInfo()
     }
   }

  ngOnInit(): void {
  }
  public GetUserInfo (){
    this.authiservice.getUserInfo().subscribe((res:any)=>{
     //this.currentuser = res;
     this.userName = res.userName
 })
    
 }
 
 public logOut(){
     this.authiservice.logout();
     this.router.navigate(['']).then(()=>{
       location.reload();
     });
    
   }
}
