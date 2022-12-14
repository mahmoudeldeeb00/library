import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    Email: new FormControl(null, Validators.required) ,
    Password: new FormControl(null, Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }
       this.authService
       .login(this.form.value)
       .subscribe((response) => { 
         this.router.navigate(['']).then(()=>{
          location.reload();
        });      
      }
      
      );
    
    
   
  }











}
