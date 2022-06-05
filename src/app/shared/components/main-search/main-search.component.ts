import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TopicService} from '../../../core/services/topics/topic.service';
import {Topic} from '../../models/topic/topic.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss'],
})
export class MainSearchComponent implements OnInit {
  topics!: Observable<Topic[]>;
  selectedTopics = [];

  constructor(private topicService: TopicService, private router: Router) {
  }

  ngOnInit() {
    this.setProperties();
  }

  setProperties(): void {
    this.topics = this.topicService.getObsTopics();
  }

  search() {
    this.router.navigate(['/search']);
  }
}
