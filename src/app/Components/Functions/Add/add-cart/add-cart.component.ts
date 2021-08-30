import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import {FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { brand } from 'src/app/_services/brand';
import { Cart1Service } from 'src/app/_services/cart1.service';
import { cart } from 'src/app/_services/cart';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  getId: any;
  brandid: number;
  ptypeid: number;
  brands:any = [];
  ptypes:any = [];
  bookForm: FormGroup;
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    public fb: FormBuilder,
    private cartService: Cart1Service,
    private authService: AuthService, 
    private tokenStorageService: TokenStorageService
  ) { 
    
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      urlImage: [''],
      quantity: [''],
      total: [''],
      user_ID: [''],
    })
  }
  
  
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
  onSubmit(): any {
    this.cartService.Addcart(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/carts-list'))
      }, (err) => {
        console.log(err);
    });
    
  }
  reloadPage(): void {
    window.location.reload();
  }



}
