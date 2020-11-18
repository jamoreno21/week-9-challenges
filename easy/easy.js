class person{
    constructor(name, running, swimming){
        this.name = name;
        this.run = running;
        this.swim = swimming;
    }
    todayWorkout(){
        console.log(`${this.name} has selected to do some ${this.run} today. He should reconsider!`)
    }
    todayExercise(){
        console.log(`${this.name} has selected to do some ${this.swim} today.`)
    }
}

var c1 = new person (`John`, `running`, `swimming`);

c1.todayWorkout();
c1.todayExercise();