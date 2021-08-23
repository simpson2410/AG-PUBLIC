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
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  rolesid: number;
  roless:any = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  form: any = {
    username: null,
    email: null,
    password: null,
    roles: [''],
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private rolesService: RolesService,
              private tokenStorageService: TokenStorageService
              ) { }

  ngOnInit(): void {
    this.rolesService.Getroless().subscribe(res => {
      console.log(res)
      this.roless =res;
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

  onSubmit(): void{
    // Assign all constants to form input name/id
    const { username, email, password } = this.form;

    // Use the authentication service to post a register request
    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;        
      }
    );
  }
}
