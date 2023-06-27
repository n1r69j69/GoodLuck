import { Component } from '@angular/core';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productDetails: any;

  public cartproducts = [];
  public cartItems;

  public getProductDetail(product: any) {
    console.log(product);
    this.productDetails = product;
  }
  public products: any;
  constructor(public apiService: APIService) {
    this.apiService.getProducts().subscribe((productResponse) => {
      this.products = productResponse.data;
      console.log(productResponse);
    }
    )


  }
  public addToCart(cartProduct) {
    this.cartproducts.push(cartProduct);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartproducts));
    let getProducts = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(getProducts);
    this.cartItems = getProducts;
  }
}
