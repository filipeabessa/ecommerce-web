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
    title: new FormControl(null),
    content: new FormControl(null),
    price: new FormControl(null),
  });

  onSubmit() {
    const { title, content, price } = this.editProductForm.value;
    const productEditValues: Product = {};
    if (title) productEditValues.title = title;
    if (content) productEditValues.content = content;
    if (price) productEditValues.price = price;

    this.productService
      .editProduct(this.productId, productEditValues)
      .subscribe(
        (product) => {
          console.log(product);
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
