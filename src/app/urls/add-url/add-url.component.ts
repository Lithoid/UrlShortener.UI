import { Component, OnInit } from '@angular/core';
import { Url } from 'src/app/models/url.model';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {



  addUrlRequest:Url={
    id:'',
    originalUrl:'',
    shortUrl:'',
    createdDate:'',
    userName:'',

  }

  constructor(private urlsService:UrlsService) { }
  

  ngOnInit(): void {
  }

  addUrl(){
    this.urlsService.addUrl(this.addUrlRequest).subscribe({next:(url)=>{
      console.log(url);
    }
  });
  }

}
