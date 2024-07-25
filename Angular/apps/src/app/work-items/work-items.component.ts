import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css']
})
export class WorkItemsComponent implements OnInit {
  workItems: any[] = [];
  selectedWorkItem: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.workItems = this.authService.getWorkItems();
  }

  addWorkItem() {
    const newWorkItem = { id: Date.now(), description: 'New Task', status: 'pending', assignedTo: null };
    this.authService.addWorkItem(newWorkItem);
    this.workItems = this.authService.getWorkItems();
  }

  deleteWorkItem(id: number) {
    this.authService.deleteWorkItem(id);
    this.workItems = this.authService.getWorkItems();
  }

  editWorkItem(workItem: any) {
    this.selectedWorkItem = { ...workItem }; // Create a copy to edit
  }

  saveEditedWorkItem() {
    if (this.selectedWorkItem) {
      this.authService.updateWorkItem(this.selectedWorkItem);
      this.workItems = this.authService.getWorkItems();
      this.selectedWorkItem = null; // Clear the selection after saving
    }
  }

  cancelEdit() {
    this.selectedWorkItem = null;
  }
}
