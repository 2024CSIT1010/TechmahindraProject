import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { ServiceRecord, WorkItem } from '../../models/model';

@Component({
  selector: 'scheduled-vehicle',
  templateUrl: './scheduled-vehicle.component.html',
  styleUrls: ['./scheduled-vehicle.component.css']
})
export class ScheduledVehicleComponent implements OnInit {

  scheduledVehicles: ServiceRecord[] = [];
  workItems: WorkItem[] = [];
  selectedServiceRecord: ServiceRecord | null = null;
  selectedWorkItem: WorkItem | null = null;
  quantity: number = 1;
  displayedColumns: string[] = ['id', 'model', 'licensePlate', 'serviceAdvisor', 'actions'];
  displayedItemColumns: string[] = ['workItemName', 'quantity', 'cost', 'actions'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getScheduledVehicles();
    this.loadWorkItems();
  }

  findId(): number {
    const user_info: string = localStorage.getItem('userInfo') ?? '{}';
    const id = JSON.parse(user_info).id;
    return id;
  }

  getScheduledVehicles(): void {
    this.apiService.getScheduledServicesForAdvisor(this.findId()).subscribe(
      (data: ServiceRecord[]) => {
        this.scheduledVehicles = data;
      },
      error => {
        console.error('Error fetching scheduled vehicles', error);
      }
    );
  }

  loadWorkItems(): void {
    this.apiService.getWorkItems().subscribe(
      (items: WorkItem[]) => {
        this.workItems = items;
      },
      error => {
        console.error('Error fetching work items', error);
      }
    );
  }

  selectServiceRecord(record: ServiceRecord): void {
    console.log('Selected Service Record:', record);
    if (record.id) {
      this.selectedServiceRecord = record;
    } else {
      console.error('Selected Service Record does not have an ID:', record);
    }
  }

  viewServiceRecord(vehicle: { id: number }): void {
    if (vehicle.id) {
      this.apiService.getServiceRecordForAdvisor(vehicle.id).subscribe(
        (record: ServiceRecord) => {
          this.selectedServiceRecord = record;
        },
        error => {
          console.error('Error fetching service record', error);
        }
      );
    } else {
      console.error('Invalid vehicle ID');
    }
  }

  removeItem(item: any): void {
    if (this.selectedServiceRecord) {
      this.selectedServiceRecord.serviceItems = this.selectedServiceRecord.serviceItems.filter(i => i !== item);
    }
  }

  addBillOfMaterial(): void {
    if (this.selectedServiceRecord && this.selectedWorkItem && this.quantity > 0) {
      console.log('Selected Service Record:', this.selectedServiceRecord);
      console.log('Selected Work Item:', this.selectedWorkItem);
      console.log('Quantity:', this.quantity);
      
      const serviceRecordId = this.selectedServiceRecord.id;
      const workItemId = this.selectedWorkItem.id;
      
      // Create a new item to add to the serviceItems array
      const newItem = {
        workItem: this.selectedWorkItem,
        quantity: this.quantity
      };
  
      // Update the UI immediately
      if (this.selectedServiceRecord) {
        // Update the UI with the new item
        this.selectedServiceRecord.serviceItems = [
          ...(this.selectedServiceRecord.serviceItems || []),
          newItem
        ];
      }
  
      // Call the API to add the item to the backend
      this.apiService.addServiceItem(serviceRecordId, workItemId, this.quantity).subscribe(
        () => {
          // Refresh the selected record to ensure consistency with the backend
          this.viewServiceRecord({ id: serviceRecordId }); 
        },
        error => {
          console.error('Error adding service item', error);
        }
      );
    } else {
      console.error('Required data is missing: selectedServiceRecord, selectedWorkItem, or quantity.');
    }
  }
  completeServiceRecord(): void {
    if (this.selectedServiceRecord) {
      this.apiService.updateVehicleStatus(this.selectedServiceRecord.id, 'COMPLETED').subscribe(
        () => {
          // Optionally: Handle UI updates or notify the user
          if (this.selectedServiceRecord) {
            this.selectedServiceRecord.serviceAdvisor = {
              ...this.selectedServiceRecord.serviceAdvisor,
              id: this.selectedServiceRecord.serviceAdvisor?.id ?? 0 // Ensure a valid ID is set
            };
          }
        },
        error => {
          console.error('Error updating vehicle status', error);
        }
      );
    } else {
      console.error('No service record selected for completion.');
    }
  }
}