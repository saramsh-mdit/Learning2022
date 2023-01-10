export interface ITask {
        title?:string,
        date: number,
        isChecked:boolean
}

export class ToDo {
    data:ITask[] = [];

    add(task:ITask) {
        if (!task) return
        this.data.push(task);
    }

    remove(index:number) {
        let newData = this.data.filter((item, indexA) => indexA !== index);
        this.data = newData;
    }

    edit(task:ITask, index:number) {
        if (task && typeof (index) === 'number') {
            let newData = this.data.map((item, indexA) => {
                if (indexA === index) return task;
                else return item;
            });
            this.data = newData;
        }
    }

}

export class Task {
        title?:string;
        date:number = new Date().getUTCDate();
        isChecked:boolean =false;

        constructor(title:string, date?:number) {
            this.title = title;
            if(date)
             {
                this.date = date;
             }
        }
}