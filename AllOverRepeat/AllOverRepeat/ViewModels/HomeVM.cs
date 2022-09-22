using AllOverRepeat.Models;
using AllOverRepeat.Models.Base;

namespace AllOverRepeat.ViewModels
{
    public class HomeVM
    {
        public IEnumerable<BaseEntity> Products { get; set; }
        public IEnumerable<Category> Categories { get; set; }
    }
}
