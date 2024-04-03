import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  id: any;
  user: any;
  constructor(public service: UserService, public activerout: ActivatedRoute) {
    this.id = activerout.snapshot.paramMap.get('id');

    service.getbyid(this.id).subscribe((data => {
      this.user = data;
    }))

  }


}
