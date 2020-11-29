import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/common/models/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  private _user: User;

  @Input() name: any;

  @Input('profile')
  get user() {
    return this._user;
  }
  set user(info: User) {
    console.log(info.name);
    this._user = info;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
  }

}
