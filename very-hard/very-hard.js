class Person {

    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }


    exercise() {
        console.log(`I like to pick up heavy things and put them down repeatly`);

    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class programmer extends Person {

    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages
        this.busy = true;
    }


    completeNewTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} cannot accept any new task at this moment.`)
        }
        else {
            console.log(`${this.name} would be more than happy to accept this task.`)
        }

    }

    learnLanguages(lang) {
        this.languages.push(lang)
    }
    listLanguage() {
        for (let x = 0; x < this.languages.length; x++)
            console.log(this.languages[x]);
    }
}

var john = new Person(`John`, `Software Engineer Apprentice`, 22)
var c1 = new programmer(`John`, `Apperntive`, 22, [`HTML`, `CSS`, `JavaScript`])

c1.exercise();
c1.offerNewTask();
c1.completeNewTask();
c1.offerNewTask();
c1.acceptNewTask();
c1.offerNewTask();
