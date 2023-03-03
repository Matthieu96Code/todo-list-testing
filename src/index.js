import './style.css';
import populate from './modules/injectHtml';
import {
  getList, addTaskArray, removeTaskArray, sort, editTask, delAppear, deselect,
} from './modules/actions';
import { checkedTask, clearAllChecked } from './modules/interact';

const firstStart = () => {
  const taskListStore = getList();
  taskListStore.forEach((element) => {
    populate(element);
  });
};

firstStart();

document.getElementById('add-btn').addEventListener('click', () => {
  const inputText = document.getElementById('task-input');
  addTaskArray(inputText.value);
  sort();
});

document.querySelector('body').addEventListener('click', (e) => {
  if (!e.target.classList.contains('replace-task')) {
    deselect();
  }
});

document.querySelector('ul').addEventListener('click', (e) => {
  deselect();
  e.target.parentElement.children[1].addEventListener('click', () => {
    removeTaskArray(e.target.parentElement.parentElement);
    sort();
  });

  if (e.target.classList.contains('replace-task')) {
    delAppear(e.target.parentElement);
    e.target.addEventListener('change', () => {
      editTask(e.target.parentElement);
      sort();
    });
  }
});

document.querySelector('ul').addEventListener('click', (check) => {
  if (check.target.classList.contains('list-check')) {
    check.target.addEventListener('change', () => {
      checkedTask(check.target);
    });
  }
});

document.getElementById('clear-task').addEventListener('click', () => {
  clearAllChecked();
  sort();
});
