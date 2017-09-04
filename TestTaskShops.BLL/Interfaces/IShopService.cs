using System;
using System.Collections.Generic;

using TestTaskShops.BLL.DTO;

namespace TestTaskShops.BLL.Interfaces
{
    public interface IShopService : IDisposable
    {
        IEnumerable<ShopDTO> GetShops();
        ShopDTO GetShop(int id);
        void AddShop(ShopDTO shop);
        void UpdateShop(ShopDTO shop);
        void DeleteShop(int id);
    }
}
