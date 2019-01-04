import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionBoxComponent } from './components/fashion-box/fashion-box.component';
import { FashionBoxRoutingModule } from './fashion-box-routing.module';
import { PersonDescriptionComponent } from './components/person-description/person-description.component';
import { PersonAvatarComponent } from './components/person-avatar/person-avatar.component';
import { PersonTitleComponent } from './components/person-title/person-title.component';

@NgModule({
  declarations: [FashionBoxComponent, PersonDescriptionComponent, PersonAvatarComponent, PersonTitleComponent],
  imports: [
    CommonModule,
    FashionBoxRoutingModule
  ]
})
export class FashionBoxModule { }
