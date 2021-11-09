import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id:any;
  constructor(private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
//this.id=this.activateroute.snapshot.params['id'];
//select * from product where id= this.id
//console.log(this.id);
this.activateroute.params.subscribe(
  (result)=>{
    console.log(result)
  }
);
//console.log(result)
  }

}
