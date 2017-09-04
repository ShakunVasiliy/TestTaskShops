import { Component, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { Shop } from './shop.model';
import { Product } from './product.model';
import { ShopProducts } from './shopProducts.model';
import { ShopProductsService } from './shopProducts.service';

@Component({
    selector: 'shop-products',
    templateUrl: './shopProducts.component.html',
    providers: [ShopProductsService]
})

export class ShopProductsComponent {
    @Output() onBack: EventEmitter<any> = new EventEmitter<any>();

    shopProducts: ShopProducts;
    error: any;

    constructor(private shopProductsService: ShopProductsService)
    {
        this.shopProducts = new ShopProducts(new Shop(0, '', '', ''), new Array<Product>());
    }

    loadShopProducts(shopId: number) {
        this.shopProductsService.getShopProducts(shopId).subscribe(
            data => this.shopProducts = data, 
            error => this.error = error
        )
    }

    onRefrash() {
        this.loadShopProducts(this.shopProducts.Shop.Id);
    }

    back() {
        this.onBack.emit( {} );
    }
}