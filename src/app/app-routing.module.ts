import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncComponent } from './admin/components/anc/anc.component';
import { HbncComponent } from './admin/components/hbnc/hbnc.component';
import { ViewAncComponent } from './admin/components/anc/view-anc/view-anc.component';

const routes: Routes = [
  { path: '', redirectTo: '/anc', pathMatch: 'full' },
  { path: 'anc', component: AncComponent },
  { path: 'hbnc', component: HbncComponent },
  { path: 'view-anc', component: ViewAncComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
