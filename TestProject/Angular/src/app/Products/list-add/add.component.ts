import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './add.html'
})

export class AddComponent {

  id: number;
  name: string;
  price: number;
  quantity: number;
  type: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}
  
  SendProduct(): void {

    var myObj = {
      "name": this.name,
      "price": this.price,
      "quantity": this.quantity,
      "type": this.type
    }

    const req = this.http.post('http://localhost:56358/api/Angular', myObj)
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
