import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ListPumpsComponent} from '../areas/lead-test/lib/components/list-pumps/list-pumps.component'
const routes: Routes = [
 
  {path:'list',component:ListPumpsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
