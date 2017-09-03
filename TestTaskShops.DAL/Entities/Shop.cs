using System;
using System.Collections.Generic;

namespace TestTaskShops.DAL.Entities
{
    public class Shop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Mode { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
