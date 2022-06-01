import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BigOComponent } from './big-o/big-o.component';
import { DataAlgoRoutingModule } from './data-algo-routing.module';
import { ArraysComponent } from './data-structures/arrays/arrays.component';

@NgModule({
  imports: [CommonModule, DataAlgoRoutingModule],
  declarations: [BigOComponent, ArraysComponent],
  providers: [],
  exports: [BigOComponent],
})
export class DataAlgoModule {}
