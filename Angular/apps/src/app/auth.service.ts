import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'appData';

  constructor() {}
  login(email: string, password: string): boolean {
    const data = this.loadData();
    const user = data.users?.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }
  

  getVehicles() {
    const data = this.loadData();
    return data.vehicles || [];
  }

  addVehicle(vehicle: any) {
    const data = this.loadData();
    data.vehicles.push(vehicle);
    this.saveData(data);
  }

  deleteVehicle(id: any) {
    const data = this.loadData();
    data.vehicles = data.vehicles.filter((vehicle: any) => vehicle.id !== id);
    this.saveData(data);
  }

  updateVehicle(vehicle: any) {
    const data = this.loadData();
    const index = data.vehicles.findIndex((v: any) => v.id === vehicle.id);
    if (index !== -1) {
      data.vehicles[index] = vehicle;
      this.saveData(data);
    }
  }

  getCustomers() {
    const data = this.loadData();
    return data.customers || [];
  }

  addCustomer(customer: any) {
    const data = this.loadData();
    data.customers.push(customer);
    this.saveData(data);
  }

  deleteCustomer(id: any) {
    const data = this.loadData();
    data.customers = data.customers.filter((customer: any) => customer.id !== id);
    this.saveData(data);
  }

  updateCustomer(customer: any) {
    const data = this.loadData();
    const index = data.customers.findIndex((c: any) => c.id === customer.id);
    if (index !== -1) {
      data.customers[index] = customer;
      this.saveData(data);
    }
  }



  getWorkItems() {
    const data = this.loadData();
    return data.workItems || [];
  }

  addWorkItem(workItem: any) {
    const data = this.loadData();
    data.workItems.push(workItem);
    this.saveData(data);
  }

  deleteWorkItem(id: any) {
    const data = this.loadData();
    data.workItems = data.workItems.filter((workItem: any) => workItem.id !== id);
    this.saveData(data);
  }

  updateWorkItem(workItem: any) {
    const data = this.loadData();
    const index = data.workItems.findIndex((wi: any) => wi.id === workItem.id);
    if (index !== -1) {
      data.workItems[index] = workItem;
      this.saveData(data);
    }
  }

  changePassword(currentPassword: string, newPassword: string): boolean {
    const data = this.loadData();
    const user = this.getCurrentUser();
    if (user && user.password === currentPassword) {
      user.password = newPassword;
      data.users = data.users.map((u: any) => u.email === user.email ? user : u);
      this.saveData(data);
      return true;
    }
    return false;
  }

  signup(email: string, password: string): boolean {
    const data = this.loadData();
    if (data.users.some((u: any) => u.email === email)) {
      return false; // User already exists
    }
    const newUser = { email, password, role: 'user' }; // Default role is 'user'
    data.users.push(newUser);
    this.saveData(data);
    return true;
  }

  private loadData() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  private saveData(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
