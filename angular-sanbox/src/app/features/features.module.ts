import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataAlgoModule } from './datastructs-algo/data-algo.module';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [DataAlgoModule, CommonModule, FeaturesRoutingModule],
  declarations: [],
  providers: [],
})
export class FeaturesModule {}
