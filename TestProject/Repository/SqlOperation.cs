using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProject.Models;

namespace TestProject.Repository
{
    public class SqlOperation : IProductInterface
    {
            private ProductDbContext _context;

            public SqlOperation(ProductDbContext context)
            {
                _context = context;
            }
                        
            public IEnumerable<Product> GetAllProducts()
            {
                return _context.ProductTable.OrderBy(r => r.Name);
            }
            
            public Product GetSingleProduct(int id)
            {
            var result = _context.ProductTable.SingleOrDefault(b => b.Id == id);
            return result;
            }
            
            public Product Add(Product pdk)
            {
                _context.ProductTable.Add(pdk);
                _context.SaveChanges();
                return pdk;
            }

            public Product Update(Product pdk)
            {
                var result = _context.ProductTable.SingleOrDefault(b => b.Id == pdk.Id);
                if (result != null)
                {
                    result.Name = pdk.Name;
                    result.Price = pdk.Price;
                    result.Quantity = pdk.Quantity;
                    result.Type = pdk.Type;
                    _context.SaveChanges();
                }
                return result;
            }

            public Product Delete(int key)
            {
                var result = _context.ProductTable.SingleOrDefault(b => b.Id == key);
                if (result != null)
                {
                    _context.ProductTable.Remove(result);
                    _context.SaveChanges();
                }
                return result;
            }

        }
    }
