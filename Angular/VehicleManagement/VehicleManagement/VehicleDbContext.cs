using Microsoft.EntityFrameworkCore;

namespace VehicleManagement.Entities
{
    public class VehicleDbContext : DbContext
    {
        public VehicleDbContext(DbContextOptions<VehicleDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ServiceRecord> ServiceRecords { get; set; }
        public DbSet<ServiceItem> ServiceItems { get; set; }
        public DbSet<WorkItem> WorkItems { get; set; }
        public DbSet<ServiceRepresentative> ServiceRepresentatives { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed data for Users
            modelBuilder.Entity<User>().HasData(
                new User { UserId = 1, Username = "admin", Password = "hashed_password", FirstName = "Admin", LastName = "User", MobileNumber = "1234567890", Role = "Admin" },
                new User { UserId = 2, Username = "serviceadvisor", Password = "hashed_password", FirstName = "John", LastName = "Doe", MobileNumber = "0987654321", Role = "Service Advisor" }
            );

            // Seed data for Customers
            modelBuilder.Entity<Customer>().HasData(
                new Customer { CustomerId = 1, FirstName = "Alice", LastName = "Smith", Email = "alice.smith@example.com", Phone = "555-1234" },
                new Customer { CustomerId = 2, FirstName = "Bob", LastName = "Johnson", Email = "bob.johnson@example.com", Phone = "555-5678" }
            );

            // Seed data for WorkItems
            modelBuilder.Entity<WorkItem>().HasData(
                new WorkItem { WorkItemId = 1, Name = "Engine Oil", Description = "High-quality engine oil", Cost = 29.99m },
                new WorkItem { WorkItemId = 2, Name = "Fuel Filter", Description = "Fuel filter replacement", Cost = 15.99m }
            );

            // Seed data for ServiceRepresentatives
            modelBuilder.Entity<ServiceRepresentative>().HasData(
                new ServiceRepresentative { ServiceRepresentativeId = 1, FirstName = "Jane", LastName = "Doe", Email = "jane.doe@example.com", Phone = "555-8765" }
            );

            // Seed data for Vehicles
            modelBuilder.Entity<Vehicle>().HasData(
                new Vehicle { VehicleId = 1, VIN = "1HGBH41JXMN109186", Make = "Honda", Model = "Civic", Year = 2020, CustomerId = 1 },
                new Vehicle { VehicleId = 2, VIN = "2FTRX18L7XCA12345", Make = "Ford", Model = "F-150", Year = 2019, CustomerId = 2 }
            );

            // Seed data for ServiceRecords
            modelBuilder.Entity<ServiceRecord>().HasData(
                new ServiceRecord { ServiceRecordId = 1, VehicleId = 1, ServiceAdvisorId = 2, ScheduledDate = DateTime.Now.AddDays(-7), CompletionDate = DateTime.Now, Status = Status.Serviced },
                new ServiceRecord { ServiceRecordId = 2, VehicleId = 2, ServiceAdvisorId = 2, ScheduledDate = DateTime.Now.AddDays(-3), CompletionDate = null, Status = Status.UnderService }
            );

            // Configure relationships
            modelBuilder.Entity<ServiceRecord>()
                .HasOne(sr => sr.Vehicle)
                .WithMany()
                .HasForeignKey(sr => sr.VehicleId);

            modelBuilder.Entity<ServiceRecord>()
                .HasOne(sr => sr.ServiceAdvisor)
                .WithMany()
                .HasForeignKey(sr => sr.ServiceAdvisorId);

            modelBuilder.Entity<ServiceItem>()
                .HasOne(si => si.WorkItem)
                .WithMany()
                .HasForeignKey(si => si.WorkItemId);

            modelBuilder.Entity<Vehicle>()
                .HasOne(v => v.Customer)
                .WithMany()
                .HasForeignKey(v => v.CustomerId);
        }
    }
}
