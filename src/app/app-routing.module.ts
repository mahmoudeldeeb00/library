import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';

import { AuthGuard } from './AuthGuard';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"" , component:HomeComponent,canActivate: [AuthGuard] },
  {path:"author" , component:AuthorComponent},
  {path:"books" , component:BooksComponent},
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"addauthor" , component:AddauthorComponent},
  {path:"addbook" , component:AddbookComponent},



  
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
