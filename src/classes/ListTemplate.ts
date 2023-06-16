import { HasFormatter } from "../interfaces/HasFormatter.js"
export class ListTemplate {
  constructor(private container: HTMLUListElement) { }
  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    h4.innerText = heading;
    // li.append(h4);
    p.innerText = item.format();
    li.append(h4, p)

    if (pos === 'start') {
      this.container.prepend(li)
    } else {
      this.container.append(li)
    }

  }

}