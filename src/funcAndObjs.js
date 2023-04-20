/* Class Constructor for kirby?
includes timeout function (?)*/

//Class Timer
class TimerObj {
    //timer object that is counting down {} => where the CSS Lives
    // el is the body in this case
    constructor(el) {
        // this.node creates an empty div
        this.node = document.createElement("div");
        this.node.setAttribute("id", "timer");
        // this adds our newly created div to our body 
        //el.appendChild(this.node);
        this.remainingTime = 10;
        //this.innerHTML = `${this.remainingTime} seconds`;

    }
    // takes a chosen duration(timer mode: 1,5 or 10) and sets remaining time
    SwitchMode(numMins) {
        this.remainingTime = numMins * 5;
        this.countDown();
    }

    //counts down from remaining time until 0 seconds are reached
    countDown() {
        this.remainingTime -= 1
        console.log(this.remainingTime)
        if (this.remainingTime <= 0) {
            breathIn(kirby)
        } else {
            setTimeout(this.countDown.bind(this), 1000)
        }
    }

}



function breathIn(image) {
    this.style.transition = "all 4s";
    this.style.transitionProperty = "width,height";
    this.breathOut()
}

function breathOut(image) {
    this.style.transition = "all 4s";
    this.style.transitionProperty = "width,height";
}
