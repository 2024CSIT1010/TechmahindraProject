using Microsoft.AspNetCore.Mvc;
using VehicleManagement.Entities;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;


[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly VehicleDbContext _context;

    public AccountController(VehicleDbContext context)
    {
        _context = context;
    }
    
    [HttpPost("register")]
    public ActionResult Register(User user)
    {
         

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok("Thank you for registering. Your account has been sent for approval. Once it is approved, you will get an email.");
    }
}
