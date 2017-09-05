using System;

using TestTaskShops.DAL.Entities;
using TestTaskShops.BLL.Interfaces;

namespace TestTaskShops.BLL.Infrastructure
{
    public class ShopValidator : IValidator<Shop>
    {
        private Shop shop;

        private void ValidateName()
        {
            if (string.IsNullOrEmpty(shop.Name))
            {
                throw new EntityValidationExeption("Name", "Название не указано!");
            }
        }

        #region IValidator

        public void Validate(Shop shop)
        {
            this.shop = shop;

            ValidateName();
        }

        #endregion IValidator
    }
}
