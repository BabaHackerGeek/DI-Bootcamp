// src/model/FullList.ts
import { ListItem } from './ListItem';

export class FullList {
  private items: ListItem[] = [];

  addItem(item: string) {
    const newItem = new ListItem(undefined, item);
    this.items.push(newItem);
    this.saveToStorage();
  }

  removeItem(id: string) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveToStorage();
  }

  clearList() {
    this.items = [];
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(this.items));
  }

  loadFromStorage() {
    const storedItems = localStorage.getItem('todoList');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  getItems() {  // Added method
    return this.items;
  }
}
