import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    private auth: Auth = inject(Auth);
    private router: Router = inject(Router);
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  signUp() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          console.log('Utilisateur inscrit:', userCredential);
          console.log('Utilisateur inscrit:', this.user);
          this.router.navigate(['/home']);
        })
        .catch((error) => {
          this.error = error.message;
          console.error('Erreur d\'inscription:', error);
        });
  }
}
