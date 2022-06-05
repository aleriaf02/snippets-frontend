import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CoreModule } from 'src/app/core/core.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    ClipboardModule,
    RouterModule,
    SharedModule,
  ],
  exports: [MainPageComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
})
export class MainPageModule {}
