import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DformComponent } from './components/dform/dform.component';
import { TestfilterComponent } from './components/testfilter/testfilter.component';


export const routes: Routes = [
  {
    path: '',
    component: DformComponent
  },
    {
    path: 'filt',
    component: TestfilterComponent
  },
  {
    path: '**',
    component: DformComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }