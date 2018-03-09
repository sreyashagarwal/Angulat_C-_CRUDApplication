import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./list.component";
import { AddComponent } from "./list-add/add.component";
import { ProductComponent } from "./product.component";
import { UpdateComponent } from "./list-update/update.component";
import { DeleteComponent } from "./list-delete/delete.component";

const productRoutes: Routes = [{
  path: "product",
  component: ProductComponent,
  children: [
    { path: '', component: ListComponent },
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'delete/:id', component: DeleteComponent }
    //{ path: 'details/:id', component: UserDetailsComponent }
  ]
}];

export const productroute: ModuleWithProviders = RouterModule.forChild(productRoutes);









