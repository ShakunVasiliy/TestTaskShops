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
    public class ProductsController : ApiController
    {
        private IProductService productService;

        public ProductsController(IProductService productService)
        {
            this.productService = productService;
        }

        // POST api/<controller>
        public void Post([FromBody]Product product)
        {
            ProductDTO productDto = MappingUtil.MapInstance<Product, ProductDTO>(product);

            productService.AddProduct(productDto);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Product product)
        {
            ProductDTO productDto = MappingUtil.MapInstance<Product, ProductDTO>(product);

            productService.UpdateProduct(productDto);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            productService.DeleteProduct(id);
        }

        protected override void Dispose(bool disposing)
        {
            productService.Dispose();
            base.Dispose(disposing);
        }
    }
}