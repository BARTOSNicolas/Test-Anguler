import {Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth, signOut } from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private auth: Auth = inject(Auth);

  isConnected(): boolean {
    return this.auth.currentUser !== null;
  }

  async logOut(): Promise<void> {
    // console.log(this.currentUser);
    try {
      await signOut(this.auth);
      console.log('Utilisateur déconnecté avec succès.');
      //! Rajouter de la redirection avec router.navigate
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}
