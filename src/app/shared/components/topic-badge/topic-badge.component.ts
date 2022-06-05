import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../models/topic/topic.model';

@Component({
  selector: 'app-topic-badge',
  templateUrl: './topic-badge.component.html',
  styleUrls: ['./topic-badge.component.scss'],
})
export class TopicBadgeComponent implements OnInit {
  @Input() badges: Topic[] = [];
  constructor() {}
  ngOnInit(): void {}
}
