import { Topic } from '../topic/topic.model';
import { File } from '../file/file.model';

export class Snippet {
  id: string;
  name: string;
  description: string;
  files: File[] = [];
  topics: Topic[] = [];
  upvotes: number;
  downvotes: number;
  constructor(
    name: string,
    id: string,
    description: string,
    files: File[],
    topics: Topic[],
    upvotes: number,
    downvotes: number
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.files = files;
    this.topics = topics;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }
}
