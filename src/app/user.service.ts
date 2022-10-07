import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private user: User;
  userSubject: Subject<User> = new Subject<User>();


  constructor () {
    this.user = {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: ''
    }
  }

  setUser(user: User){
    this.user = user
    this.userSubject.next(this.user);
  }
  getUser(): User{
    return this.user;
  }
}
