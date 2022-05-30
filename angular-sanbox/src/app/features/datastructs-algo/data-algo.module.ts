import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BigOComponent } from './big-o/big-o.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BigOComponent],
  providers: [],
  exports: [BigOComponent],
})
export class DataAlgoModule {}
