import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [DetailedViewComponent],
  imports: [CommonModule, SharedModule, CoreModule],
  exports: [DetailedViewComponent],
})
export class DetailedViewModule {}
