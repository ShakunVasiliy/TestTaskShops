using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

using TestTaskShops.DAL.EF;
using TestTaskShops.DAL.Entities;
using TestTaskShops.DAL.Interfaces;

namespace TestTaskShops.DAL.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private ShopsContext db;

        public ProductRepository(ShopsContext context)
        {
            db = context;
        }

        #region  IProductRepository

        public IEnumerable<Product>  GetAll()
        {
            return db.Products.AsNoTracking();
        }

        public Product Get(int id)
        {
            return db.Products.AsNoTracking().Where(p => p.Id == id).FirstOrDefault();
        }

        public IEnumerable<Product> GetByShop(int shopId)
        {
            return db.Products.AsNoTracking().Where(p => p.ShopId == shopId);
        }

        public void Create(Product product)
        {
            db.Products.Add(product);

            db.SaveChanges();
        }

        public void Update(Product product)
        {
            if (Get(product.Id) == null) return;

            db.Entry(product).State = EntityState.Modified;

            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var product = db.Products.Find(id);

            if (product == null) return;

            db.Products.Remove(product);

            db.SaveChanges();
        }

        public void DeleteShopProducts(int shopId)
        {
            var shopProducts = from p in db.Products
                               where p.ShopId == shopId
                               select p;

            foreach (var product in shopProducts)
            {
                db.Products.Remove(product);
            }

            db.SaveChanges();
        }

        #endregion IProductRepository
    }
}
