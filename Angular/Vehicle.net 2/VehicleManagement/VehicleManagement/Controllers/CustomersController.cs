using Microsoft.AspNetCore.Mvc;
using VehicleManagement.Entities;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace VehicleManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly VehicleDbContext _context;

        public CustomersController(VehicleDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GetCustomers()
        {
            return _context.Customers.Include(c => c.Vehicles).ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomer(int id)
        {
            var customer = _context.Customers.Include(c => c.Vehicles).FirstOrDefault(c => c.CustomerId == id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        [HttpPost]
        public ActionResult<Customer> CreateCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCustomer), new { id = customer.CustomerId }, customer);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var customer = _context.Customers.Include(c => c.Vehicles).FirstOrDefault(c => c.CustomerId == id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customers.Remove(customer);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
