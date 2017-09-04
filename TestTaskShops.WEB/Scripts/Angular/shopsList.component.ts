import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';

import { ShopService } from './shop.service';
import { Shop } from './shop.model';

@Component({
    selector: 'shops-list',
    templateUrl: './shopsList.component.html',
    providers: [ShopService]
})

export class ShopsListComponent implements OnInit {
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    shops: Shop[];
    error: any;

    editingShop: Shop;
    isNewShop: boolean;

    @Output() onShowShopProducts: EventEmitter<number> = new EventEmitter<number>();

    constructor(private shopService: ShopService) {
        this.resetEditingParams();
    }

    ngOnInit() {
        this.loadShops();
    }

    showShopProducts(shopId: number) {
        this.onShowShopProducts.emit(shopId);
    }

    loadShops() {
        this.shopService.getUsers().subscribe(
            data => this.shops = data,
            error => this.error = error
        );
    }

    refresh() {
        this.cancelEdit();
        this.loadShops();
    }

    addShop() {
        this.editingShop = new Shop(null, '', '', '');
        this.isNewShop = true;

        this.shops.push(this.editingShop);
    }

    editShop(shop: Shop) {
        if (shop.Id === null) return;

        this.editingShop = new Shop(shop.Id, shop.Name, shop.Address, shop.Mode);
        this.isNewShop = false;
    }

    deleteShop(id: number) {
        this.shopService.deleteShop(id)
            .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
    }

    cancelEdit()
    {
        if (this.isNewShop) {
            this.shops.pop();
        }

        this.resetEditingParams();
    }

    saveShop() {
        if (this.isNewShop) {
            this.shopService.createShop(this.editingShop)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }
        else {
            this.shopService.editShop(this.editingShop)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }

        this.resetEditingParams();
    }

    loadTemplate(shop: Shop): TemplateRef<any> {
        if ((this.editingShop)
            && (this.editingShop.Id === shop.Id)) {

            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        } 
    }

    resetEditingParams() {
        this.editingShop = null;
        this.isNewShop = false;
    }

    GetSuccesfullFunc() {
        let self = this;

        return (data: any) => {
            self.loadShops();
        };
    }

    GetFailedFunc() {
        return (error: any) => { };
    }
}