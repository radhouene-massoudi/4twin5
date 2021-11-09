import { Product } from './../model/product';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';;

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  ListProduct!:Product[];
  show=false;
  nbofproduct=0;
  j=-1;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(
      (t)=>{
        console.log(t.product);
        this.ListProduct=t.product;
      },
      (error)=>{
        console.log(error.status)
      }
    );
   // console.log(this.ListProduct);
   //console.log( this.productservice.getNbProductsByLibelle('PC'));
    }
    submit(l:any,t:any){
      this.j=t;
      this.show=true;
      this.nbofproduct=this.productservice.getNbProductsByLibelle(l);
    }

}
