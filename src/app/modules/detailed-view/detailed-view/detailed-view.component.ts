import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from '../../../shared/models/snippet/snippet.model';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../../shared/models/comment/comment.model';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit {
  response$!: Observable<Snippet[]>;
  selectedId: string = '';
  tempComment = new Comment(
    'mention',
    'content',
    new Comment('mention', 'content')
  );
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.response$ = this.route.snapshot.data['snippet'];
  }
}
