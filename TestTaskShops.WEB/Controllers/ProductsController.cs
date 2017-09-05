using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using TestTaskShops.BLL.DTO;
using TestTaskShops.BLL.Interfaces;
using TestTaskShops.BLL.Infrastructure;
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
        public IHttpActionResult Post([FromBody]Product product)
        {
            ProductDTO productDto = MappingUtil.MapInstance<Product, ProductDTO>(product);

            try
            {
                productService.AddProduct(productDto);
            }
            catch (EntityValidationExeption ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(int id, [FromBody]Product product)
        {
            ProductDTO productDto = MappingUtil.MapInstance<Product, ProductDTO>(product);

            try
            {
                productService.UpdateProduct(productDto);
            }
            catch (EntityValidationExeption ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                productService.DeleteProduct(id);
            }
            catch (EntityValidationExeption ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            productService.Dispose();
            base.Dispose(disposing);
        }
    }
}