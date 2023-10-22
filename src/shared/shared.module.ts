import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SecondaryNavbarComponent } from './secondary-navbar/secondary-navbar.component';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    ModalComponent,
    FooterComponent,
    NavbarComponent,
    SecondaryNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    ModalComponent,
    FooterComponent,
    NavbarComponent,
    SecondaryNavbarComponent,
    MatIconModule
    
  ]
})
export class SharedModule {

 }
