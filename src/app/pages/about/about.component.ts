import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public products;
  public constructor() {
    let Products = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(Products);
    this.products = Products;
  }

}
