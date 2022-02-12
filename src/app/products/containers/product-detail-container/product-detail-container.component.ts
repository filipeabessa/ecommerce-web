import { Product } from '../../../../types/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/product.service';
import { Store } from '@ngrx/store';
import { deleteProductRequest } from '../../store/products.actions';
import { ProductsState } from '../../store/products.reducer';

@Component({
  selector: 'app-product-detail-container',
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss'],
  providers: [ProductService],
})
export class ProductDetailContainerComponent implements OnInit {
  product: Product;
  productId: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private productsStore: Store<ProductsState>
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
    this.productsStore.dispatch(deleteProductRequest({ id: this.productId }));
  }
}
