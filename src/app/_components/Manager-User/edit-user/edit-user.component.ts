import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { RolesService } from 'src/app/_services/roles.service';
import { roles } from 'src/app/_services/roles';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  constructor(              private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showForm = this.roles.includes('ROLE_ADMIN');
      this.showForm = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
    }
  }

}
