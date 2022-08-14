import axios from "axios";

export default class Http {
  #API_URL =
    "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos/";
  get() {
    return axios.get(this.#API_URL).then((r) => r.data);
  }

  getSingle(id) {
    return axios.get(this.#API_URL + id).then((r) => r.data);
  }

  update(id,item){ // изменяем тудушку
    return axios.put(this.#API_URL + id, item).then((response) => response.data)
  }

  delete(id){ // удаляем тудушку
    return axios.delete(this.#API_URL + id).then((response) => {
     return response.data
    })
  }

  create(item){  // создаем тудушку
    return axios.post(this.#API_URL, item).then((response) => response.data)
  }
}
