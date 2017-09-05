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
        private IValidator<Shop> validator;

        public ShopService(IUnitOfWork uow, IValidator<Shop> validator)
        {
            dataset = uow;
            this.validator = validator;
        }

        #region IShopService

        public IEnumerable<ShopDTO> GetShops()
        {
            IEnumerable<ShopDTO> shops = MappingUtil.MapCollection<Shop, ShopDTO>(dataset.Shops.GetAll());

            return shops;
        }

        public ShopDTO GetShop(int id)
        {
            var shop = dataset.Shops.Get(id);

            return MappingUtil.MapInstance<Shop, ShopDTO>(shop);
        }

        public void AddShop(ShopDTO shopDto)
        {
            Shop shop = MappingUtil.MapInstance<ShopDTO, Shop>(shopDto);

            validator.Validate(shop);

            dataset.Shops.Create(shop);
        }

        public void UpdateShop(ShopDTO shopDto)
        {
            Shop shop = MappingUtil.MapInstance<ShopDTO, Shop>(shopDto);

            validator.Validate(shop);

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
