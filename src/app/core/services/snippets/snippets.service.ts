import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Snippet } from 'src/app/shared/models/snippet/snippet.model';
import { ResponseWrapper } from 'src/app/shared/models/responseWrapper/response-wrapper.model';
import { catchError, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SnippetsService implements OnInit {
  responseWrapper$!: Observable<ResponseWrapper<Snippet>>;
  readonly url = environment.apiURL + 'snippets/';

  constructor(private http: HttpClient) {
    this.responseWrapper$ = this.http.get<ResponseWrapper<Snippet>>(this.url);
  }

  ngOnInit(): void {}

  // Create
  create(form: FormGroup): Observable<Snippet> {
    return this.http.post<Snippet>(this.url, form);
  }

  // Get
  getSnippets(): Observable<Snippet[]> {
    return this.http
      .get<ResponseWrapper<Snippet>>(`${this.url}`)
      .pipe(map((res) => res.results));
  }

  // Update
  update(id: any, data: any): Observable<Snippet> {
    console.log(data);
    return this.http
      .put<Snippet>(`${this.url}${id}/`, data)
      .pipe(catchError(this.handleError));
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.http
      .delete(`${this.url}${id}/`)
      .pipe(catchError(this.handleError));
  }

  // FindById
  getSnippetById(id: string): Observable<Snippet[]> {
    let obs: Observable<Snippet> = this.http.get<Snippet>(this.url + id);
    return obs
      .pipe(map((snippet) => [snippet]))
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError() {
    return throwError(() => 'Something bad happened; please try again later.');
  }

  calculateSnippetCount(snippet: Snippet) {
    let obs = this.update(snippet.id, snippet);
    return obs
      .pipe(map((snippet) => [snippet]))
      .pipe(catchError(this.handleError));
  }
}
