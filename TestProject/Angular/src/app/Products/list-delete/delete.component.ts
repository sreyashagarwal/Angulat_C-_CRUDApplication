import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './delete.html'
})

export class DeleteComponent implements OnInit {
  product: ProductList;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient)
  {  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.putdata(id);
  }

  putdata(id): void {
    this.http.get('http://localhost:56358/api/Angular/' + id)
      .toPromise()
      .then(result => {
        console.log(result);
        this.product = result as ProductList;
        console.log(this.product);
      },
      error => console.error(error));

  }


  DeleteProduct(): void {

    const req = this.http.delete('http://localhost:56358/api/Angular/' + this.product.id)
      .toPromise()
      .then(
      res => {
        console.log(res);
        this.router.navigate(['/product/list']);
      },
      err => {
        console.log("Error occured");
      }
      );
  }
}
interface ProductList {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: string;
}

