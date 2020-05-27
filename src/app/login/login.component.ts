import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    private navService: NavService
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: [
        null,
        [Validators.required],
      ],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.form.get('email').value, this.form.get('password').value)
      .then(() => {
        return firebase.auth().currentUser.getIdToken(true);
      })
      .then((token) => {
        localStorage.setItem('token', `${token}`);
        this.navService.serviceNav();
        this.router.navigateByUrl('/list');
      })
      .catch(err => {
        alert(err.message);
      });
  }
}