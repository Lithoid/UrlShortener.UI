import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Url } from '../models/url.model';
import { Observable, Subject, tap } from 'rxjs';
import { LocalStorageService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient,private localService: LocalStorageService) {}


  private refreshRequired = new Subject<void>();
  get Refreshrequired(){
    return this.refreshRequired;
  }


  
  
  
  getAllUrls():Observable<Url[]> {   

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.localService.get("JWT")}`,
    });

    return this.http.get<Url[]>(this.baseApiUrl + '/api/Url',{headers:headers});
  }


  addUrl(addUrlRequest:Url):Observable<Url> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.localService.get("JWT")}`,
    });

    return this.http.post<Url>(this.baseApiUrl + '/api/Url',addUrlRequest,{headers:headers}).pipe(tap(()=>this.Refreshrequired.next()));
    
  }

  getUrl(id:string):Observable<Url> {

    return this.http.get<Url>(this.baseApiUrl + '/api/Url/'+id);
    
  }

  editUrl(urlDetails:Url):Observable<Url> {

    return this.http.put<Url>(this.baseApiUrl + '/api/Url',urlDetails);
    
  }

  deleteUrl(id:string):Observable<Url> {

    return this.http.delete<Url>(this.baseApiUrl + '/api/Url/'+id);
    
  }


}
