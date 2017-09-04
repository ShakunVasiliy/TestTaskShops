import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';
import { ShopsListComponent } from './shopsList.component';
import { ShopProductsComponent } from './shopProducts.component';
import { ProductsListComponent } from './productsList.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        MainComponent,
        ShopsListComponent,
        ShopProductsComponent,
        ProductsListComponent
    ],
    bootstrap: [ MainComponent ]
})

export class MainModule { }