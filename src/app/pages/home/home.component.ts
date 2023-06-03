import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productDetails='';
  public getProductDetail(product:any){
    console.log(product);
    this.productDetails=product;
  }
 public products= [
{
  id:1,
  name: 'product 1',
  price: '1000',
  description:
  'This is a wider card with supporting text bellow as a naturalled-in to additional content.',
  imgUrl: 'assets/images/home/img.jpg',
},
{
  id:2,
  name: 'product 2',
  price: '100',
  description:
  'This is a wider card with supporting text bellow as a naturalled-in to additional content.',
  imgUrl: 'assets/images/home/img.jpg',
},
{
  id:3,
  name: 'product 3',
  price: '10',
  description:
  'This is a wider card with supporting text bellow as a naturalled-in to additional content.',
  imgUrl: 'assets/images/home/img.jpg',
},
{
  id:4,
  name: 'product 4',
  price: '1',
  description:
  'This is a wider card with supporting text bellow as a naturalled-in to additional content.',
  imgUrl: 'assets/images/home/img.jpg',
},
{
  id:5,
  name: 'product 5',
  price: '10000',
  description:
  'This is a wider card with supporting text bellow as a naturalled-in to additional content.',
  imgUrl: 'assets/images/home/img.jpg',
},

 ];
}
