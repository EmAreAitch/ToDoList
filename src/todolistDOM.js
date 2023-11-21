import ToDoList from "./todolist"

export default class ToDoListDOM {
    static priority = [Number.MAX_SAFE_INTEGER]
    constructor() {
        this.table = document.querySelector("table")
        this.initializeEventListeners()
    }
    add(item) {
        ToDoListDOM.priority.unshift(item.priority)
        ToDoListDOM.priority.sort((a, b) => b - a)
        let index = ToDoListDOM.priority.findIndex(n => n <= item.priority)
        let row = this.table.insertRow(index)
        let cell = row.insertCell()
        for (let data in item) {
            cell = row.insertCell()
            cell.textContent = item[data]
        }
        this.sortTable()
    }
    sortTable() {
        let tempTable = [...this.table.rows].slice(1)
        tempTable.forEach((row, index) => {
            row.cells[0].textContent = index + 1
        });
    }


    initializeEventListeners() {
        document.querySelector("form").addEventListener('submit', (e) => {
            e.preventDefault()
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const date = document.getElementById("date").value
            const priority = document.getElementById("priority").value;
            const item = new ToDoList(title, description, date, priority)
            this.add(item)
        })
    }
}