import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id = null;
  product = null;
  interval: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {
    this.id = JSON.parse(this.route.snapshot.queryParamMap.get('sku'));
  }

  ngOnInit(): void {
    this.getProductId(this.id);
  }

  getProductId(id) {
    this.productsService.getProductId(id).subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log('ERRRRR');
      });
  }

  overImages() {
    if (!this.interval) {
      let count = 0;
      const countImgs = this.product.images.length;
      this.interval = setInterval(() => {
        this.product.fullImage = this.product.images[count];
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

}
