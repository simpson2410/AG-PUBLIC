import { Component, OnInit } from '@angular/core';
import { PtypeService } from 'src/app/_services/ptype.service';


@Component({
  selector: 'app-list-ptype',
  templateUrl: './list-ptype.component.html',
  styleUrls: ['./list-ptype.component.css']
})
export class ListPtypeComponent implements OnInit {

  ptypes:any = [];

  constructor(private ptypeService: PtypeService) { }

  ngOnInit(): void {
    this.ptypeService.Getptypes().subscribe(res => {
      console.log(res)
      this.ptypes =res;
    });    
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
