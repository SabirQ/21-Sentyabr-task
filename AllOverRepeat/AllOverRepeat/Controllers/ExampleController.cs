using Microsoft.AspNetCore.Mvc;

namespace AllOverRepeat.Controllers
{
    public class ExampleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
