using AllOverRepeat.DAL;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddControllersWithViews();
var app = builder.Build();



app.UseStaticFiles();
app.MapControllerRoute(
    "Default",
    "{controller=computer}/{action=index}/{id?}"
    );
app.Run();
