import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.vehicles = this.authService.getVehicles().filter((v: any) => v.status === 'under');
  }

  scheduleService(id: number) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
      vehicle.status = 'serviced';
      this.authService.updateVehicle(vehicle);
    }
  }
}
