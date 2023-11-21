export default class ToDoList {
    static get options() {
        return {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
    }
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = (new Date(dueDate)).toLocaleDateString('en-us',ToDoList.options)
        this.priority = +(priority)
    }
}
