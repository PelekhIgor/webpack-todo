import moment from 'moment';
export default class TodoListView {
  #container;



  #CLASSES = {
    todoComplete: 'todo-complete',
    itemActive: 'item-active',
    showEdit: 'show-edit',
    hideCompleteBut:'hide-element',
    close: 'close',
    complete: 'complete_btn',
    todoList: 'todos_container',
  }

  constructor(container) {
    this.#container = container;

  }

  renderTodos(todos) {

    this.#container.innerHTML = todos.map((t) => this.createTodoEl(t)).join("");
  }

  createTodoEl(todo) {
    return `
    <div id="${todo.id}" class="item ${todo.isComplete ? this.#CLASSES.todoComplete : ''}">
      <div class="item_content">
        <div>
          <div>${todo.title}</div>
          <div>${todo.body}</div>
        </div>  
      <div>${this.createDate(todo.createDate)}</div>
    </div>
        <div class="item_action">
           <div class="close">x</div>
           <button class="complete_btn ${todo.isComplete ? this.#CLASSES.hideCompleteBut : ''}">Complete</button>
        </div>
    </div>
      `;

  }
  createDate(date){
    const newDate = moment(date).format('DD-MM-YYYY')
    return newDate
  }




}
