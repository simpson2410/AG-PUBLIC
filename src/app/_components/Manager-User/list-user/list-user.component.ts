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

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.Getusers().subscribe(res => {
      console.log(res)
      this.users =res;
    });
  }

}
