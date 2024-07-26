using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace VehicleManagement.Migrations
{
    /// <inheritdoc />
    public partial class SeedDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MobileNumber",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "CustomerId", "Email", "FirstName", "LastName", "Phone" },
                values: new object[,]
                {
                    { 1, "alice.smith@example.com", "Alice", "Smith", "555-1234" },
                    { 2, "bob.johnson@example.com", "Bob", "Johnson", "555-5678" }
                });

            migrationBuilder.InsertData(
                table: "ServiceRepresentatives",
                columns: new[] { "ServiceRepresentativeId", "Email", "FirstName", "LastName", "Phone" },
                values: new object[] { 1, "jane.doe@example.com", "Jane", "Doe", "555-8765" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "FirstName", "LastName", "MobileNumber", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { 1, "Admin", "User", "1234567890", "hashed_password", "Admin", "admin" },
                    { 2, "John", "Doe", "0987654321", "hashed_password", "Service Advisor", "serviceadvisor" }
                });

            migrationBuilder.InsertData(
                table: "WorkItems",
                columns: new[] { "WorkItemId", "Cost", "Description", "Name" },
                values: new object[,]
                {
                    { 1, 29.99m, "High-quality engine oil", "Engine Oil" },
                    { 2, 15.99m, "Fuel filter replacement", "Fuel Filter" }
                });

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "VehicleId", "CustomerId", "Make", "Model", "VIN", "Year" },
                values: new object[,]
                {
                    { 1, 1, "Honda", "Civic", "1HGBH41JXMN109186", 2020 },
                    { 2, 2, "Ford", "F-150", "2FTRX18L7XCA12345", 2019 }
                });

            migrationBuilder.InsertData(
                table: "ServiceRecords",
                columns: new[] { "ServiceRecordId", "CompletionDate", "ScheduledDate", "ServiceAdvisorId", "Status", "VehicleId" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 7, 24, 13, 47, 52, 603, DateTimeKind.Local).AddTicks(5117), new DateTime(2024, 7, 17, 13, 47, 52, 603, DateTimeKind.Local).AddTicks(5099), 2, 2, 1 },
                    { 2, null, new DateTime(2024, 7, 21, 13, 47, 52, 603, DateTimeKind.Local).AddTicks(5121), 2, 1, 2 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ServiceRecords",
                keyColumn: "ServiceRecordId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ServiceRecords",
                keyColumn: "ServiceRecordId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ServiceRepresentatives",
                keyColumn: "ServiceRepresentativeId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "WorkItems",
                keyColumn: "WorkItemId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "WorkItems",
                keyColumn: "WorkItemId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "VehicleId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "VehicleId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MobileNumber",
                table: "Users");
        }
    }
}
