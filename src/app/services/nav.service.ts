import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  navVisible = false;

  navChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.navChange.subscribe((value) => {
      this.navVisible = value;
    });
  }

  serviceNav() {
    if (localStorage.getItem('token')) {
      this.navChange.next(true);
    } else {
      this.navChange.next(false);
    }
  }

}