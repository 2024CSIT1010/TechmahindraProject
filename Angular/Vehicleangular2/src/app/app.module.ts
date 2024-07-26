import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CustomersComponent } from './customers/customers.component';
import { ServiceRepsComponent } from './service-reps/service-reps.component';
import { WorkItemsComponent } from './work-items/work-items.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    UserComponent,
    VehiclesComponent,
    CustomersComponent,
    ServiceRepsComponent,
    WorkItemsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // <-- Add this
  ],
  providers: [AuthService, AdminGuard,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
