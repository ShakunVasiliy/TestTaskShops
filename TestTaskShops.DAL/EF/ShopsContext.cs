using System;
using System.Data.Entity;

using TestTaskShops.DAL.Entities;

namespace TestTaskShops.DAL.EF
{
    public class ShopsContext : DbContext
    {
		public DbSet<Shop> Shops { get; set; }
		public DbSet<Product> Products { get; set; }

		public ShopsContext(string connectionString)
			: base(connectionString)
        { }
    }
}
