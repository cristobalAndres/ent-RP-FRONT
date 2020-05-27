import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public products = [];
  interval: any;
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        this.refresh();
        console.log(error);
      });
  }

  overImages(i) {
    if (!this.interval) {
      let count = 0;
      const countImgs = this.products[i].images.length;
      this.interval = setInterval(() => {
        this.products[i].fullImage = this.products[i].images[count];
        count++;
        if (count === countImgs) {
          count = 0;
        }
      }, 1000);
    }
  }

  focuslost() {
    clearInterval(this.interval);
    this.interval = null;
  }

  submitProduct(id) {
    this.router.navigate(['/detail'], {
      queryParams: {
        sku: JSON.stringify(id),
      }
    });
  }

  refresh(): void {
    window.location.reload();
}

}
