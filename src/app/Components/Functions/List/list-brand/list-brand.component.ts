import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/_services/brand.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {

  brands:any = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;

  constructor(private brandService: BrandService,
    private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.brandService.Getbrands().subscribe(res => {
      console.log(res)
      this.brands =res;
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
      this.brandService.deletebrand(id).subscribe((res) => {
        this.brands.splice(i, 1);
      })
    }
  }

}
