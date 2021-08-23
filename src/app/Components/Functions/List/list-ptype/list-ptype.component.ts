import { Component, OnInit } from '@angular/core';
import { PtypeService } from 'src/app/_services/ptype.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-list-ptype',
  templateUrl: './list-ptype.component.html',
  styleUrls: ['./list-ptype.component.css']
})
export class ListPtypeComponent implements OnInit {

  ptypes:any = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showForm = false;
  username?: string;
  constructor(private ptypeService: PtypeService,
    private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.ptypeService.Getptypes().subscribe(res => {
      console.log(res)
      this.ptypes =res;
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
      this.ptypeService.deleteptype(id).subscribe((res) => {
        this.ptypes.splice(i, 1);
      })
    }
  }

}
