using System;

namespace TestTaskShops.BLL.Interfaces
{
    public interface IValidator<T>
    {
        void Validate(T validationObj);
    }
}
