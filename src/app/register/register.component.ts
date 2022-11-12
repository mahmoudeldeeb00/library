import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   regform!: FormGroup

  constructor(private authservice:AuthService, private router:Router, private formbuilder: FormBuilder  ) { }

  ngOnInit(): void {
    this.init();
  }

  regsubmitForm(){
    if (this.regform.invalid) {
      return;
    }
    this.authservice
    .register(this.regform.value)
    .subscribe((response)=>{
      this.router.navigate(['']);
    })
}



init():void{
  this.regform = this.formbuilder.group({
     firstName:'',
    lastName:'',
    userName:'',
    email:'',
    pasword:''
  })
}

}


