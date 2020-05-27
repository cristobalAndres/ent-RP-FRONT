import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public products = [];
  public setTime = 0;
  interval: any;
  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      data => {
        console.log(data);
        this.products = data;
      },
      error => {
        console.log(error);
      });
  }

  overImages(i) {
    if (!this.interval) {
      console.log('AAAAAAA');
      let count = 0;
      console.log(' --->>>');
      const countImgs = this.products[i].images.length;
      // while (count < countImgs) {
      //   console.log('COO --->>>', count);
      //   setInterval(() => {
      //     this.products[i].fullImage = this.products[i].images[count];
      //     count++;
      //   }, 1000);
      // }
      this.interval = setInterval(() => {
        // this.currentItem = this.items[this.pointer];
        console.log('JJJJJJJ', count);
        this.products[i].fullImage = this.products[i].images[count];
        count++;
        if (count === countImgs) {
          count = 0;
        }
      }, 1000);
    }
  }

  focuslost() {
    console.log('INT -->>>', this.interval);
    clearInterval(this.interval);
    this.interval = null;
  }

}
