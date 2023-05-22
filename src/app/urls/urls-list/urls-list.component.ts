import { Component, OnInit } from '@angular/core';
import { Url } from 'src/app/models/url.model';
import { LocalStorageService } from 'src/app/services/local.service';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-urls-list',
  templateUrl: './urls-list.component.html',
  styleUrls: ['./urls-list.component.css']
})
export class UrlsListComponent implements OnInit {


  urls:Url[]=[]


  constructor(private urlsService:UrlsService) { }

  ngOnInit(): void {
    
    this.getAll();
    this.urlsService.Refreshrequired.subscribe(response =>{
      this.getAll();
    });
    
  }

  getAll(){
    this.urlsService.getAllUrls()
    .subscribe({
      next: (urls)=>{
        this.urls = urls;
        console.log( this.urls );
        
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
