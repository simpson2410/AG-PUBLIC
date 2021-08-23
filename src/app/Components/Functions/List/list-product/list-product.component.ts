import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:any = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  constructor(private crudService: CrudService,
    private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.crudService.Getproducts().subscribe(res => {
      console.log(res)
      this.products =res;
    });
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showForm = this.roles.includes('ROLE_ADMIN');
      this.showForm = this.roles.includes("ROLE_MODERATOR");

    }
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
