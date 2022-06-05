import { Topic } from './topic.model';

describe('Topic', () => {
  it('should create an instance', () => {
    expect(new Topic("name", 0)).toBeTruthy();
  });
});
