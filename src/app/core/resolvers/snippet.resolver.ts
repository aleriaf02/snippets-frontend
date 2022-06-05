import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SnippetsService } from '../services/snippets/snippets.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnippetResolver implements Resolve<Observable<any>> {
  constructor(private snippetService: SnippetsService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.snippetService.getSnippetById(route.params['id']);
  }
}
