using AllOverRepeat.Models.Base;

namespace AllOverRepeat.Models
{
    public class Phone:BaseEntity
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
    }
}
