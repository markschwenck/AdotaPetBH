import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  modalSignUp({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  modalLogin( {email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
