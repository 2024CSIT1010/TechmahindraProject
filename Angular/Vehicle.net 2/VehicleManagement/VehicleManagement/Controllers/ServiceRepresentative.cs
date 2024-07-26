using Microsoft.AspNetCore.Mvc;
using VehicleManagement.Entities;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

[Route("api/[controller]")]
[ApiController]
public class ServiceRepresentativesController : ControllerBase
{
    private readonly VehicleDbContext _context;

    public ServiceRepresentativesController(VehicleDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ServiceRepresentative>>> GetServiceRepresentatives()
    {
        return await _context.ServiceRepresentatives.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<ServiceRepresentative>> AddServiceRepresentative(ServiceRepresentative serviceRepresentative)
    {
        _context.ServiceRepresentatives.Add(serviceRepresentative);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetServiceRepresentatives), new { id = serviceRepresentative.ServiceRepresentativeId }, serviceRepresentative);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateServiceRepresentative(int id, ServiceRepresentative serviceRepresentative)
    {
        if (id != serviceRepresentative.ServiceRepresentativeId)
        {
            return BadRequest();
        }

        _context.Entry(serviceRepresentative).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.ServiceRepresentatives.Any(e => e.ServiceRepresentativeId == id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteServiceRepresentative(int id)
    {
        var serviceRepresentative = await _context.ServiceRepresentatives.FindAsync(id);
        if (serviceRepresentative == null)
        {
            return NotFound();
        }

        _context.ServiceRepresentatives.Remove(serviceRepresentative);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
