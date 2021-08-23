import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import {FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthService } from 'src/app/_services/auth.service';
import { RolesService } from 'src/app/_services/roles.service';
import { roles } from 'src/app/_services/roles';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  users:any = [];
  constructor(private userService: UserService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit( ): void {
    this.userService.Getusers().subscribe(res => {
      console.log(res)
      this.users =res;
    });
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
