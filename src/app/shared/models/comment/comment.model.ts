export class Comment {
  mentions: string;
  content: string;
  childComment?: Comment;
  constructor(mentions: string, content: string, childComment?: Comment) {
    this.mentions = mentions;
    this.content = content;
    this.childComment = childComment;
  }
}
