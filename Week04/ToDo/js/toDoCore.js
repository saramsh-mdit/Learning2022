class ToDo {
    data = [];

    add(task) {
        if (!task) return
        this.data.push(task);
    }

    remove(index) {
        let newData = this.data.filter((item, indexA) => indexA !== index);
        this.data = newData;
    }

    edit(task, index) {
        if (task && typeof (index) === 'number') {
            let newData = this.data.map((item, indexA) => {
                if (indexA === index) return task;
                else return item;
            });
            this.data = newData;
        }
    }

}

class Task {
        title;
        date= new Date().getUTCDate();
        isChecked=false;

        constructor(title, date) {
            this.title = title;
            if(date)
             {
                this.date = date;
             }
        }
}