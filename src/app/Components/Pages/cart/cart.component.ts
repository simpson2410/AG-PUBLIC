import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public products1 : any = [];

  public grandTotal !: number;
  public cart :any;
  public username?: string;
  isLoggedIn = false;
  private roles: string[] = [];
  constructor(private cartService : CartService,
    private tokenStorageService: TokenStorageService,
    ) { }


  ngOnInit(): void {
    
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

  if (this.isLoggedIn){
    const user = this.tokenStorageService.getUser();

    this.username = user.username;
    console.log('huiufd', user.username)

    this.getRoutePro(this.username);
    this.getRoutePro1('612217f4bb7d67599d8a83f9');
  }
  }
  getRoutePro(_id : any){
    this.cartService.GetCartUser(_id).subscribe((data:any)=> {
         this.products=data;
         console.log("New ne",data)
    });
  }
  getRoutePro1(_id : any){
    this.cartService.GetProductID(_id).subscribe((data:any)=> {
         this.products1=data;
         console.log("1",data)
    });
  }
}
