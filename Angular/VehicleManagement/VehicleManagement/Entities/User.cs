namespace VehicleManagement.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; } // Hashed password
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string MobileNumber { get; set; } = string.Empty;
        public string Role { get; set; } // "Admin" or "Service Advisor"
    }
    public class Vehicle
    {
        public int VehicleId { get; set; }
        public string VIN { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }


    public class ServiceRecord
    {
        public int ServiceRecordId { get; set; }
        public int VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }
        public int ServiceAdvisorId { get; set; }
        public User ServiceAdvisor { get; set; }
        public DateTime ScheduledDate { get; set; }
        public DateTime? CompletionDate { get; set; }
        public  Status Status { get; set; } // "Scheduled", "Under Service", "Serviced"
    }
    public enum Status
    {
        Scheduled,UnderService,Serviced
    }
    public class ServiceItem
    {
        public int ServiceItemId { get; set; }
        public int ServiceRecordId { get; set; }
        public ServiceRecord ServiceRecord { get; set; }
        public int WorkItemId { get; set; }
        public WorkItem WorkItem { get; set; }
        public int Quantity { get; set; }
    }
    public class WorkItem
    {
        public int WorkItemId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Cost { get; set; }
    }
    public class ServiceRepresentative
    {
        public int ServiceRepresentativeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }


}

