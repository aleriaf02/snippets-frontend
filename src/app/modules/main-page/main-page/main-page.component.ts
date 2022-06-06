import { Component, OnInit } from '@angular/core';
import { SnippetsService } from '../../../core/services/snippets/snippets.service';
import { Observable } from 'rxjs';
import { Snippet } from '../../../shared/models/snippet/snippet.model';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  response$!: Observable<Snippet[]>;
  searchParams!: any;

  constructor(private snippetService: SnippetsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const search = params['search']
      const topics = params['topics'].split(',')
      this.searchParams = {search, topics};
    });
    this.setProperties();
  }

  private setProperties() {
    this.response$ = this.snippetService.getSnippets();
    this.response$ = this.snippetService.search(this.searchParams);
  }
}
