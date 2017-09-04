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
    public class ShopsController : ApiController
    {
        private IShopService shopService;

        public ShopsController(IShopService shopService)
        {
            this.shopService = shopService;
        }

        // GET api/<controller>
        public IHttpActionResult Get()
        {
            IEnumerable<ShopDTO> shopDtos = shopService.GetShops();
            IEnumerable<Shop> shops = MappingUtil.MapCollection<ShopDTO, Shop>(shopDtos);

            return Ok(shops);
        }

        // POST api/<controller>
        public void Post([FromBody]Shop shop)
        {
            ShopDTO shopDto = MappingUtil.MapInstance<Shop, ShopDTO>(shop);

            shopService.AddShop(shopDto);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Shop shop)
        {
            ShopDTO shopDto = MappingUtil.MapInstance<Shop, ShopDTO>(shop);

            shopService.UpdateShop(shopDto);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            shopService.DeleteShop(id);
        }

        protected override void Dispose(bool disposing)
        {
            shopService.Dispose();
            base.Dispose(disposing);
        }
    }
}