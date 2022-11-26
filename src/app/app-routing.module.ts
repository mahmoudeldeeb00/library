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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"" , component:HomeComponent },
  {path:"author" , component:AuthorComponent,canActivate: [AuthGuard]},
  {path:"books" , component:BooksComponent,canActivate: [AuthGuard]},
  {path:"bookdetails/:id" , component:BookdetailsComponent,canActivate: [AuthGuard]},
  {path:"authordetails/:id" , component:AuthordetailsComponent,canActivate: [AuthGuard]},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"addauthor" , component:AddauthorComponent,canActivate: [AuthGuard]},
  {path:"editauthor/:id" , component:EditAuthorComponent,canActivate: [AuthGuard]},
  {path:"addbook" , component:AddbookComponent,canActivate: [AuthGuard]},
  //{path:"addbook" , component:AddbookComponent},



  
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
