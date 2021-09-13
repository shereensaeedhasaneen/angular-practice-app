import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { SearchHubComponent } from './components/search-hub/search-hub.component';
import { ProductsComponent } from './components/products/products.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import {NiceSelectModule} from 'ng-nice-select';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LeftSideComponent,
    SearchHubComponent,
    ProductsComponent,
    RightSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatProgressBarModule,
    NiceSelectModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
