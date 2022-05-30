import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigOComponent } from './features/datastructs-algo/big-o/big-o.component';

const routes: Routes = [{ path: 'big-o', component: BigOComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
