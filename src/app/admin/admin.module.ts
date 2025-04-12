import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AncComponent } from './components/anc/anc.component';
import { HbncComponent } from './components/hbnc/hbnc.component';
import { AddAncComponent } from './components/anc/add-anc/add-anc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHbncComponent } from './components/anc/add-hbnc/add-hbnc.component';
import { ViewAncComponent } from './components/anc/view-anc/view-anc.component';
import { AddVaccinationComponent } from './components/anc/add-vaccination/add-vaccination.component';

@NgModule({
  declarations: [
    AncComponent,
    HbncComponent,
    AddAncComponent,
    AddHbncComponent,
    ViewAncComponent,
    AddVaccinationComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class AdminModule {}
