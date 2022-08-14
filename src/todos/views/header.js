export default class CreateTodo{
    #container = null
    todo = null
    titleEl= null
    bodyEl = null
    constructor(container, todo) {
        this.todo = todo
        this.#container = container
        this.init()



    }
    init(){
        this.initialRender()
        this.initInput()
    }
    initialRender(){
        this.#container.innerHTML = (this.createInitialBlock())
        this.initListeners()
    }
    initListeners(){
        document.querySelector('.create_btn')
            .addEventListener('click', this.onTodoCreate)

    }
    initInput(){
        this.titleEl = (document.querySelector('#title'))
        this.bodyEl = document.querySelector('#body')


    }
    onTodoCreate = () =>{
        const title = this.titleEl.value
        const body = this.bodyEl.value

        this.todo.onCreate({title,body})


    }

    createInitialBlock(){

        return `<div>
            <div class="create">
                <input type="text" id="title" >
                <input type="text" id="body" >
                <button class="create_btn">Create Todo</button>
            </div>
        </div>`
    }
}