import { Product } from './../../../../types/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/product.service';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { deleteProductRequest } from '../../../store/app.actions';

@Component({
  selector: 'app-product-detail-layout',
  templateUrl: './product-detail-layout.component.html',
  styleUrls: ['./product-detail-layout.component.scss'],
  providers: [ProductService],
})
export class ProductDetailLayoutComponent implements OnInit {
  product: Product;
  productId: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private appStore: Store<AppState>
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
    this.appStore.dispatch(deleteProductRequest({ id: this.productId }));
  }
}
