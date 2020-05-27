import { Component, OnInit, ɵConsole } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sessionToken = false;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private navService: NavService
  ) {
    this.navService.navChange.subscribe(value => {
      this.sessionToken = value;
    });
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.afAuth.signOut().then(() => {
      this.navService.serviceNav();
      this.router.navigateByUrl('');
    })
      .catch((err) => {
        console.log(err);
      });
  }

}
