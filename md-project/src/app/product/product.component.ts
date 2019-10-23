import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {
  productName = 'A Book';
  isDisabled = false;
  products = ['A Book','A Tree'];
  constructor() { 
    setTimeout(() =>{
      this.productName = 'A Tree';
      this.isDisabled = true;
    },3000)
  }

  ngOnInit() {
  }
  onAddProduct(){
    this.products.push(this.productName);
  }

}
