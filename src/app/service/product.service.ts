
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products !:Product[];
  baseurl=environment.url;
  
  constructor(private http:HttpClient) { }



  getAllProducts(){
return this.http.get<any>(this.baseurl);
  }
  getNbProductsByLibelle(libelle:string){
   let i=0;
for(let j=0;j<this.Products.length;j++){
  if(this.Products[j].libelle==libelle){
    i++;
  }
} return i;
  }
}
