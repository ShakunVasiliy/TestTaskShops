import { Component, ViewChild } from '@angular/core';

import { ShopsListComponent } from './shopsList.component';
import { ShopProductsComponent } from './shopProducts.component';

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    public shopsListDisplay: string;
    public shopProductsDisplay: string;

    @ViewChild(ShopsListComponent)
    private shopsListComponent: ShopsListComponent;

    @ViewChild(ShopProductsComponent)
    private shopProductsComponent: ShopProductsComponent;

    constructor()
    {
        this.shopsListDisplay = 'block';
        this.shopProductsDisplay = 'none';
    }

    onShowShopProducts(shopId: number) {
        this.shopsListDisplay = 'none';
        this.shopProductsDisplay = 'block';

        this.shopProductsComponent.loadShopProducts(shopId);
    }

    onShowShopsList() {
        this.shopsListDisplay = 'block';
        this.shopProductsDisplay = 'none';

        this.shopsListComponent.loadShops();
    }
}