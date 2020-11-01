import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  //formData : Product;
  readonly rootUrl = 'https://localhost:44368/api/products';
  
  constructor( private http : HttpClient  ) { }

  postProduct(formData : Product){
    return this.http.post(this.rootUrl,formData);
  }

  getAll(){
    return this.http.get<any[]>(this.rootUrl);
  }

  updateProduct(formData : Product){
    return this.http.put(this.rootUrl + '/' + formData.productId,formData)
  }

  deleteProoduct(id){
    return this.http.delete(this.rootUrl + '/' + id);
   }

}
