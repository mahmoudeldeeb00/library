import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

   login(model:any) {
    
    return this.apiService.login(model).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', response.token);
      })
    );



    
  }
  register(regmodel:any){

    return this.apiService.register(regmodel).pipe(

      tap((response:any)=>{
        this._isLoggedIn$.next(true);
      
        localStorage.setItem('token', response.token);
      })
    );
  }

  public getToken(): string {
    return <string>localStorage.getItem('token');
  }


}
