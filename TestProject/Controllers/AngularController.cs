using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestProject.Models;
using TestProject.Repository;

namespace TestProject.Controllers
{

    [Route("api/Angular")]
    public class AngularController : Controller
    {
        private ProductDbContext _dbcontext;
        private IProductInterface _inventory;

        public AngularController(ProductDbContext dbcontext, IProductInterface inventory)
        {
            _dbcontext = dbcontext;
            _inventory = inventory;
        }

        [HttpGet]
        public IEnumerable<Product> List()
        {
            var pdks = _inventory.GetAllProducts();
            return pdks;
        }

        [HttpGet("{id}")]
        public Product List(int id)
        {
            var pdk1 = _inventory.GetSingleProduct(id);
            return pdk1;
        }

        [HttpPost]
        public Product Listadd([FromBody]Product pdk)
        {
            var pdk1 = _inventory.Add(pdk);
            return pdk1;
        }

        [HttpPut]
        public Product ListUpdate([FromBody]Product pdk)
        {
            var result = _inventory.Update(pdk);
            return result;
        }

        [HttpDelete("{id}")]
        public Product ListDelete(int id)
        {
            var result = _inventory.Delete(id);
            return result;
        }
    }
}