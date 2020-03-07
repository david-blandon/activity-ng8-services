export class Todo {
  public title: string;
  public description: string;
  public hide: boolean;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
