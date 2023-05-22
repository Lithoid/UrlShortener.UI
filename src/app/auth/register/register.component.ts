import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel = {
    username: '',
    password: '',
    email: '',
  };
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  
  register(){
    this.authService.register(this.registerModel).subscribe({
     next:(response)=>{
       console.log(response);
       this.router.navigate(['auth/login']);
     }
    })
 
   }
}
