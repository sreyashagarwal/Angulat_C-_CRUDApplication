import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './update.html'
})

export class UpdateComponent implements OnInit {
  product: ProductList;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient)
  {

  }

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
  

  UpdateProduct(): void {

    var myObj = {
      "id": this.product.id,
      "name": this.product.name,
      "price": this.product.price,
      "quantity": this.product.quantity,
      "type": this.product.type
    }

    const req = this.http.put('http://localhost:56358/api/Angular', myObj)
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

