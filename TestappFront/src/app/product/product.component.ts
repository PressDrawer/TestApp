import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Prod : Product = {
    productId : null,
    productName : '', 
    productDescription : '',
    productPrice : 0,
    productQuantity : 0,
    categoryId : null
  }
  productlist : Product[] = [];
  categorylist : Category[] = [];

  constructor( private proservice : ProductService , private service : CategoryService) { }

  ngOnInit(): void {

    this.proservice.getAll()
    .subscribe((data : any) =>{
     console.log(data);
     this.productlist = data;
     console.log(this.productlist);
    })

    this.service.getAll()
    .subscribe((data:any)=>{
      console.log(data);
      this.categorylist = data;
      console.log(this.categorylist);
    })

  }

  onSubmit(form : NgForm){
   if(this.Prod.productId == null){
    this.proservice.postProduct(form.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
        console.log(form.value);
      }
    )

  } 
  else  {
    this.proservice.updateProduct(this.Prod).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log(err)
      console.log(form.value);
    }
  )
  } 
  
    window.location.reload();
   
}

populateForm(pro : Product){
  this.Prod = pro;
}

onDelete(id){
  this.proservice.deleteProoduct(id)
  .subscribe(res=>{
    console.log("Success");
  },
    err=>{
      console.log(err);
    })
    //this.router.navigate(['/category']);
 
      window.location.reload();
     
}



}
