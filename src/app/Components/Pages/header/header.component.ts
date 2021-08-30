import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { PtypeService } from 'src/app/_services/ptype.service';
import { CartService } from 'src/app/_services/cart.service';
import { CrudService } from 'src/app/_services/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ptypes:any = [];
  public totalItem : number = 0;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  public productList : any ;
  public filterCategory : any
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,
              private ptypeService: PtypeService,
              private cartService: CartService,
              private crudService: CrudService) {}

  ngOnInit(): void {
    this.ptypeService.Getptypes().subscribe(res => {
      console.log(res)
      this.ptypes =res;
    }); 
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })   
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
      console.log('huiufd', user._id)

    }

  }

  logout(): void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  refresh(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
}

}
