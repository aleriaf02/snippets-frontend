import { Component, Input, OnInit } from '@angular/core';
import { File } from '../../models/file/file.model';
import { Snippet } from '../../models/snippet/snippet.model';
import { ClipboardService } from 'ngx-clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { SnippetsService } from '../../../core/services/snippets/snippets.service';

@Component({
  selector: 'app-snippet-code',
  templateUrl: './snippet-code.component.html',
  styleUrls: ['./snippet-code.component.scss'],
})
export class SnippetCodeComponent implements OnInit {
  @Input() snippets: any;
  @Input() customHeight: string = "'11rem'";
  files: File[] = [];
  selectedSnippet: number = 0;
  selectedItem: number = 0;
  content = '';
  count = 0;
  badges: string[] = [];

  constructor(
    private snippetService: SnippetsService,
    private clipboardApi: ClipboardService,
    private toastService: HotToastService
  ) {}

  private static removeAllActiveTabs(snippet: Snippet) {
    snippet.files.forEach((file) => (file.activeTab = false));
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.snippets.forEach(
      (snippet: { files: { activeTab: boolean }[] }) =>
        (snippet.files[0].activeTab = true)
    );
  }

  setSelected(snippet: Snippet, file: File) {
    SnippetCodeComponent.removeAllActiveTabs(snippet);
    file.activeTab = true;
  }

  copyText(content: string) {
    this.clipboardApi.copyFromContent(content);
    this.toastService.success('Copied!');
  }

  // Add one to count value
  addCount(snippet: Snippet) {
    snippet.upvotes = ++snippet.upvotes;
    this.calculateSnippetCount(snippet);
  }

  // Reduce one to count value
  subtractCount(snippet: Snippet) {
    snippet.downvotes = --snippet.downvotes;
    this.calculateSnippetCount(snippet);
  }

  // Update new snippet count value
  calculateSnippetCount(snippet: Snippet) {
    let response$ = this.snippetService.calculateSnippetCount(snippet);
    response$.subscribe((value) => {
      snippet = value[0];
    });
    this.toastService.success('Score registered!');
  }
}
