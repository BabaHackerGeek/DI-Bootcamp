import { FullList } from './model/FullList';
import { ListTemplate } from './templates/ListTemplate';

const fullList = new FullList();
const listTemplate = new ListTemplate('listItems', fullList);

document.getElementById('itemEntryForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('newItem') as HTMLInputElement;
  if (input.value.trim()) {
    fullList.addItem(input.value);
    listTemplate.renderList();
    input.value = '';
  }
});

document.getElementById('clearItemsButton')?.addEventListener('click', () => {
  fullList.clearList();
  listTemplate.renderList();
});

window.addEventListener('DOMContentLoaded', () => {
  listTemplate.renderList();
});
