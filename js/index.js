let input = prompt("Adınızı giriniz: ")

let myName = document.getElementById('myName')

myName.innerHTML = input  

myName.addEventListener("click", domClick)

function domClick(){
    this.style.color = "black"
}

function timeAndDay() {
    var time = document.getElementById("myClock");
    

    var date1 = new Date();

    var hour = date1.getHours();
    var minute = date1.getMinutes();
    var second = date1.getSeconds();

    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var day = days[date1.getDay()];

    time.innerHTML = hour + ":" + minute + ":" + second + " " + day;
}


window.onload = function() {
    timeAndDay();
    
    setInterval(timeAndDay, 1000);
};

