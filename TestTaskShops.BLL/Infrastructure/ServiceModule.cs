using System;

using Ninject.Modules;

using TestTaskShops.DAL.Interfaces;
using TestTaskShops.DAL.Repositories;

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
        }
    }
}
