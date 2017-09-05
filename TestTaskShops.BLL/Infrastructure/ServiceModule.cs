using System;

using Ninject.Modules;

using TestTaskShops.DAL.Entities;
using TestTaskShops.DAL.Interfaces;
using TestTaskShops.DAL.Repositories;
using TestTaskShops.BLL.Interfaces;
using TestTaskShops.BLL.Infrastructure;

namespace TestTaskShops.BLL.Infrastructure
{
    public class ServiceModule : NinjectModule
    {
        private string connectionString;

        public ServiceModule(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public override void Load()
        {
            Bind<IUnitOfWork>().To<EFUnitOfWork>().WithConstructorArgument(connectionString);
            Bind<IValidator<Shop>>().To<ShopValidator>();
            Bind<IValidator<Product>>().To<ProductValidator>();
        }
    }
}
