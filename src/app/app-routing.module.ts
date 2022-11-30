import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';

import { AuthGuard } from './AuthGuard';
import { AuthorComponent } from './author/author.component';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooksComponent } from './books/books.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { EditbookComponent } from './editbook/editbook.component';
import { HomeComponent } from './home/home.component';
import { AddlibraryComponent } from './library/addlibrary/addlibrary.component';
import { LibraryModule } from './library/library.module';
import { LibraryhomeComponent } from './library/libraryhome/libraryhome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:"" , component:HomeComponent },
  {path:"library" ,component:LibraryhomeComponent,
  children:[
    {path:'addlibrary',component:AddlibraryComponent},
  ]
  },
  {path:"author" , component:AuthorComponent,canActivate: [AuthGuard]},
  {path:"books" , component:BooksComponent,canActivate: [AuthGuard]},
  {path:"bookdetails/:id" , component:BookdetailsComponent,canActivate: [AuthGuard]},
  {path:"authordetails/:id" , component:AuthordetailsComponent,canActivate: [AuthGuard]},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"addauthor" , component:AddauthorComponent,canActivate: [AuthGuard]},
  {path:"editauthor/:id" , component:EditAuthorComponent,canActivate: [AuthGuard]},
  {path:"editbook/:id" , component:EditbookComponent,canActivate: [AuthGuard]},
  {path:"addbook" , component:AddbookComponent,canActivate: [AuthGuard]},
  {path:"myprofile" , component:UserprofileComponent,canActivate: [AuthGuard]},




  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
