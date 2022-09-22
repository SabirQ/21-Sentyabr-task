using Microsoft.AspNetCore.Mvc;

namespace AllOverRepeat.ViewComponents
{
    public class FooterViewComponent:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
