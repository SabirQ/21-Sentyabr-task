using AllOverRepeat.Models.Base;
using System.ComponentModel.DataAnnotations;

namespace AllOverRepeat.Models
{
    public class Category:BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}
