import ToDoList from "./todolist"

export default class ToDoListDOM {
    static counter = 0
    static get options() {
        return { year: 'numeric', month: 'long', day: 'numeric' }
    }
    constructor() {
        this.table = document.querySelector("table")
        this.initializeEventListeners()
    }
    add(item) {
        let row = this.table.insertRow()
        let cell = row.insertCell()
        cell.textContent = ++ToDoListDOM.counter
        item.dueDate = item.dueDate.toLocaleDateString('en-us', ToDoListDOM.options)
        for (let data in item) {
            cell = row.insertCell()
            cell.textContent = item[data]
        }
    }

    initializeEventListeners() {
        document.querySelector("form").addEventListener('submit', (e) => {
            e.preventDefault()
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const date = new Date(document.getElementById("date").value)
            const priority = document.getElementById("priority").value;
            const item = new ToDoList(title,description,date,priority)
            this.add(item)
        })
    }
}