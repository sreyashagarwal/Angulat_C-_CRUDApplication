import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list.html'
})

export class ListComponent {
  public products: ProductList[];

  constructor(http: HttpClient , private _router: Router) {

    http.get('http://localhost:56358/api/Angular')
      .toPromise()
      .then(result =>
      {
      console.log(result);
      this.products = result as ProductList[];
      console.log(this.products);
      },
      error => console.error(error));
  }

  productAdd() {
    this._router.navigate(['/product/add']);

  }
}

interface ProductList {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: string;
}
