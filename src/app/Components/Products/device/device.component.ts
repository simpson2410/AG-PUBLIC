
import { PtypeService } from 'src/app/_services/ptype.service';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { BrandService } from 'src/app/_services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_services/product';
import { Routes,RouterModule } from '@angular/router';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  products:any = [];
  brands:any;
  cattid:any;
  constructor(
    private crudService: CrudService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private ptypeService: PtypeService,
    private route:ActivatedRoute,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
   //Subscription Method
  //  this.activatedRoute.paramMap.subscribe(params => {
  //   this.cattid = params.get('id');
  //   console.log(this.cattid);

  // });
  this.getRoutePro(this.route.snapshot.params['_id'])
  // this.GetProductCatId();
  }
  GetProductCatId()
  {
    this.crudService.listProductbyCat().subscribe((res)=>{
      this.products = res
    })
  }
  imtem:any = []
  setItem(products:any){
    console.log(products);
    this.imtem.push(products);
    localStorage.setItem('localCart',JSON.stringify(this.imtem));
  }
  getRoutePro(_id : any){
    this.crudService.GetLoaiSP(_id).subscribe((data:any)=> {
         this.products=data;
    });
  }
  addtocart(product: any){
    this.cartService.addtoCart(product);
  }
}
