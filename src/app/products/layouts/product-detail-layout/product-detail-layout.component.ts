import { Product } from './../../../../types/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/product.service';

@Component({
  selector: 'app-product-detail-layout',
  templateUrl: './product-detail-layout.component.html',
  styleUrls: ['./product-detail-layout.component.scss'],
  providers: [ProductService],
})
export class ProductDetailLayoutComponent implements OnInit {
  product: Product;
  productId = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    if (this.productId) {
      this.productService.retrieveProduct(this.productId).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          this.router.navigate(['/404']);
          console.log(error);
        }
      );
    }
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(
      (product) => {
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
