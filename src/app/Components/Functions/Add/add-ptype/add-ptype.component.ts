import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { PtypeService } from 'src/app/_services/ptype.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-ptype',
  templateUrl: './add-ptype.component.html',
  styleUrls: ['./add-ptype.component.css']
})
export class AddPtypeComponent implements OnInit {

  bookForm: FormGroup;
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private ptypeService: PtypeService,
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

      this.showForm = this.roles.includes('ROLE_ADMIN');
      this.showForm = this.roles.includes("ROLE_MODERATOR");

    }
  }
  onSubmit(): any {
    this.ptypeService.Addptype(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/ptypes-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
