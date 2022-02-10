import { Product } from './../../../types/index';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../api/product.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit-card',
  templateUrl: './product-edit-card.component.html',
  styleUrls: ['./product-edit-card.component.scss'],
})
export class ProductEditCardComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  @Input() FormGroup: FormGroup;

  productId = Number(this.route.snapshot.paramMap.get('id'));
  product: Product;

  editProductForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    price: new FormControl(0),
  });

  onSubmit() {
    this.productService
      .editProduct(this.productId, this.editProductForm.value)
      .subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          this.router.navigate(['/404']);
          console.log(error);
        }
      );
  }

  ngOnInit(): void {}
}
