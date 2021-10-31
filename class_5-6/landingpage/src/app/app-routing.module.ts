import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadListComponent } from './lead-list/lead-list.component'

const routes: Routes = [
  { path: 'list', component: LeadListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
