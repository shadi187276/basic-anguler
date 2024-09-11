import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpService } from '../https/http.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  Productlist: Product[] = [];
  private sub = new Subject<void>(); // Subject to handle unsubscription

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  ngOnDestroy() {
    // Complete the subject to unsubscribe from the observable
    this.sub.next();
    this.sub.complete();
  }

  private getProducts() {
    // Get the products and unsubscribe when the component is destroyed
    this.httpService
      .getProduct()
      .pipe(takeUntil(this.sub))
      .subscribe({
        next: (response) => {
          this.Productlist = response; // Store the product data
        },
        error: (err) => {
          console.error('Error fetching products:', err); // Handle errors
        },
      });
  }
}
