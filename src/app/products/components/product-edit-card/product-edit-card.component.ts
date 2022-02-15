import { EditProductParams, ProductModel } from './../../models/product.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/product.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() editProduct = new EventEmitter<EditProductParams>();

  productId = Number(this.route.snapshot.paramMap.get('id'));
  product: ProductModel;

  editProductForm = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
    price: new FormControl(null),
  });

  onSubmit() {
    const { title, content, price } = this.editProductForm.value;
    const productEditValues: ProductModel = {};
    if (title) productEditValues.title = title;
    if (content) productEditValues.content = content;
    if (price) productEditValues.price = price;

    this.editProduct.emit({ title, content, price });
  }

  ngOnInit(): void {}
}
