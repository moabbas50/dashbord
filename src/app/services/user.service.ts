import { Injectable } from '@angular/core';
import { ApifunctionserviceService } from './apifunctionservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApifunctionserviceService<any> {

  constructor(public override http:HttpClient,public override rout:Router) {
    super("https://reqres.in/api/users/",http,rout);
  }
}
