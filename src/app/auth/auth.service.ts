import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import {User} from '../user';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get getLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

  constructor(private router: Router) { }

  login(user: User) {
    if (user.email !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/signup']);
  }
}
