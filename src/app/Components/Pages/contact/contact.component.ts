import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/_services/contact.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'toaster-not';
  bookForm: FormGroup;
  username?: string;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private contactService: ContactService,
    private tokenStorageService: TokenStorageService,
  ) { 
    this.bookForm = this.formBuilder.group({
      name:     [''],
      address:  [''],
      phonenum: [''],
      message:  [''],
    })
  }

  ngOnInit(): void {
    
  }
  onSubmit(): any {
    this.contactService.Addcontact(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl(''))
      }, (err) => {
        console.log(err);
    });
  }

    

}
