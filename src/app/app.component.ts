import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  showHeadAndFooter: boolean = false;

constructor(public authiservice : AuthService,public http: HttpClient,router:Router){
  router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event['url'] == '/login' || event['url'] =='/register') {
        this.showHeadAndFooter = false;
      } else {
        this.showHeadAndFooter = true;
      }
    }
  
  });
  
 
}


public connectServer() {
  this.http.get('url')
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
}
  
}
