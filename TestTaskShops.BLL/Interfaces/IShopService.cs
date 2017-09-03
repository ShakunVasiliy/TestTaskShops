using System;
using System.Collections.Generic;

using TestTaskShops.BLL.DTO;

namespace TestTaskShops.BLL.Interfaces
{
    public interface IShopService
    {
        IEnumerable<ShopDTO> GetShops();
        void AddShop(ShopDTO shop);
        void UpdateShop(ShopDTO shop);
        void DeleteShop(int id);
    }
}
