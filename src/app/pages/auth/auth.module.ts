import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './subpages/login/login.component';
import { RegisterComponent } from './subpages/register/register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
  ]
})
export class AuthModule { }
