using System;
using System.Collections.Generic;

namespace TestTaskShops.WEB.Models
{
    public class ShopProducts
    {
        public Shop Shop { get; set; }
        public IEnumerable<Product> Products { get; set; }
    }
}