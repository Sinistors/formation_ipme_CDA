import {People} from "@/class/People.ts";

export class GroupPeople
{
  public id: number;
  public createdAt: string;
  public label : string
  public orderItem: number;
  public color : string;
  public peoples = [] as Array<People>;

  constructor(_id: number, _createdAt: string, _label: string, _orderItem: number, _color: string, _peoples: Array<People>)
  {
    this.id = _id;
    this.createdAt = _createdAt;
    this.label = _label;
    this.orderItem = _orderItem;
    this.color = _color;
    this.peoples = _peoples;
  }
}
