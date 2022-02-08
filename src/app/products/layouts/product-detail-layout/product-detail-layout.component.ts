import { Product } from './../../../../types/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../../api/product.service';

@Component({
  selector: 'app-product-detail-layout',
  templateUrl: './product-detail-layout.component.html',
  styleUrls: ['./product-detail-layout.component.scss'],
  providers: [ProductService],
})
export class ProductDetailLayoutComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.retrieveProduct(Number(params.get('id')))
      )
    );
  }
}
