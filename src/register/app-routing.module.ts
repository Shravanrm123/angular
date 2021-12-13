import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
When your Routes look like in the code above, we will add links in the LoginComponent and RegisterComponent. Let’s start from the register.component.html file, where we are going to send user to the login form if he or she already has the account.

      <div class="flex items-center justify-between mt-4">
        <p class="inline-block align-baseline text-sm text-blue-500">Already have an account? 
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" [routerLink]="['/']">
            Sign in
          </a>
        </p>
      </div>