import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //formData : Category;
  readonly rootUrl = 'https://localhost:44368/api/categories';
  //Catlist : Category[] ;
  constructor( private http : HttpClient ) { }

  postCategory(formData : Category){
    return this.http.post(this.rootUrl,formData);
  }

  getAll(){
    return this.http.get<any[]>(this.rootUrl);
  }

  updateCategory(formData : Category){
    return this.http.put(this.rootUrl + '/' + formData.categoryId,formData)
  }

  deleteCategory(id){
   return this.http.delete(this.rootUrl + '/' + id);
  }
}
