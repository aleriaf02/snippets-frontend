import {Injectable, OnInit} from '@angular/core';
import {Topic} from 'src/app/shared/models/topic/topic.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {ResponseWrapper} from 'src/app/shared/models/responseWrapper/response-wrapper.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TopicService implements OnInit {
  topics: Topic[] = [];
  responseWrapper$!: Observable<ResponseWrapper<Topic>>;
  readonly url = environment.apiURL + 'topics';

  constructor(private http: HttpClient) {
    this.responseWrapper$ = this.http.get<ResponseWrapper<Topic>>(this.url, {params: {size: 1000}});
  }

  ngOnInit(): void {
  }

  getTopics(): Topic[] {
    this.responseWrapper$.subscribe((elem) => {
      this.topics = elem.results;
    });
    return this.topics;
  }

  getObsResponseTopics(): Observable<ResponseWrapper<Topic>> {
    return this.responseWrapper$;
  }

  getObsTopics(): Observable<Topic[]> {
    return this.responseWrapper$.pipe(map((res) => res.results));
  }

  getObsTopicsByName(name: string, page: number = 0) {
    return this.http.get<ResponseWrapper<Topic>>(this.url, {
      params: {
        search: name,
        page: page,
      }
    }).pipe(map((res) => res.results));
  }
}
