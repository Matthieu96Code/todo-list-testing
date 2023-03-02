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

});
