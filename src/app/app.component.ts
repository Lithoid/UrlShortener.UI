import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UrlShortener.UI';
  user = {
    username: '',
  };


  constructor(
    public authService: AuthService,
    private router: Router
  ) {}


  ngOnInit() {}

  logout(){
    this.authService.logout();
    this.router.navigate(['urls'])
  }
}
