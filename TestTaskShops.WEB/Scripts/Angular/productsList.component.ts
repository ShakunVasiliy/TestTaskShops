import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Response } from '@angular/http';

import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'products-list',
    templateUrl: './productsList.component.html',
    providers: [ProductService]
})

export class ProductsListComponent {
    private _products: Product[];

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    editingProduct: Product;
    isNewProduct: boolean;

    @Output() onRefresh: EventEmitter<any> = new EventEmitter<any>();
    @Input() shopId: number;

    constructor(private productService: ProductService) {
        this.resetEditingParams();
    }

    get products(): Product[] {
        return this._products;
    }

    @Input() set products(value: Product[]) {
        this._products = value;
    }

    refresh() {
        this.cancelEdit();
        this.onRefresh.emit({});
    }

    addProduct() {
        this.editingProduct = new Product(null, '', '', this.shopId);
        this.isNewProduct = true;

        this._products.push(this.editingProduct);
    }

    editProduct(product: Product) {
        if (product.Id === null) return;

        this.editingProduct = new Product(product.Id, product.Name, product.Description, product.ShopId);
        this.isNewProduct = false;
    }

    deleteProduct(id: number) {
        this.productService.deleteProduct(id)
            .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
    }

    saveProduct() {
        if (this.isNewProduct) {
            this.productService.createProduct(this.editingProduct)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }
        else {
            this.productService.editProduct(this.editingProduct)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }

        this.resetEditingParams();
    }

    cancelEdit() {
        if (this.isNewProduct) {
            this._products.pop();
        }

        this.resetEditingParams();
    }

    loadTemplate(product: Product): TemplateRef<any> {
        if ((this.editingProduct)
            && (this.editingProduct.Id === product.Id)) {

            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    }

    resetEditingParams()
    {
        this.editingProduct = null;
        this.isNewProduct = false;
    }

    GetSuccesfullFunc() {
        let self = this;

        return (data: any) => {
            self.refresh();
        };
    }

    GetFailedFunc() {
        return (error: any) => { };
    }
}