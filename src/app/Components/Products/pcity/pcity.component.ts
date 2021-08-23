import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { BrandService } from 'src/app/_services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_services/product';
import { Routes,RouterModule } from '@angular/router';

@Component({
  selector: 'app-pcity',
  templateUrl: './pcity.component.html',
  styleUrls: ['./pcity.component.css']
})

export class PcityComponent implements OnInit {
  products:any = [];
  brands:any;
  cattid:any;
  constructor(
              private crudService: CrudService,
              private brandService: BrandService,
              private activatedRoute: ActivatedRoute,
              ) 
    { 
      this.brands = this.brandService.Getbrands();
      this.crudService.Getproducts().subscribe(products =>{
        this.products = products;
      })
    }



  ngOnInit(): void {
   //Subscription Method
   this.activatedRoute.paramMap.subscribe(params => {
    this.cattid = params.get('id');
    console.log(this.cattid);
  });
  this.GetProductCatId();
  }
  GetProductCatId()
  {
    this.crudService.listProductbyCat().subscribe((res)=>{
      this.products = res
    })
  }
}

