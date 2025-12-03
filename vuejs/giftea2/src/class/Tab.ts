export class Tab
{

  private _id: number;
  private _title: string;
  private _cssClass: string;
  private _svg: string;


  constructor(id: number, title: string, cssClass: string, svg : string)
  {
    this._id = id;
    this._title = title;
    this._cssClass = cssClass;
    this._svg = svg;
  }

  get cssClass(): string {
    return this._cssClass
  }

  set cssClass(value: string) {
    this._cssClass = value
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get svg(): string {
    return this._svg;
  }

  set svg(value: string) {
    this._svg = value;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

}

