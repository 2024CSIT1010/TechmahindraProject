import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ServiceRepresentative, ServiceRepresentativeService } from '../services/service-representative.service';

@Component({
  selector: 'app-service-reps',
  templateUrl: './service-reps.component.html',
  styleUrls: ['./service-reps.component.css']
})
export class ServiceRepsComponent implements OnInit {
  serviceRepresentatives: ServiceRepresentative[] = [];
  newRepresentative: ServiceRepresentative = {
    serviceRepresentativeId: 0, // Initialize to 0 or any placeholder value since this will be auto-generated by the backend
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  constructor(private serviceRepresentativeService: ServiceRepresentativeService) { }

  ngOnInit(): void {
    this.loadServiceRepresentatives();
  }

  loadServiceRepresentatives(): void {
    this.serviceRepresentativeService.getServiceRepresentatives().subscribe(data => {
      this.serviceRepresentatives = data;
    });
  }

  addServiceRepresentative(): void {
    this.serviceRepresentativeService.addServiceRepresentative(this.newRepresentative).subscribe(() => {
      this.loadServiceRepresentatives();
      // Clear the form
      this.newRepresentative = {
        serviceRepresentativeId: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      };
    });
  }

  openEditServiceRepresentativeDialog(representative: ServiceRepresentative): void {
    // Implement the logic to open a dialog to edit a service representative
  }

  deleteServiceRepresentative(id: number): void {
    this.serviceRepresentativeService.deleteServiceRepresentative(id).subscribe(() => {
      this.loadServiceRepresentatives();
    });
  }
}