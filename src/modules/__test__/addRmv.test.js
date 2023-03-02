/**
 * @jest-environment jsdom
 */

import { addTaskArray, getList, removeTaskArray } from '../actions';

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
});
