import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { PtypeService } from 'src/app/_services/ptype.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-ptype',
  templateUrl: './add-ptype.component.html',
  styleUrls: ['./add-ptype.component.css']
})
export class AddPtypeComponent implements OnInit {

  bookForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private ptypeService: PtypeService
  ) { 
    this.bookForm = this.formBuilder.group({
      _id: [''],
      name: [''],
    })
  }

  ngOnInit(): void {
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
