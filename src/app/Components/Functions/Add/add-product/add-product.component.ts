import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import {FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { brand } from 'src/app/_services/brand';
import { BrandService } from 'src/app/_services/brand.service';
import { PtypeService } from 'src/app/_services/ptype.service';
import { ptype } from 'src/app/_services/ptype';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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
    private brandService: BrandService,
    private ptypeService: PtypeService,
    private authService: AuthService, 
    private tokenStorageService: TokenStorageService
  ) { 
    
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      urlImage: [''],
      quantity: [''],
      ptype: [''],
      brand: [''],
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
    this.brandService.Getbrands().subscribe(res => {
      console.log(res)
      this.brands =res;
    });   
    this.ptypeService.Getptypes().subscribe(res => {
      console.log(res)
      this.ptypes =res;
    });    
  }
  onSubmit(): any {
    this.crudService.Addproduct(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/products-list'))
      }, (err) => {
        console.log(err);
    });
    
  }
  reloadPage(): void {
    window.location.reload();
  }



}
