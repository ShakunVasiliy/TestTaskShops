using System;
using System.Collections.Generic;

using TestTaskShops.DAL.Entities;
using TestTaskShops.DAL.Interfaces;
using TestTaskShops.BLL.DTO;
using TestTaskShops.BLL.Interfaces;
using TestTaskShops.BLL.Util;

namespace TestTaskShops.BLL.Services
{
    public class ShopService : IShopService
    {
        private IUnitOfWork dataset;

        public ShopService(IUnitOfWork uow)
        {
            dataset = uow;
        }

        #region IShopService

        public IEnumerable<ShopDTO> GetShops()
        {
            IEnumerable<ShopDTO> shops = MappingUtil.MapCollection<Shop, ShopDTO>(dataset.Shops.GetAll());

            return shops;
        }

        public void AddShop(ShopDTO shopDto)
        {
            Shop shop = MappingUtil.MapInstance<ShopDTO, Shop>(shopDto);

            dataset.Shops.Create(shop);
        }

        public void UpdateShop(ShopDTO shopDto)
        {
            Shop shop = MappingUtil.MapInstance<ShopDTO, Shop>(shopDto);

            dataset.Shops.Update(shop);
        }

        public void DeleteShop(int id)
        {
            dataset.Shops.Delete(id);
        }

        #region Disposable

        public void Dispose()
        {
            dataset.Dispose();
        }

        #endregion Disposable

        #endregion IShopService

    }
}
