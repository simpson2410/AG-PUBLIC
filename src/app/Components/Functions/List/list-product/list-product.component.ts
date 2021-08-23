import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.Getproducts().subscribe(res => {
      console.log(res)
      this.products =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteproduct(id).subscribe((res) => {
        this.products.splice(i, 1);
      })
    }
  }
}
