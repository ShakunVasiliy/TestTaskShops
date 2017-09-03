using System;
using System.Collections.Generic;

using TestTaskShops.DAL.Entities;
using TestTaskShops.DAL.Interfaces;
using TestTaskShops.BLL.DTO;
using TestTaskShops.BLL.Util;
using TestTaskShops.BLL.Interfaces;

namespace TestTaskShops.BLL.Services
{
    public class ProductService : IProductService
    {
        private IUnitOfWork dataset;

        public ProductService(IUnitOfWork uow)
        {
            dataset = uow;
        }

        #region IProductService

        public IEnumerable<ProductDTO> GetShopProducts(int shopId)
        {
            IEnumerable<ProductDTO> shopProducts = 
                MappingUtil.MapCollection<Product, ProductDTO>(dataset.Products.GetByShop(shopId));

            return shopProducts;
        }

        public void AddProduct(ProductDTO productDto)
        {
            Product product = MappingUtil.MapInstance<ProductDTO, Product>(productDto);

            dataset.Products.Create(product);
        }

        public void UpdateProduct(ProductDTO productDto)
        {
            Product product = MappingUtil.MapInstance<ProductDTO, Product>(productDto);

            dataset.Products.Update(product);
        }

        public void DeleteProduct(int id)
        {
            dataset.Products.Delete(id);
        }

        #region Disposable

        public void Dispose()
        {
            dataset.Dispose();
        }

        #endregion Disposable

        #endregion IProductService
    }
}
