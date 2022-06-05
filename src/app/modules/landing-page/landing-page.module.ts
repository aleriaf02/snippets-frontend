import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, CoreModule, RouterModule, SharedModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
