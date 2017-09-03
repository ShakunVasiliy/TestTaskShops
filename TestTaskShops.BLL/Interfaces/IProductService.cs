using System;
using System.Collections.Generic;

using TestTaskShops.BLL.DTO;

namespace TestTaskShops.BLL.Interfaces
{
    public interface IProductService
    {
        IEnumerable<ProductDTO> GetShopProducts(int shopId);
        void AddProduct(ProductDTO product);
        void UpdateProduct(ProductDTO product);
        void DeleteProduct(int id);
    }
}
