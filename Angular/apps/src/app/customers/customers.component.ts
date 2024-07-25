import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  selectedCustomer: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.customers = this.authService.getCustomers();
  }

  addCustomer() {
    const newCustomer = { id: Date.now(), name: 'New Customer' };
    this.authService.addCustomer(newCustomer);
    this.customers = this.authService.getCustomers();
  }

  deleteCustomer(id: number) {
    this.authService.deleteCustomer(id);
    this.customers = this.authService.getCustomers();
  }

  editCustomer(customer: any) {
    this.selectedCustomer = { ...customer }; // Create a copy to edit
  }

  saveEditedCustomer() {
    if (this.selectedCustomer) {
      this.authService.updateCustomer(this.selectedCustomer);
      this.customers = this.authService.getCustomers();
      this.selectedCustomer = null; // Clear the selection after saving
    }
  }

  cancelEdit() {
    this.selectedCustomer = null;
  }
}
