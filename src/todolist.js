export default class ToDoList {
    constructor() {
        this.tasksList = []
        this.latestTaskIndex = -1
    }
    addTask(item) {
        let task = new Task(item)
        let index = this.tasksList.findIndex((item) => item.priority <= task.priority)
        if (index === -1) {
            this.tasksList.push(task)
            this.latestTaskIndex = this.tasksList.length - 1
        } else {
            this.tasksList.splice(index, 0, task)
            this.latestTaskIndex = index
        }
    }
}


class Task {
    constructor(item) {
        this.title = item.title || "-"
        this.description = item.description || "-"
        this.dueDate = Task.formatDate(item.dueDate)
        this.priority = +(item.priority)
    }
    static formatDate(datetime) {
        const monthsArray = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        let [year, month, day, hours, minutes] = datetime.split(/[-T:]/);
        hours = +hours
        let timePeriod = hours < 12 ? "AM" : "PM"
        if (hours > 12) hours -= 12
        if (hours === 0) hours = 12
        month = monthsArray[+month - 1]
        return `${month} ${day}, ${year} at ${hours}:${minutes} ${timePeriod}`

    }
}