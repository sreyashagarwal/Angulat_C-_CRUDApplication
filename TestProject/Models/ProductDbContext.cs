using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.Models
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Product> ProductTable { get; set; }
    }
}
