import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  users!: any;
  userfilter!: any;
  filter!: string;
  pool = false;
  length!: any;


  constructor(public service: UsersService, public rout: Router) {

  }



  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      this.users = data.data;
      this.length = this.users.length
      this.isLoading = false;
  
    })
  }

  serch(id: any): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        this.pool = true;
        let user = this.users[i];
        this.userfilter = [user]
        break;
      } else {
        this.pool = false;
      }

    }


  }

}



