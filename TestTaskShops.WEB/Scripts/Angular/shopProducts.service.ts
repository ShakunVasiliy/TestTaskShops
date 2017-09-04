import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Shop } from './shop.model';
import { Product } from './product.model';
import { ShopProducts } from './shopProducts.model';
import { WebApi } from './WebApi';

@Injectable()
export class ShopProductsService {
    private apiUrl: string;

    constructor(private http: Http)
    {
        this.apiUrl = WebApi.shopProductsUrl;
    }

    getShopProducts(shopId: number): Observable<ShopProducts> {
        return this.http.get(this.apiUrl + shopId)
            .map(resp => resp.json())
            .catch(err => Observable.throw(err));
    }
}