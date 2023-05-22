import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlsListComponent } from './urls/urls-list/urls-list.component';
import { AddUrlComponent } from './urls/add-url/add-url.component';
import { EditUrlComponent } from './urls/edit-url/edit-url.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: UrlsListComponent,
  },
  {
    path: 'urls',
    component: UrlsListComponent,
  },
  {
    path: 'urls/add',
    component: AddUrlComponent,
  },
  {
    path: 'urls/edit/:id',
    component: EditUrlComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
