import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-libraryhome',
  templateUrl: './libraryhome.component.html',
  styleUrls: ['./libraryhome.component.css']
})
export class LibraryhomeComponent implements OnInit {
libraries!:any[];
  constructor(private bserv:BookService) { }

  ngOnInit(): void {
    this.bserv.GetAllLibraries().subscribe((res:any[])=>{
      this.libraries = res;
      
    })
  }

}
