import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  @Output()
  forwardUserData = new EventEmitter();

  navigate(user: UserModel) {

    this.forwardUserData.emit(user);

    this.router.navigate([user.id, 'posts'], {
      state: {user},
      queryParams: {idOfUser: user.id},
      relativeTo: this.activatedRoute
    });
  }
}
