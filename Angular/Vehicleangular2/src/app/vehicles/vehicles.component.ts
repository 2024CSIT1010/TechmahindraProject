import { Component, OnInit } from '@angular/core';
import { VehicleService, Vehicle } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  showAddForm: boolean = false;
  vehicle: Vehicle = { vin: '', make: '', model: '', year: new Date().getFullYear(), customerId: 0 };
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  onSubmit(): void {
    if (this.vehicle.vehicleId) {
      this.vehicleService.updateVehicle(this.vehicle.vehicleId, this.vehicle).subscribe(
        () => {
          this.loadVehicles();
          this.resetForm();
          this.showAddForm = false;
        },
        error => {
          console.error('Error updating vehicle:', error);
        }
      );
    } else {
      this.vehicleService.createVehicle(this.vehicle).subscribe(
        () => {
          this.loadVehicles();
          this.resetForm();
          this.showAddForm = false;
        },
        error => {
          console.error('Error creating vehicle:', error);
        }
      );
    }
  }

  editVehicle(vehicle: Vehicle): void {
    this.vehicle = { ...vehicle };
    this.showAddForm = true;
  }

  deleteVehicle(vehicleId: number): void {
    this.vehicleService.deleteVehicle(vehicleId).subscribe(() => {
      this.loadVehicles();
    });
  }

  resetForm(): void {
    this.vehicle = { vin: '', make: '', model: '', year: new Date().getFullYear(), customerId: 0 };
  }
}
