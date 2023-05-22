import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlsComponent } from './urls/urls.component';
import { UrlsListComponent } from './urls/urls-list/urls-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUrlComponent } from './urls/add-url/add-url.component';
import { FormsModule } from '@angular/forms';
import { EditUrlComponent } from './urls/edit-url/edit-url.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlsComponent,
    UrlsListComponent,
    AddUrlComponent,
    EditUrlComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
