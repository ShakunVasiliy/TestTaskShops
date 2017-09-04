import { Shop } from './shop.model';
import { Product } from './product.model';

export class ShopProducts {
    constructor(
        public Shop: Shop,
        public Products: Product[]
    ) { }
}