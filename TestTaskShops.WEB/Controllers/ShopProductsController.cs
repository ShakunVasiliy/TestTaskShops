using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using TestTaskShops.BLL.DTO;
using TestTaskShops.BLL.Interfaces;
using TestTaskShops.BLL.Util;
using TestTaskShops.WEB.Models;

namespace TestTaskShops.WEB.Controllers
{
    public class ShopProductsController : ApiController
    {
        private IProductService productService;
        private IShopService shopService;

        public ShopProductsController(IShopService shopService, IProductService productService)
        {
            this.shopService = shopService;
            this.productService = productService;
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            ShopDTO shopDto = shopService.GetShop(id);

            if (shopDto == null)
            {
                return NotFound();
            }

            IEnumerable<ProductDTO> shopProductDtos = productService.GetShopProducts(id);
            ShopProducts shopProducts = new ShopProducts()
            {
                Shop = MappingUtil.MapInstance<ShopDTO, Shop>(shopDto),
                Products = MappingUtil.MapCollection<ProductDTO, Product>(shopProductDtos)
            };

            return Ok(shopProducts);
        }

        protected override void Dispose(bool disposing)
        {
            productService.Dispose();
            shopService.Dispose();
            base.Dispose(disposing);
        }
    }
}