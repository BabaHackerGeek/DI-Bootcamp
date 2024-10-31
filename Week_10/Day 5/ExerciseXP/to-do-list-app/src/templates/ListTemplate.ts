import { FullList } from '../model/FullList';

export class ListTemplate {
  private ul: HTMLUListElement;

  constructor(listId: string, private list: FullList) {
    this.ul = document.getElementById(listId) as HTMLUListElement;
  }

  renderList() {
    this.ul.innerHTML = '';
    this.list.loadFromStorage();
    this.list.getItems().forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.item;
      this.ul.appendChild(li);
    });
  }
}
