import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: any[] = [];
  selectedVehicle: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.vehicles = this.authService.getVehicles();
  }

  addVehicle() {
    const newVehicle = { id: Date.now(), model: 'New Car', status: 'due', serviceDate: new Date() };
    this.authService.addVehicle(newVehicle);
    this.vehicles = this.authService.getVehicles();
  }

  scheduleService(id: number) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
      vehicle.status = 'under';
      this.authService.updateVehicle(vehicle);
    }
  }

  deleteVehicle(id: number) {
    this.authService.deleteVehicle(id);
    this.vehicles = this.authService.getVehicles();
  }

  editVehicle(vehicle: any) {
    this.selectedVehicle = { ...vehicle }; // Create a copy to edit
  }

  saveEditedVehicle() {
    if (this.selectedVehicle) {
      this.authService.updateVehicle(this.selectedVehicle);
      this.vehicles = this.authService.getVehicles();
      this.selectedVehicle = null; // Clear the selection after saving
    }
  }

  cancelEdit() {
    this.selectedVehicle = null;
  }
}
