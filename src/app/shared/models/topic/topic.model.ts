export class Topic {
    name: string;
    id: number;
    color!: string;
    icon!: string;

  constructor(name:string, id:number){
    this.name = name;
    this.id = id;
  };
}
