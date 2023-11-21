import ToDoList from "./todolist"

export default class ToDoListDOM {
    constructor() {
        this.table = document.querySelector("table")
        this.toDoList = new ToDoList
        this.initializeEventListeners()
    }
    add(item) {
        let start = performance.now()
        this.toDoList.addTask(item)
        let index = this.toDoList.latestTaskIndex
        let row = this.table.insertRow(index + 1)
        let cell = row.insertCell()
        let task = this.toDoList.tasksList[index]
        for (let data in task) {
            cell = row.insertCell()
            cell.textContent = task[data]
        }
        this.sortTable()
        console.log(performance.now() - start)
    }
    sortTable() {
        let rows = [...this.table.rows].slice(1)
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1
        });
    }


    initializeEventListeners() {
        document.querySelector("form").addEventListener('submit', (e) => {
            e.preventDefault()
            let item = {
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                dueDate: document.getElementById("date").value,
                priority: document.getElementById("priority").value
            }
            this.add(item)
        })
    }
}