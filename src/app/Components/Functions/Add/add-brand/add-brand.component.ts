import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/_services/brand.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  bookForm: FormGroup;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private brandService: BrandService,
    private tokenStorageService: TokenStorageService
  ) { 
    this.bookForm = this.formBuilder.group({
      _id: [''],
      name: [''],
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

    }
  }
  onSubmit(): any {
    this.brandService.Addbrand(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/brands-list'))
      }, (err) => {
        console.log(err);
    });
  }

    

}
