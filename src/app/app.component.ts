import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  showHeadAndFooter: boolean = false;
  //currentuser! :any ; 
  userName:string ="User";
 
  isAuthenticated : boolean = !!localStorage.getItem('token');
constructor(public authiservice : AuthService,private router:Router){
  router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event['url'] == '/login' || event['url'] =='/register') {
        this.showHeadAndFooter = false;
      } else {
        this.showHeadAndFooter = true;
      }
    }
  
  });
 if(!!localStorage.getItem('token')){
  this.GetUserInfo()
 }
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