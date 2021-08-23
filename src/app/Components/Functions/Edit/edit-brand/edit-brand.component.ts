import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/_services/brand.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.brandService.Getbrand(this.getId).subscribe(res => {
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
    this.brandService.updatebrand(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/brands-list'))
      }, (err) => {
        console.log(err);
    });

}
}