import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';
import { LibraryhomeComponent } from './libraryhome/libraryhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddlibraryComponent,
    LibraryhomeComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  ,providers:[]
})
export class LibraryModule { }
