using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProject.Models;

namespace TestProject.Repository
{
        public interface IProductInterface
        {
            IEnumerable<Product> GetAllProducts();
            Product GetSingleProduct(int id);
            Product Add(Product pdk);
            Product Delete(int key);
            Product Update(Product pdk);
        }
    }
