import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [],
  imports: [CommonModule, TimelineModule, CardModule, ButtonModule],
  exports: [TimelineModule, CardModule, ButtonModule],
})
export class PrimengModule {}
