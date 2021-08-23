import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PtypeService } from 'src/app/_services/ptype.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-ptype',
  templateUrl: './edit-ptype.component.html',
  styleUrls: ['./edit-ptype.component.css']
})
export class EditPtypeComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private ptypeService: PtypeService
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
