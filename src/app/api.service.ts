import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseurl=environment.domain;
  constructor(private http: HttpClient) { }
  login(model:any){
    return this.http.post(`${this.baseurl}/api/Authi/Token`, model);
  }

  register(regmodel:any){
   
    return this.http.post(`${this.baseurl}/api/Authi/register`, regmodel);

  }
  public GetUserInfo (){
    return this.http.get(`${this.baseurl}/api/Authi/getCurrentUserInfromation`);
 }
  public getUserRoles():Observable<any>{
    return this.http.get(`${this.baseurl}/api/Authi/getCurrentUserRoles`)
  }
  

}
