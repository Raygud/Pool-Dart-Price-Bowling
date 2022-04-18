elementList = document.querySelectorAll("Button")
let StopStart = true
let mm = 0
let price = Math.round(mm*1.669)

// for(let i = 0; i < elementList.length; i++){
//     elementList[i].addEventListener("click", function() {
//         console.log(this.className)
//     });
// }

function StartStop(x){

    console.log(StopStart)
if (StopStart = !StopStart){
    console.log("stopped and the price is = " + (Math.round(mm*1.669)) )
    clearInterval(Interval);
    ss = 0
    mm = 0
    hh = 0
    document.getElementById("Button"+x).innerHTML = "Restart"
}
else{
    console.log("started")
    document.getElementById("Button"+x).innerHTML = "Stop"
    Interval = setInterval( function() { Counter(x); }, 500 );
    console.log(this)
}}

function Counter(x){
    mm++
    console.log("Minutes: " + mm)
    document.getElementById("Timer"+x).placeholder = "Minutes: "+mm
    if(Math.round(mm*1.669) >= 25){
    document.getElementById("Price"+x).placeholder = "Price: " + (Math.round(mm*1.669)) + " DKK"
    }
    else{
    document.getElementById("Price"+x).placeholder = "Price: " + (25) + " DKK"
    }
}