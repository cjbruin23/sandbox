import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BigOComponent } from './big-o/big-o.component';
import { DataAlgoRoutingModule } from './data-algo-routing.module';

@NgModule({
  imports: [CommonModule, DataAlgoRoutingModule],
  declarations: [BigOComponent],
  providers: [],
  exports: [BigOComponent],
})
export class DataAlgoModule {}
