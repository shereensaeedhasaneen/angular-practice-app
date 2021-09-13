import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SearchHubComponent } from './components/search-hub/search-hub.component';


const routes: Routes = [
 {path:'search' , component:SearchHubComponent},
 {path:'products' , component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
