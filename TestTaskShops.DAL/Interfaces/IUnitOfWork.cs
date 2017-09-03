using System;

namespace TestTaskShops.DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IShopRepository Shops { get;}
        IProductRepository Products { get;}
    }
}
