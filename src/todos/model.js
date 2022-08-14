import Http from "../shared/http";

export default class TodoModel {
  #http = null;
  #todos = null;
  constructor() {
    this.#http = new Http();
    this.getAllTodos();
    // this.editTodo();
    // this.deleteTodo();
    this.createTodo();
  }

  async getAllTodos() {

  return this.#todos =  await this.#http.get();

  }
  // async editTodo() {
  //   return  await this.#http.update();
  //
  // }
  // async deleteTodo() {
  //   return  await this.#http.delete(this.#todos.id);
  //
  // }
  async createTodo(todo) {
    return  await this.#http.create(...todo);

  }

}
