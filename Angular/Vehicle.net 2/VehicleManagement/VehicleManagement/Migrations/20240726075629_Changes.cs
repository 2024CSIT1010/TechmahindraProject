using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VehicleManagement.Migrations
{
    /// <inheritdoc />
    public partial class Changes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ServiceRecords",
                keyColumn: "ServiceRecordId",
                keyValue: 1,
                columns: new[] { "CompletionDate", "ScheduledDate" },
                values: new object[] { new DateTime(2024, 7, 26, 13, 26, 28, 710, DateTimeKind.Local).AddTicks(1931), new DateTime(2024, 7, 19, 13, 26, 28, 710, DateTimeKind.Local).AddTicks(1908) });

            migrationBuilder.UpdateData(
                table: "ServiceRecords",
                keyColumn: "ServiceRecordId",
                keyValue: 2,
                column: "ScheduledDate",
                value: new DateTime(2024, 7, 23, 13, 26, 28, 710, DateTimeKind.Local).AddTicks(1935));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ServiceRecords",
                keyColumn: "ServiceRecordId",
                keyValue: 1,
                columns: new[] { "CompletionDate", "ScheduledDate" },
                values: new object[] { new DateTime(2024, 7, 24, 13, 47, 52, 603, DateTimeKind.Local).AddTicks(5117), new DateTime(2024, 7, 17, 13, 47, 52, 603, DateTimeKind.Local).AddTicks(5099) });

            migrationBuilder.UpdateData(
                table: "ServiceRecords",
                keyColumn: "ServiceRecordId",
                keyValue: 2,
                column: "ScheduledDate",
                value: new DateTime(2024, 7, 21, 13, 47, 52, 603, DateTimeKind.Local).AddTicks(5121));
        }
    }
}
