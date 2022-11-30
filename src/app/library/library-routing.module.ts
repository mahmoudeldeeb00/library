import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';
import { LibraryhomeComponent } from './libraryhome/libraryhome.component';

 const libraryroutes: Routes = [
 
  {path:'addlibrary',component:AddlibraryComponent},
  {path:'libraryhome',component:LibraryhomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(libraryroutes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
