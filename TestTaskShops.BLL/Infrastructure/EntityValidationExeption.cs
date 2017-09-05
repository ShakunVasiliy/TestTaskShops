using System;

namespace TestTaskShops.BLL.Infrastructure
{
    public class EntityValidationExeption : Exception
    {
        public string PropertyName { get; set; }
        
        public EntityValidationExeption(string propertyName, string message)
            : base(message)
        {
            PropertyName = propertyName;
        }
    }
}
