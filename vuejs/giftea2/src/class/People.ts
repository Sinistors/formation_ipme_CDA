import {Gift} from "@/class/Gift.ts";

export class People
{
  public id: number;
  public createdAt: string;
  public fullName : string
  public orderItem: number;
  public gifts = [] as Array<Gift>;

  constructor(_id: number, _createdAt: string, _fullName: string, _orderItem: number, _gifts: Array<Gift>)
  {
    this.id = _id;
    this.createdAt = _createdAt;
    this.fullName = _fullName;
    this.orderItem = _orderItem;
    this.gifts = _gifts;
  }
}
