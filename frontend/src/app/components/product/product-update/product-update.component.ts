import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  productUpdate(): void{
    this.productService.update(this.product).subscribe(product=>{
      this.productService.showMessage("produto atualizado com sucesso!")
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void{
    this.router.navigate(["/products"]);
  }
}
