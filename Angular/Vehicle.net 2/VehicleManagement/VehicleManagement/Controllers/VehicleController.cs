using Microsoft.AspNetCore.Mvc;
using VehicleManagement.Entities;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace VehicleManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehiclesController : ControllerBase
    {
        private readonly VehicleDbContext _context;

        public VehiclesController(VehicleDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Vehicle>> GetVehicles()
        {
            return _context.Vehicles.Include(v => v.Customer).ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Vehicle> GetVehicle(int id)
        {
            var vehicle = _context.Vehicles.Include(v => v.Customer).FirstOrDefault(v => v.VehicleId == id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }

        [HttpPost]
        public ActionResult<Vehicle> CreateVehicle(Vehicle vehicle)
        {
            _context.Vehicles.Add(vehicle);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetVehicle), new { id = vehicle.VehicleId }, vehicle);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateVehicle(int id, Vehicle vehicle)
        {
            if (id != vehicle.VehicleId)
            {
                return BadRequest();
            }

            _context.Entry(vehicle).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteVehicle(int id)
        {
            var vehicle = _context.Vehicles.Find(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(vehicle);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
