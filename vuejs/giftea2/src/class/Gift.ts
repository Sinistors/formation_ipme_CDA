export class Gift
{
  public id: number;
  public createdAt: string;
  public label : string
  public link: string;
  public type : string;

  constructor(_id: number, _createdAt: string, _label: string, _link: string, _type: string)
  {
    this.id = _id;
    this.createdAt = _createdAt;
    this.label = _label;
    this.link = _link;
    this.type = _type;
  }
}
