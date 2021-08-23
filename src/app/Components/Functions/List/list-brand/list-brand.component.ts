import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/_services/brand.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {

  brands:any = [];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.Getbrands().subscribe(res => {
      console.log(res)
      this.brands =res;
    });    
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.brandService.deletebrand(id).subscribe((res) => {
        this.brands.splice(i, 1);
      })
    }
  }

}
