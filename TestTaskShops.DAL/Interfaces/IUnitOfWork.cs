using System;

namespace TestTaskShops.DAL.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        IShopRepository Shops { get;}
        IProductRepository Products { get;}
    }
}
