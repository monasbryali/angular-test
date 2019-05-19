import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import{ListPumpsComponent} from '../components/list-pumps/list-pumps.component';
import{SavePumpsComponent} from '../components/save-pumps/save-pumps.component'
const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"listpump",component:ListPumpsComponent},
  {path:"savepump",component:SavePumpsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
