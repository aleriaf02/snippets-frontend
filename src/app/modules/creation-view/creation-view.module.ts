import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationViewComponent } from './creation-view/creation-view.component';
import { CoreModule } from '../../core/core.module';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreationViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CreationViewComponent],
})
export class CreationViewModule {}
