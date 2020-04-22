import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../models/UserModel';
import {UserService} from '../../modules/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-owu';
  msg = 'My users';
  // users: UserModel[];

  constructor() {
      }

  ngOnInit(): void {

  }
}
