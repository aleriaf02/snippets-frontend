export class File {
  name: string;
  content: string;
  activeTab: boolean;
  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
    this.activeTab = false;
  }
}
