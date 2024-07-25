import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent,  children: [
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'service-reps', component: ServiceRepsComponent },
    { path: 'work-items', component: WorkItemsComponent },
    { path: 'change-password', component: ChangePasswordComponent }
  ]},
  { path: 'user', component: UserComponent, children: [
    { path: 'change-password', component: ChangePasswordComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
