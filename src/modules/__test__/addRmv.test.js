/**
 * @jest-environment jsdom
 */

import { addTaskArray, editTask, getList, removeTaskArray} from '../actions';
import { checkedTask, clearAllChecked } from '../interact';

describe('action', () => {
  document.body.innerHTML = `<section id="task-section">
      <form class="pm-font icon-set" id="task-form" action="">
        <input value="learn code" class="pm-border" type="text" name="task" id="task-input" placeholder="Add to your list...">
          <a class="action-icon" id="add-btn" href="#">
            <span class="material-symbols-outlined">
                subdirectory_arrow_left
            </span>
          </a>
      </form>
      <ul class="pm-font" id="task-list">
    
      </ul>
    </section>`;
  
  test('if a node list is added and show 1 element of li tag', () => {
    addTaskArray('learn code');
    expect(document.querySelectorAll('li')).toHaveLength(1);
  });

  test('if the store array is updated', () => {
    expect(getList()).toHaveLength(1);
  });

  test('if a node list is added and show 2 element of li tag', () => {
    addTaskArray('update github profil');
    expect(document.querySelectorAll('li')).toHaveLength(2);
  });

  test('if the store array is updated to 2 element', () => {
    expect(getList()).toHaveLength(2);
  });

  test('if a node list is removed and show 1 element of li tag', () => {
    const list1 = document.getElementById('list-1');
    removeTaskArray(list1);
    expect(document.querySelectorAll('li')).toHaveLength(1);
  });

  test('if the store array became 1 element', () => {
    expect(getList()).toHaveLength(1);
  });

  test('if a node list is added and show 2 element of li tag', () => {
    addTaskArray('finish testing project');
    expect(document.querySelectorAll('li')).toHaveLength(2);
  });

  test('if the store array is updated', () => {
    expect(getList()).toHaveLength(2);
  });

  test('if we edit task', () => {
    const editTaskLabel = document.getElementById('taskid1')
    const newTaskValue = document.querySelectorAll('.replace-task')
    newTaskValue[0].value = 'complete week tasks'
    editTask(editTaskLabel)
    const myarray = getList()
    
    expect(myarray[0].description).toBe('complete week tasks');
  });
  
  test('if we checked a checkbox', () => {
    const firstCheck = document.querySelectorAll('.list-check');
    firstCheck[0].checked = true
    checkedTask(firstCheck[0])

    const myarray = getList()
    expect(myarray[0].completed).toBeTruthy();
  });

  test('if we checked a checkbox', () => {
    const firstCheck = document.querySelectorAll('.list-check');
    firstCheck[1].checked = true
    checkedTask(firstCheck[1])

    const myarray = getList()
    expect(myarray[1].completed).toBeTruthy();
  });

  test('if we clear all the task', () => {
 
    clearAllChecked()

    const myarray = getList()
    expect(myarray.length).toBe(0);
  });

});
