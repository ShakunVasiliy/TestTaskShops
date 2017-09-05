using System;
using System.Collections.Generic;

using TestTaskShops.DAL.Entities;

namespace TestTaskShops.DAL.Interfaces
{
    public interface IProductRepository : IRepository<Product>
    {
        IEnumerable<Product> GetByShop(int shopId);
        void DeleteShopProducts(int shopId);
    }
}
