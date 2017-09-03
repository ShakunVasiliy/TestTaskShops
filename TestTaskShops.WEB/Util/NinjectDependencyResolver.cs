using System;
using System.Collections.Generic;
using System.Web.Mvc;

using Ninject;

using TestTaskShops.BLL.Interfaces;
using TestTaskShops.BLL.Services;

namespace TestTaskShops.WEB.Util
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;
        public NinjectDependencyResolver(IKernel kernelParam)
        {
            kernel = kernelParam;
            AddBindings();
        }
        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }
        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }
        private void AddBindings()
        {
            kernel.Bind<IShopService>().To<ShopService>();
            kernel.Bind<IProductService>().To<ProductService>();
        }
    }
}