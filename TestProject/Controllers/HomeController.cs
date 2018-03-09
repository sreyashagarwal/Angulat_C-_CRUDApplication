using Microsoft.AspNetCore.Mvc;

namespace TestProject.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }        
}
