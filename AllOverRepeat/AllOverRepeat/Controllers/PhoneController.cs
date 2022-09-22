using AllOverRepeat.DAL;
using AllOverRepeat.Models;
using AllOverRepeat.Models.Base;
using AllOverRepeat.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AllOverRepeat.Controllers
{
    public class PhoneController : Controller
    {
        private readonly AppDbContext _context;

        public PhoneController(AppDbContext context)
        {
            _context = context;
        }


        public IActionResult Index(string name=null)
        {
            if (string.IsNullOrEmpty(name))
            {               
                HomeVM PhoneVM = new HomeVM
                {
                    Products = _context.Phones.ToList(),
                    Categories = _context.Categories.ToList()
                };

                return View(PhoneVM);
            }
           
            Category category = _context.Categories.FirstOrDefault(x=>x.Name.ToLower().Contains(name.Trim().ToLower()));
            if (category == null) return NotFound();
            else
            {
                HomeVM PhoneVM = new HomeVM
                {
                    Products = _context.Phones.Where(x => x.CategoryId == category.Id).ToList(),
                    Categories = _context.Categories.Where(x => x.Id == category.Id).ToList(),
                };

                return View(PhoneVM);
            }
           

        }
    }
}
