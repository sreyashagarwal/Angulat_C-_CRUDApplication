import { NgModule } from "@angular/core";
import { ListComponent } from "./list.component";
import { productroute } from "./list.routes";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddComponent } from "./list-add/add.component";
import { ProductComponent } from "./product.component";
import { UpdateComponent } from "./list-update/update.component";
import { DeleteComponent } from "./list-delete/delete.component";

@NgModule({

  declarations: [
    ListComponent,
    AddComponent,
    ProductComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    productroute
  ],

  providers: [],
  bootstrap: [ListComponent, AddComponent, ProductComponent, UpdateComponent, DeleteComponent]

})

export class listmodule { }
