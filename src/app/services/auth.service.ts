import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local.service';
import { Router } from '@angular/router';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient,private localService:LocalStorageService,private router: Router) {}

  login(loginModel: LoginModel):Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/Account/login',loginModel)

  }

  register(registerModel: RegisterModel):Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/Account/register',registerModel)

  }

  isAuthorized():boolean {
    if(this.localService.get('JWT')){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.localService.remove('JWT');


  }
}
