import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../../models/UserModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUser(id: number) {
    return this.http.get<UserModel[]>(`https://jsonplaceholder.typicode.com/users/${id}`);

  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
