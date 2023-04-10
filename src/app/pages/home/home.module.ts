import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PublicationAreaComponent } from './components/publication-area/publication-area.component';
import { PublicationCardComponent } from './components/publication-card/publication-card.component';
import { PublicationOptionsComponent } from './components/publication-options/publication-options.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    PublicationAreaComponent,
    PublicationCardComponent,
    PublicationOptionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
  ]
})
export class HomeModule { }
