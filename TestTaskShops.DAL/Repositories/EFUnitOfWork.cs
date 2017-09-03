using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using TestTaskShops.DAL.EF;
using TestTaskShops.DAL.Interfaces;

namespace TestTaskShops.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork, IDisposable
    {
        private ShopsContext db;
        private ShopRepository shopRepository;
        private ProductRepository productRepository;

        public EFUnitOfWork(string connectionString)
        {
            db = new ShopsContext(connectionString);
        }

        #region IUnitOfWork

        public IShopRepository Shops
        {
            get
            {
                if (shopRepository == null)
                {
                    shopRepository = new ShopRepository(db);
                }

                return shopRepository;
            }
        }

        public IProductRepository Products
        {
            get
            {
                if (productRepository == null)
                {
                    productRepository = new ProductRepository(db);
                }

                return productRepository;
            }
        }

        #endregion IUnitOfWork

        #region IDisposable

        public void Dispose()
        {
            db.Dispose();
        }

        #endregion IDisposable

    }
}
