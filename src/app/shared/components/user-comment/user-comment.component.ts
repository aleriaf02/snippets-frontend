import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment/comment.model';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
})
export class UserCommentComponent implements OnInit {
  @Input() comment: Comment = new Comment('', '');
  @Input() childStyles: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
