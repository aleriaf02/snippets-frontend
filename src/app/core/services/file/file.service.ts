import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseWrapper } from '../../../shared/models/responseWrapper/response-wrapper.model';
import { Snippet } from '../../../shared/models/snippet/snippet.model';
import { environment } from '../../../../environments/environment';
import { File } from '../../../shared/models/file/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  responseWrapper$!: Observable<ResponseWrapper<Snippet>>;
  readonly url = environment.apiURL + 'files/';
  options: HttpHeaders;

  constructor(private http: HttpClient) {
    this.responseWrapper$ = this.http.get<ResponseWrapper<Snippet>>(this.url);
    const access_token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', String(access_token));
    this.options = headers;
  }

  uploadFile(file: File): Observable<any> {
    const headers = this.options;
    return this.http.post(this.url, file, { headers });
  }

  getFile(): Observable<any> {
    const headers = this.options;
    return this.http.get(this.url, { headers });
  }
}
