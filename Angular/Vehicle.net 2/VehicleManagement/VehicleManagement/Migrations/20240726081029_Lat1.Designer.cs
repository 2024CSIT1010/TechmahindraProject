﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VehicleManagement.Entities;

#nullable disable

namespace VehicleManagement.Migrations
{
    [DbContext(typeof(VehicleDbContext))]
    [Migration("20240726081029_Lat1")]
    partial class Lat1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("VehicleManagement.Entities.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CustomerId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            CustomerId = 1,
                            Email = "alice.smith@example.com",
                            FirstName = "Alice",
                            LastName = "Smith",
                            Phone = "555-1234"
                        },
                        new
                        {
                            CustomerId = 2,
                            Email = "bob.johnson@example.com",
                            FirstName = "Bob",
                            LastName = "Johnson",
                            Phone = "555-5678"
                        });
                });

            modelBuilder.Entity("VehicleManagement.Entities.ServiceItem", b =>
                {
                    b.Property<int>("ServiceItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ServiceItemId"));

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("ServiceRecordId")
                        .HasColumnType("int");

                    b.Property<int>("WorkItemId")
                        .HasColumnType("int");

                    b.HasKey("ServiceItemId");

                    b.HasIndex("ServiceRecordId");

                    b.HasIndex("WorkItemId");

                    b.ToTable("ServiceItems");
                });

            modelBuilder.Entity("VehicleManagement.Entities.ServiceRecord", b =>
                {
                    b.Property<int>("ServiceRecordId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ServiceRecordId"));

                    b.Property<DateTime?>("CompletionDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ScheduledDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("ServiceAdvisorId")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("VehicleId")
                        .HasColumnType("int");

                    b.HasKey("ServiceRecordId");

                    b.HasIndex("ServiceAdvisorId");

                    b.HasIndex("VehicleId");

                    b.ToTable("ServiceRecords");

                    b.HasData(
                        new
                        {
                            ServiceRecordId = 1,
                            CompletionDate = new DateTime(2024, 7, 26, 13, 40, 29, 548, DateTimeKind.Local).AddTicks(613),
                            ScheduledDate = new DateTime(2024, 7, 19, 13, 40, 29, 548, DateTimeKind.Local).AddTicks(590),
                            ServiceAdvisorId = 2,
                            Status = 2,
                            VehicleId = 1
                        },
                        new
                        {
                            ServiceRecordId = 2,
                            ScheduledDate = new DateTime(2024, 7, 23, 13, 40, 29, 548, DateTimeKind.Local).AddTicks(617),
                            ServiceAdvisorId = 2,
                            Status = 1,
                            VehicleId = 2
                        });
                });

            modelBuilder.Entity("VehicleManagement.Entities.ServiceRepresentative", b =>
                {
                    b.Property<int>("ServiceRepresentativeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ServiceRepresentativeId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ServiceRepresentativeId");

                    b.ToTable("ServiceRepresentatives");

                    b.HasData(
                        new
                        {
                            ServiceRepresentativeId = 1,
                            Email = "jane.doe@example.com",
                            FirstName = "Jane",
                            LastName = "Doe",
                            Phone = "555-8765"
                        });
                });

            modelBuilder.Entity("VehicleManagement.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MobileNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            FirstName = "Admin",
                            LastName = "User",
                            MobileNumber = "1234567890",
                            Password = "hashed_password",
                            Role = "Admin",
                            Username = "admin"
                        },
                        new
                        {
                            UserId = 2,
                            FirstName = "John",
                            LastName = "Doe",
                            MobileNumber = "0987654321",
                            Password = "hashed_password",
                            Role = "Service Advisor",
                            Username = "serviceadvisor"
                        });
                });

            modelBuilder.Entity("VehicleManagement.Entities.Vehicle", b =>
                {
                    b.Property<int>("VehicleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("VehicleId"));

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<string>("Make")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VIN")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("VehicleId");

                    b.HasIndex("CustomerId");

                    b.ToTable("Vehicles");

                    b.HasData(
                        new
                        {
                            VehicleId = 1,
                            CustomerId = 1,
                            Make = "Honda",
                            Model = "Civic",
                            VIN = "1HGBH41JXMN109186",
                            Year = 2020
                        },
                        new
                        {
                            VehicleId = 2,
                            CustomerId = 2,
                            Make = "Ford",
                            Model = "F-150",
                            VIN = "2FTRX18L7XCA12345",
                            Year = 2019
                        });
                });

            modelBuilder.Entity("VehicleManagement.Entities.WorkItem", b =>
                {
                    b.Property<int>("WorkItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("WorkItemId"));

                    b.Property<decimal>("Cost")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("WorkItemId");

                    b.ToTable("WorkItems");

                    b.HasData(
                        new
                        {
                            WorkItemId = 1,
                            Cost = 29.99m,
                            Description = "High-quality engine oil",
                            Name = "Engine Oil"
                        },
                        new
                        {
                            WorkItemId = 2,
                            Cost = 15.99m,
                            Description = "Fuel filter replacement",
                            Name = "Fuel Filter"
                        });
                });

            modelBuilder.Entity("VehicleManagement.Entities.ServiceItem", b =>
                {
                    b.HasOne("VehicleManagement.Entities.ServiceRecord", "ServiceRecord")
                        .WithMany()
                        .HasForeignKey("ServiceRecordId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VehicleManagement.Entities.WorkItem", "WorkItem")
                        .WithMany()
                        .HasForeignKey("WorkItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ServiceRecord");

                    b.Navigation("WorkItem");
                });

            modelBuilder.Entity("VehicleManagement.Entities.ServiceRecord", b =>
                {
                    b.HasOne("VehicleManagement.Entities.User", "ServiceAdvisor")
                        .WithMany()
                        .HasForeignKey("ServiceAdvisorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VehicleManagement.Entities.Vehicle", "Vehicle")
                        .WithMany()
                        .HasForeignKey("VehicleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ServiceAdvisor");

                    b.Navigation("Vehicle");
                });

            modelBuilder.Entity("VehicleManagement.Entities.Vehicle", b =>
                {
                    b.HasOne("VehicleManagement.Entities.Customer", "Customer")
                        .WithMany("Vehicles")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("VehicleManagement.Entities.Customer", b =>
                {
                    b.Navigation("Vehicles");
                });
#pragma warning restore 612, 618
        }
    }
}
