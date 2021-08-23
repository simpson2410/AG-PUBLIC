import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtypeService } from 'src/app/_services/ptype.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-ptype',
  templateUrl: './edit-ptype.component.html',
  styleUrls: ['./edit-ptype.component.css']
})
export class EditPtypeComponent implements OnInit {
  getId: any;
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
    private ptypeService: PtypeService,
    private tokenStorageService: TokenStorageService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.ptypeService.Getptype(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
      });
    });

    this.updateForm = this.formBuilder.group({
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
  onUpdate(): any {
    this.ptypeService.updateptype(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/ptypes-list'))
      }, (err) => {
        console.log(err);
    });

}

}
