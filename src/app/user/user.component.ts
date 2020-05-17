import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

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

  favotite(user: UserModel) {
    console.log(localStorage.getItem('favorite'));

    if (!localStorage.getItem('favorite')) {
      const arr = [];
      arr.push(user);

      localStorage.setItem('favorite', JSON.stringify(arr));

    } else {
      const arrJSON = localStorage.getItem('favorite');
      const arr = JSON.parse(arrJSON);
      arr.push(user);
      const value = JSON.stringify(arr);
      localStorage.setItem('favorite', value);
    }
  }
}
