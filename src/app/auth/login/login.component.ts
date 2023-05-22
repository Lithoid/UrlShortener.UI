import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginModel:LoginModel ={
    username: '',
    password: ''
  }

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login(){
   this.authService.login(this.loginModel).subscribe({
    next:(response)=>{
      console.log(response.token);
      if(response.token){
        this.localService.set("JWT", response.token);
        this.router.navigate(['urls']);
      }else{
        alert(response.message);
      }
    }
   })

  }

}
