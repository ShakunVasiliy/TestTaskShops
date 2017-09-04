export class WebApi {
    private static readonly baseUrl: string = 'http://localhost:58410';

    static readonly shopsUrl: string = WebApi.baseUrl + '/api/shops/';
    static readonly productsUrl: string = WebApi.baseUrl + '/api/products/';
    static readonly shopProductsUrl: string = WebApi.baseUrl + '/api/shopProducts/';
}