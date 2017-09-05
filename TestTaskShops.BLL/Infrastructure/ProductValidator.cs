using System;

using TestTaskShops.DAL.Entities;
using TestTaskShops.DAL.Interfaces;
using TestTaskShops.BLL.Interfaces;

namespace TestTaskShops.BLL.Infrastructure
{
    public class ProductValidator : IValidator<Product>
    {
        private IUnitOfWork dataset;
        private Product product;

        public ProductValidator(IUnitOfWork uof)
        {
            dataset = uof;
        }

        private void ValidateName()
        {
            if (string.IsNullOrEmpty(product.Name))
            {
                throw new EntityValidationExeption("Name", "Название не указано!");
            }
        }

        private void ValidateShopId()
        {
            var shop = dataset.Shops.Get(product.ShopId);

            if (shop == null)
            {
                throw new EntityValidationExeption("ShopId", "Магазин не найден");
            }
        }

        #region IValidator

        public void Validate(Product product)
        {
            this.product = product;

            ValidateName();
        }

        #endregion IValidator
    }
}
