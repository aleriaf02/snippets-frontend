import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicBadgeComponent } from './components/topic-badge/topic-badge.component';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SnippetCodeComponent } from './components/snippet-code/snippet-code.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { UserCommentComponent } from './components/user-comment/user-comment.component';

@NgModule({
  declarations: [
    TopicBadgeComponent,
    LoadingScreenComponent,
    MainSearchComponent,
    SnippetCodeComponent,
    UserCommentComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    HighlightModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    TopicBadgeComponent,
    LoadingScreenComponent,
    MainSearchComponent,
    SnippetCodeComponent,
    UserCommentComponent,
  ],
})
export class SharedModule {}
