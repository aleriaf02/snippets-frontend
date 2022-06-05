import { TestBed } from '@angular/core/testing';

import { SnippetResolver } from './snippet.resolver';

describe('SnippetResolver', () => {
  let resolver: SnippetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SnippetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
