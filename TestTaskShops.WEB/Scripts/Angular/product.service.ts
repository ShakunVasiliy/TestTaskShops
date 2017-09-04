import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product.model';
import { WebApi } from './webApi';

@Injectable()

export class ProductService {
    private apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = WebApi.productsUrl;
    }

    createProduct(product: Product) {
        const body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(this.apiUrl, body, { headers: headers })
            .map(resp => { })
            .catch(err => Observable.throw(err));
    }

    editProduct(product: Product) {
        const body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.put(this.apiUrl + product.Id, body, { headers: headers })
            .map(resp => { })
            .catch(err => Observable.throw(err));
    }

    deleteProduct(id: number) {
        return this.http.delete(this.apiUrl + id)
            .map(resp => { })
            .catch(err => Observable.throw(err));
    }
}