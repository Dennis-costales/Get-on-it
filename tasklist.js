// Variables
const inputTodo = document.querySelector('#input-todo');
const addBtn = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-container');
const removeTodo = document.querySelector('.delete-checkbox');
const checkRemove = document.querySelector('.checklist');

// Load all event listener
loadEventListener();

// Load all event listener
function loadEventListener() {

  // Add todo event
  addBtn.addEventListener('click', addInput);
  // Remove todo event
  todoList.addEventListener('click', deleteTodo);
  // checkbox event
  // removeTodo.addEventListener('click', deleteTodo);

}


// Add Todo
function addInput(e) {

  if(inputTodo.value === '') {
    alert('Please add todo');
  }

  // Create element div
  const div = document.createElement('div');
  // Class name
  div.classList.add('todo-collection');
  // div container
  const divContainer = document.createElement('div');
  // class name
  divContainer.classList.add('todo-list-container');
  // add divCOntainer to div
  div.appendChild(divContainer);

  console.log(div);

  // Create li
  const li = document.createElement('li');
  // add class name
  li.classList.add('todo-list-index');
  // get the value
  // li.appendChild(document.createTextNode(inputTodo.value));
  // add li to divContainer
  divContainer.appendChild(li);

  // Add span for text input
  const textSpan = document.createElement('span');
  // class name
  textSpan.className = 'todo';
  // add text content of inputTodo to textSpan
  textSpan.appendChild(document.createTextNode(inputTodo.value));
  // add textSpan to divCOntainer
  divContainer.appendChild(textSpan);

  // Create input checkbox
  const checkBox = document.createElement('img');
  // class name
  checkBox.classList.add('delete-checkbox', 'checklist');
  // Add event 
  // checkBox.addEventListener('transitionend', function(){
    
  //   if(checkBox.classList[0] === 'checklist') {
  //     div.remove();
  //   }
  // });
  // set attributes
  checkBox.setAttribute('src', 'https://img.icons8.com/office/40/000000/unchecked-checkbox.png');
  // add inpoutCheck to divContainer
  divContainer.appendChild(checkBox);
  console.log(checkBox);
  // Create div label container for routine
  const divRoutine = document.createElement('div');
  // class name
  divRoutine.className = 'select-routine-priority';
  // add divLabel to div
  div.appendChild(divRoutine);
  // label routine
  const labelRoutine = document.createElement('label');
  // label attr
  labelRoutine.setAttribute('for', 'routine');
  // class name
  labelRoutine.className = 'label';
  // label text
  labelRoutine.textContent = 'Routine'
  // add label to divLabel
  divRoutine.appendChild(labelRoutine);

  // select for routine
  const selectRoutine = document.createElement('select');
  // select name
  selectRoutine.name = 'routine';
  // Class name
  selectRoutine.className = 'routine-priority-list';
  // add options
  selectRoutine.innerHTML = '<option class="routine-list">Daily</option><option class="routine-list">Weekly</option><option class="routine-list">Monthly</option>';
  // add select to divLabel
  divRoutine.appendChild(selectRoutine);


  // Create div for priority
  const divPrio = document.createElement('div');
  // class name
  divPrio.className = 'select-routine-priority';
  // add divLabel to div
  div.appendChild(divPrio);
  // label routine
  const labelPrio = document.createElement('label');
  // label attr
  labelPrio.setAttribute('for', 'priority');
  // class name
  labelPrio.className = 'label';
  // label text
  labelPrio.textContent = 'Priority'
  // add label to divLabel
  divPrio.appendChild(labelPrio);

  // select for priority
  const selectPrio = document.createElement('select');
  // select name
  selectPrio.name = 'priority';
  // class name
  selectPrio.className = 'routine-priority-list';
  // add options
  selectPrio.innerHTML = '<option class="priority-list">Normal</option><option class="priority-list">Medium</option><option class="priority-list">High</option>';
  // add select to divLabel
  divPrio.appendChild(selectPrio);

  // Create select category
  const categories = document.createElement('div');
  // class name
  categories.className = 'select-category';
  // add categories to div
  div.appendChild(categories);
  // create select
  const selectCategories = document.createElement('select');
  // add name
  selectCategories.name = 'categories';
  // class name
  selectCategories.className = 'categories';
  // add html options
  selectCategories.innerHTML = '<option class="categories">Grocery</option><option class="categories">Home</option><option class="categories">School</option><option class="categories">Work</option><option class="categories">Occasion</option><option class="categories">Fun</option>';
  // add to categories
  categories.appendChild(selectCategories);

  // Create reminder div
  const reminderDiv = document.createElement('div');
  // class name
  reminderDiv.className = 'time-reminder';
  // time div
  const reminderTime = document.createElement('div');
  // class name
  reminderTime.className = 'time';
  // text
  reminderTime.textContent = '11 am';
  // reminder img
  const reminderImg = document.createElement('img');
  // class name
  reminderImg.className = 'reminder-img';
  // add attr
  reminderImg.setAttribute('src', 'https://img.icons8.com/material-sharp/50/000000/alarm.png');
  // add to reminder div
  reminderDiv.appendChild(reminderTime);
  // add to reminder time
  reminderDiv.appendChild(reminderImg);
  // add to div
  div.appendChild(reminderDiv);

  // Create time duration
  const durationDiv = document.createElement('div');
  // class name
  durationDiv.className = 'duration';
  // add to div
  div.appendChild(durationDiv);
  // duration time span
  const durationTime = document.createElement('span');
  // class name 
  durationTime.className = 'duration-time';
  // add text
  durationTime.textContent = '60mn';
  // add to durationDiv
  durationDiv.appendChild(durationTime);

  // Create Edit button div
  const editContainer = document.createElement('div');
  // class name
  editContainer.className = 'edit-container';
  // add editContainer to div
  div.appendChild(editContainer);
  // edit button
  const editBtn = document.createElement('button');
  // editBtn id
  editBtn.id = 'edit-button';
  // edit button text
  editBtn.textContent = 'Edit';
  // add editBtn to editContainer
  editContainer.appendChild(editBtn);


  // Add todo list to ul
  todoList.appendChild(div);

  // Store in Local Storage
  storeTaskInLocalStorage(inputTodo.value);

  // Clear input
  inputTodo.value = '';

  // console.log(div);


  e.preventDefault();
}

// Add todo to local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete todo

function deleteTodo(e) {

  const deleteTodo = e.target;
  if(deleteTodo.classList[0] === 'delete-checkbox') {
  
    const removeTodo = deleteTodo.parentElement.parentElement;
    removeTodo.classList.add('remove');
    // removeTodo.addEventListener('transitionend', function(){
    //   removeTodo.style.display = 'none';
    //   removeTodo.remove();
    //   console.log(removeTodo);
    // });

    deleteTodo.parentElement.parentElement.remove();
    // Remove from LS
    removeTasksFromLocalStorage(removeTodo);
    
  }
  e.preventDefault();
}

// Remove task from LS
function removeTasksFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}
