
import CreateTodo from "./header";
import TodoListView from "./list.js";
import './view.css'
export default class MainViewTodo {
  #todos = []
  #container = null;
  #headerContainer = null;
  #listContainer = null;
  #editContainer = null;
  #listView = null;
  #currentTodoE = null
  #currentTodo = null
  #input = null



  #CLASSES = {
    complete: 'complete_btn',
    todoList: 'list-container',
    close: 'close',
    todoComplete: 'todo-complete',
  }
  constructor(container) {
    this.#container = container;
    this.init();
    this.#listView = new TodoListView(this.#listContainer);
    this.#input = new CreateTodo(this. #headerContainer,{onCreate: this.onCreateTodo})



  }
  init() {

    this.renderView();
    this.initContainers();
    this.addListeners()
  }

  onCreateTodo = (todo)=>{
console.log(todo)

  }


  addListeners(){
    this.#listContainer.addEventListener('click', (el) => {
      this.#currentTodoE = el.target.closest('.item')

      if(this.#currentTodoE){
        this.#currentTodo = this.#todos.find((e) => e.id === this.#currentTodoE.id)

      }


      if (el.target.classList.contains(this.#CLASSES.close)){
        console.log('delete')
        return
      }
      if (el.target.classList.contains(this.#CLASSES.complete)){
        console.log('complete')

        return
      }
      if (!el.target.classList.contains(this.#CLASSES.todoList)){
        console.log('edit')
        return
      }
    })
  }

  renderView() {


    this.#container.innerHTML = `
      <div class="main">
      <div class="header">header</div>
      <div class="body">
        <div class="list-container">list</div>
        <div class="edit-container">Edit</div>
      </div>
    </div>
      `;
  }
  initContainers() {
    this.#headerContainer = this.#container.querySelector(".header");
    this.#listContainer = this.#container.querySelector(".list-container");
    this.#editContainer = this.#container.querySelector(".edit-container");
  }
  renderTodos(todos) {
    this.#listView.renderTodos(todos);


  }


}
