import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PublicationAreaComponent } from './components/publication-area/publication-area.component';


@NgModule({
  declarations: [
    HomeComponent,
    PublicationAreaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
