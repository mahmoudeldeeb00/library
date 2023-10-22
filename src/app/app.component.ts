import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  title = 'library';
  showHeadAndFooter: boolean = false;
  //currentuser! :any ; 


constructor(private router:Router,private modalService: MdbModalService){
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



  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: 'Custom title' },
    });
  }
}