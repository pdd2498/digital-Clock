const date = new Date();
console.log(date)
const day = searchday();

const displayday = document.querySelector("#day");
displayday.innerHTML = day;
const display = document.querySelector("#displayTime");
const tarik = document.querySelector("#date")
tarik.innerHTML = date.getDate()+':'+date.getMonth()+1+":"+date.getFullYear();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
var s = seconds;
var m = minutes;
var h = hours;
// display.innerHTML = date.getHours()+ ":" + date.getMinutes()+":"+date.getSeconds()+'      ////'+date.getDate()+':'+date.getMonth()+":"+date.getFullYear();
const time =setInterval(clock , 1000);





function clock(){
    s++;
    if(s > 60){
        s = 1
        m++;
        if(m > 60){
            m= 1
            h++;
            if(h > 24){
                h = 1
            }
        }
    }display.innerHTML = h+ ":" + m+":"+s

}

function searchday(){
    if(date.getDay() == 1){
        return "Monday"
    }
    else if(date.getDay() == 2){
        return "Tuesday"
    }
    else if(date.getDay() == 3){
        return "Wednesday"
    }
    else if(date.getDay() == 4){
        return "Thursday"
    }
    else if(date.getDay() == 5){
        return "Friday"
    }
    else if(date.getDay() == 6){
        return "Saturday"
    }
    else if(date.getDay() == 7){
        return "Sunday"
    }
}


