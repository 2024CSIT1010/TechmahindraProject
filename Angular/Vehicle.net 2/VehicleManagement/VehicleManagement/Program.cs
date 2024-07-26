using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using VehicleManagement;
using VehicleManagement.Entities;


namespace VehicleManagement
{
    public class Program
    {
        public static void Main(string[] args)
        
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
           
            builder.Services.AddDbContext<VehicleDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DB")));
            builder.Services.AddCors(o =>
            {
                o.AddPolicy("myCorsPolicy", policy =>
                {
                    policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
                });
            });
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("myCorsPolicy");
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
