import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavService } from '../services/nav.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loading = false;
  public edited = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private navService: NavService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
        ],
      ],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.loading = true;
    this.authService.login(this.form.get('email').value, this.form.get('password').value)
      .then(() => {
        return this.authService.getIdToken();
      })
      .then((token) => {
        localStorage.setItem('token', `${token}`);
        this.navService.serviceNav();
        this.loading = false;
        this.router.navigateByUrl('/list');
      })
      .catch(err => {
        this.loading = false;
        this.edited = true;
        setTimeout(function() {
          this.edited = false;
        }.bind(this), 5000);
      });
  }
}
