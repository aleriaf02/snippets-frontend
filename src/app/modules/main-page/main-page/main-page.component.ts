import { Component, OnInit } from '@angular/core';
import { SnippetsService } from '../../../core/services/snippets/snippets.service';
import { Observable } from 'rxjs';
import { Snippet } from '../../../shared/models/snippet/snippet.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  response$!: Observable<Snippet[]>;

  constructor(private snippetService: SnippetsService) {}

  ngOnInit(): void {
    this.setProperties();
  }

  private setProperties() {
    this.response$ = this.snippetService.getSnippets();
  }
}
