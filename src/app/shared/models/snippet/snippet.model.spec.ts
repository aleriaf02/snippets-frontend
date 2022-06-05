import { Topic } from '../topic/topic.model';
import { Snippet } from './snippet.model';

describe('Snippet', () => {
  it('should create an instance', () => {
    expect(new Snippet('','','', [])).toBeTruthy();
  });
});
