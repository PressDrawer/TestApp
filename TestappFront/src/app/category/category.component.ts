import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../models/category';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

import { from } from 'rxjs';
// import { CommonModule } from "@angular/common";
// import { observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Categ : Category = {
    categoryId : null,
    name :'',
    description : ''

  };
  catlist : Category[] = [];
  
  constructor(private service : CategoryService,private router : Router ) {}

  ngOnInit(): void {

   this.service.getAll()
   .subscribe((data : any) =>{
    console.log(data);
    this.catlist = data;
    console.log(this.catlist);
   })
  }

  onSubmit(form : NgForm){
    if(this.Categ.categoryId == null){
    this.service.postCategory(form.value).subscribe(
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
    this.service.updateCategory(this.Categ).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log(err)
      console.log(form.value);
    }
  )
  }
  
}

populateForm(cat : Category){
  this.Categ = cat;
}

onDelete(id){
  this.service.deleteCategory(id)
  .subscribe(res=>{
    console.log("Success");
  },
    err=>{
      console.log(err);
    })
    //this.router.navigate(['/category']);
  
}



}


