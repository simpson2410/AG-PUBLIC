
import { PtypeService } from 'src/app/_services/ptype.service';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { BrandService } from 'src/app/_services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_services/product';
import { Routes,RouterModule } from '@angular/router';
import { CartService } from 'src/app/_services/cart.service';
import { CountdownConfig } from 'ngx-countdown';
import { ToastrService } from 'ngx-toastr';

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];
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
    private cartService:CartService,
    private toastr: ToastrService
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
  
  addItemToCart( id,price, quantity): void {
    let payload = {
      productId: id,
      price,
      quantity,
    };
    console.log('sfdsgh',payload);
  // this.cartService.addcart();
  }
  config: CountdownConfig = {
    leftTime: 60 * 60 * 25,
    formatDate: ({ date, formatStr }) => {
      let duration = Number(date || 0);

      return CountdownTimeUnits.reduce((current, [name, unit]) => {
        if (current.indexOf(name) !== -1) {
          const v = Math.floor(duration / unit);
          duration -= v * unit;
          return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
            return v.toString().padStart(match.length, '0');
          });
        }
        return current;
      }, formatStr);
    },
  };
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
