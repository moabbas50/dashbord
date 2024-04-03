import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionserviceService<T> {


  constructor(@Inject(String) public url:string, public http:HttpClient, public rout:Router ) { }


get():Observable<T>{
  return this.http.get<T>(this.url);
}
getbyid(id:any):Observable<T>{
  return this.http.get<T>(this.url+`${id}`);
}

}
