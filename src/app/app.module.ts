import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './AuthGuard';
import { RegisterComponent } from './register/register.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { LibraryModule } from './library/library.module';
import { EditbookComponent } from './editbook/editbook.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { SharedModule } from 'src/shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    BooksComponent,
    LoginComponent,
    RegisterComponent,
    AddauthorComponent,
    AddbookComponent,
    BookdetailsComponent,
    EditAuthorComponent,
    AuthordetailsComponent,
    EditbookComponent,
    UserprofileComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    LibraryModule,
    AppRoutingModule,
    MdbModalModule,
    SharedModule
 
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true, 
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  /**
   *
   */
  
}
