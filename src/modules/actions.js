import populate from './injectHtml';

const save = (taskList) => localStorage.setItem('taskListArray', JSON.stringify(taskList));
const getList = () => {
  if (JSON.parse(localStorage.getItem('taskListArray')) === null) {
    return [];
  }
  return JSON.parse(localStorage.getItem('taskListArray'));
};

const sort = () => {
  const arrayT = getList();
  const list = document.querySelectorAll('li');
  const taskLabel = document.querySelectorAll('label');
  const taskInput = document.querySelectorAll('.replace-task');
  const taskCheck = document.querySelectorAll('.list-check');
  arrayT.forEach((element, index) => {
    arrayT[index].index = index + 1;
    list[index].id = `list-${index + 1}`;
    taskLabel[index].id = `taskid${index + 1}`;
    taskInput[index].id = `taskelm-${index + 1}`;
    taskCheck[index].id = `${index + 1}`;
    save(arrayT);
  });
};

const addTaskArray = (taskInput) => {
  const taskList = getList();
  if (taskInput) {
    taskList.push({ description: taskInput, completed: false, index: taskList.length + 1 });
    populate(taskList[taskList.length - 1]);
    save(taskList);
    document.getElementById('task-input').value = '';
  }
  sort();
};

const removeTaskArray = (element) => {
  if (element.classList.contains('list-container')) {
    const taskListArray = getList();
    taskListArray.forEach((task, index) => {
      if (index + 1 === parseInt(element.id[element.id.length - 1], 10)) {
        taskListArray.splice(index, 1);
        save(taskListArray);
        sort();
      }
    });
    element.remove();
  }
};

const editTask = (elem) => {
  let array = getList();
  const list = document.querySelectorAll('.replace-task');
  array.forEach((element, index) => {
    array[index].description = list[index].value;
    save(array);
    if (array[index].description === '') {
      removeTaskArray(elem.parentElement);
      array = getList();
    }
  });
};

const delAppear = (element) => {
  const reset = element;
  reset.children[0].style.backgroundColor = 'beige';
  reset.parentElement.style.backgroundColor = 'beige';
  reset.style.backgroundColor = 'beige';
  reset.children[1].children[0].textContent = 'delete';
};

const deselect = () => {
  document.querySelectorAll('label').forEach((child1) => {
    const toggle = child1;
    toggle.style.backgroundColor = 'white';
    toggle.children[0].style.backgroundColor = 'white';
    toggle.parentElement.style.backgroundColor = 'white';
    toggle.children[1].children[0].textContent = 'more_vert';
  });
};

const add = (num1, num2) => num1 + num2;

const domsuit = () => {
  const doc = document.getElementById('task-input').value;
  return doc;
};

export {
  addTaskArray, removeTaskArray, save, getList, sort, editTask, delAppear, deselect, add, domsuit,
};
