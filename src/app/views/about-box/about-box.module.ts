import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutBoxComponent } from './components/about-box.component'
import { AboutBoxRoutingModule } from './about-box-routing.module'

@NgModule({
  declarations: [AboutBoxComponent],
  imports: [
    CommonModule,
    AboutBoxRoutingModule
  ]
})
export class AboutBoxModule { }
