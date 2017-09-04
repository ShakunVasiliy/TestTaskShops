using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

using TestTaskShops.DAL.EF;
using TestTaskShops.DAL.Entities;
using TestTaskShops.DAL.Interfaces;

namespace TestTaskShops.DAL.Repositories
{
    public class ShopRepository : IShopRepository
    {
        private ShopsContext db;

        public ShopRepository(ShopsContext context)
        {
            db = context;
        }

        #region IShopRepository

        public IEnumerable<Shop> GetAll()
        {
            return db.Shops.AsNoTracking();
        }

        public Shop Get(int id)
        {
            return db.Shops.AsNoTracking().Where(shop => shop.Id == id).FirstOrDefault();
        }

        public void Create(Shop shop)
        {
            db.Shops.Add(shop);

            db.SaveChanges();
        }

        public void Update(Shop shop)
        {
            if (Get(shop.Id) == null) return;
            
            db.Entry(shop).State = EntityState.Modified;

            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var shop = db.Shops.Include("Products").Where(s => s.Id == id).FirstOrDefault();

            if (shop == null) return;

            shop.Products.Clear();
            db.Shops.Remove(shop);

            db.SaveChanges();
        }

        #endregion IShopRepository
    }
}
