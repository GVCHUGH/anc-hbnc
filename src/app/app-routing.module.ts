import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncComponent } from './admin/components/anc/anc.component';
import { HbncComponent } from './admin/components/hbnc/hbnc.component';

const routes: Routes = [
  { path: '', redirectTo: '/anc', pathMatch: 'full' },
  { path: 'anc', component: AncComponent },
  { path: 'hbnc', component: HbncComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
