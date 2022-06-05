import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../core/services/file/file.service';
import { Observable } from 'rxjs';
import { Snippet } from '../../../shared/models/snippet/snippet.model';
import { SnippetsService } from '../../../core/services/snippets/snippets.service';
import { Comment } from '../../../shared/models/comment/comment.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  active_status = 1;
  //file: File;
  response$!: Observable<Snippet[]>;
  tempComment = new Comment(
    'mention',
    'content',
    new Comment('mention', 'content')
  );

  constructor(
    private fileService: FileService,
    private snippetService: SnippetsService
  ) {}

  ngOnInit(): void {
    this.setProperties();
  }

  fileEvent(fileInput: Event) {
    /* = (<HTMLInputElement>fileInput.target).files;

    if (file.type == 'image/jpeg' || file.type == 'image/jpeg') {
      this.file = new File(this.lastFile + 1, file.name, file.type);
    }*/
  }

  uploadFile($event: MouseEvent) {
    /* uploadFile($event.target.file);*/
  }

  private setProperties() {
    this.response$ = this.snippetService.getSnippets();
  }
}
