import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
//import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
