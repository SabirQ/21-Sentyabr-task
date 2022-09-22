using AllOverRepeat.DAL;
using AllOverRepeat.Models;
using AllOverRepeat.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AllOverRepeat.Controllers
{
    public class ComputerController : Controller
    {
        private readonly AppDbContext _context;

        public ComputerController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index(string name = null)
        {
            if (string.IsNullOrEmpty(name))
            {
                HomeVM ComputerVM = new HomeVM
                {
                    Products = _context.Computers.ToList(),
                    Categories = _context.Categories.ToList()
                };

                return View(ComputerVM);
            }

            Category category = _context.Categories.FirstOrDefault(x => x.Name.ToLower().Contains(name.Trim().ToLower()));
            if (category == null) return NotFound();
            else
            {
                HomeVM ComputerVM = new HomeVM
                {
                    Products = _context.Computers.Where(x => x.CategoryId == category.Id).ToList(),
                    Categories = _context.Categories.Where(x => x.Id == category.Id).ToList(),
                };
                return View(ComputerVM);
            }
        }
    }
}
