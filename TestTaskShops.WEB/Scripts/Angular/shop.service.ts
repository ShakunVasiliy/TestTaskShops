import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Shop } from './shop.model';
import { WebApi } from './webApi';
  
@Injectable()

export class ShopService {
    private apiUrl : string;

    constructor(private http: Http) {
        this.apiUrl = WebApi.shopsUrl;
    }

    getUsers(): Observable<Shop[]> {
        return this.http.get(this.apiUrl)
            .map(resp => resp.json())
            .catch(err => Observable.throw(err));
    }

    createShop(shop: Shop) {
        const body = JSON.stringify(shop);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(this.apiUrl, body, { headers: headers })
            .map(resp => { })
            .catch(err => Observable.throw(err));
    }

    editShop(shop: Shop) {
        const body = JSON.stringify(shop);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.put(this.apiUrl + shop.Id, body, { headers: headers })
            .map(resp => { })
            .catch(err => Observable.throw(err));
    }

    deleteShop(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.delete(this.apiUrl + id, { headers: headers })
            .map(resp => { })
            .catch(err => Observable.throw(err));
    }
}