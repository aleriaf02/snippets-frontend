import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { DetailedViewModule } from '../detailed-view/detailed-view.module';

@NgModule({
  declarations: [ProfileViewComponent],
  imports: [CommonModule, CoreModule, SharedModule, DetailedViewModule],
})
export class ProfileViewModule {}
