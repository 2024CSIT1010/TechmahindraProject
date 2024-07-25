import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface ServiceRepresentative {
  serviceRepresentativeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceRepresentativeService {
  private apiUrl =`https://localhost:7274/api/servicerepresentatives`;

  constructor(private http: HttpClient) { }

  getServiceRepresentatives(): Observable<ServiceRepresentative[]> {
    return this.http.get<ServiceRepresentative[]>(this.apiUrl);
  }

  addServiceRepresentative(serviceRepresentative: ServiceRepresentative): Observable<ServiceRepresentative> {
    return this.http.post<ServiceRepresentative>(this.apiUrl, serviceRepresentative);
  }

  updateServiceRepresentative(serviceRepresentative: ServiceRepresentative): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${serviceRepresentative.serviceRepresentativeId}`, serviceRepresentative);
  }

  deleteServiceRepresentative(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
