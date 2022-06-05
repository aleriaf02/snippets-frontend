import { Snippet } from '../snippet/snippet.model';
import { ResponseWrapper } from './response-wrapper.model';

describe('ResponseWrapper', () => {
  it('should create an instance', () => {
    expect(new ResponseWrapper(0,0,0, [])).toBeTruthy();
  });
});
