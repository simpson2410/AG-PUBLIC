import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { brand } from 'src/app/_services/brand';
import { BrandService } from 'src/app/_services/brand.service';
import { PtypeService } from 'src/app/_services/ptype.service';
import { ptype } from 'src/app/_services/ptype';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  getId: any;
  brandid: number;
  ptypeid: number;
  brands:any = [];
  ptypes:any = [];
  updateForm: FormGroup;
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private brandService: BrandService,
    private ptypeService: PtypeService,
    private tokenStorageService: TokenStorageService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.Getproduct(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        urlImage: res['urlImage'],
        description: res['description'],
        quantity: res['quantity'],
        brand: res['brand'],
        ptype: res['ptype'],
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      urlImage: [''],
      description: [''],
      quantity: [''],
      brand: [''],
      ptype: [''],
    })
    }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showForm = this.roles.includes('ROLE_ADMIN');
      this.showForm = this.roles.includes("ROLE_MODERATOR");

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
  onUpdate(): any {
    this.crudService.updateproduct(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/products-list'))
      }, (err) => {
        console.log(err);
    });
}
}
