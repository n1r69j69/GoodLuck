import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data= "Hello World";
public color="text-primary";
public data1 =true;
public data3= [
  {
    name:'tum',
    id: 1,
  },
  {
    name:'ha',
    id: 2,
  },
  {
    name:'yes',
    id: 3,
  },
  {
    name:'tum',
    id: 4,
  },
  {
    name:'me',
    id: 5,
  },
  {
    name:'ho',
    id: 6,
  },
];
}
