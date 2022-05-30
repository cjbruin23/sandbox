import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigOComponent } from './big-o/big-o.component';

const routes: Routes = [
  {
    path: 'big-o',
    component: BigOComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataAlgoRoutingModule {}
