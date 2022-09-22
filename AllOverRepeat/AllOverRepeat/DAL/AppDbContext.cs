using AllOverRepeat.Models;
using Microsoft.EntityFrameworkCore;

namespace AllOverRepeat.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<Computer> Computers { get; set; }
    }
}
