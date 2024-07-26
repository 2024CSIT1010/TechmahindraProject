import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  showAddForm: boolean = false;
  customer: Customer = { firstName: '', lastName: '', email: '', phone: '' };

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  onSubmit(): void {
    if (this.customer.customerId) {
      this.customerService.updateCustomer(this.customer.customerId, this.customer).subscribe(
        () => {
          this.loadCustomers();
          this.resetForm();
          this.showAddForm = false;
        },
        error => {
          console.error('Error updating customer:', error);
        }
      );
    } else {
      this.customerService.createCustomer(this.customer).subscribe(
        () => {
          this.loadCustomers();
          this.resetForm();
          this.showAddForm = false;
        },
        error => {
          console.error('Error creating customer:', error);
        }
      );
    }
  }

  editCustomer(customer: Customer): void {
    this.customer = { ...customer };
    this.showAddForm = true;
  }

  deleteCustomer(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      this.loadCustomers();
    });
  }

  resetForm(): void {
    this.customer = { firstName: '', lastName: '', email: '', phone: '' };
  }
}
