import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

  product = [];
  dummy = [
    {
      'name':'newName',
      'age':18,
      'sex':'male'
    },
    {
      'name':'newName3',
      'age':184,
      'sex':'Female'
    }
  ]
  constructor(private http: HttpClient) {}
  title = 'Products';
  ngOnInit() {
    
    this.http
      .get<any>('https://dummyjson.com/products')
      .subscribe((data) => {
        this.product = data
        console.log(data);
        console.log(this.product,"new");
        
      });
  }
}
