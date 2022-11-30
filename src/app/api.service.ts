import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  login(model:any){
    return this.http.post('https://localhost:44316/api/Authi/Token', model);
  }

  register(regmodel:any){
   
    return this.http.post('https://localhost:44316/api/Authi/register', regmodel);

  }
  public GetUserInfo (){
    return this.http.get("https://localhost:44316/api/Authi/getCurrentUserInfromation");
 }
  public getUserRoles():Observable<any>{
    return this.http.get("https://localhost:44316/api/Authi/getCurrentUserRoles")
  }
  

}
