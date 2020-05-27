import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private afAuth: AngularFireAuth,
  ) {
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  getIdToken() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.currentUser.getIdToken(true)
      .then((token) => {
        resolve(token);
      }).catch((err) => {
        console.log(err);
      });
    });
  }
}
