var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');

var day = document.getElementById('day');

function initClock(){
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes();
    var second = date.getSeconds();


    var hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg. 30 / 60
    var minuteDeg = (minute * 6) + (0.1 * second); // every mintue, 6 deg. 6/60
    var secondDeg = second * 6 ; // 360 /60

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';


    setTimeout(initClock, 1000);
};

function initDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var Date1 = day + ":" + month + ":" + year;

    document.getElementById("day").innerText = Date1;
    document.getElementById("day").textContent = Date1;

    setTimeout(initDate, 1000);
};

initClock();
initDate();

const degree = "40deg";
const sec = 700;

document.getElementById("-+").addEventListener("click",()=>{
    document.getElementById("clock").style.transform="rotate3d(1,-1,0,"+degree+")";
    setTimeout(() => {
        document.getElementById("clock").style.removeProperty("transform");
    }, sec);
});

document.getElementById("++").addEventListener("click",()=>{
    document.getElementById("clock").style.transform="rotate3d(1,1,0,"+degree+")";
    setTimeout(() => {
        document.getElementById("clock").style.removeProperty("transform");
    }, sec);
});
document.getElementById("--").addEventListener("click",()=>{
    document.getElementById("clock").style.transform="rotate3d(-1,-1,0,"+degree+")";
    setTimeout(() => {
        document.getElementById("clock").style.removeProperty("transform");
    }, sec);
});
document.getElementById("+-").addEventListener("click",()=>{
    document.getElementById("clock").style.transform="rotate3d(-1,1,0,"+degree+")";
    setTimeout(() => {
        document.getElementById("clock").style.removeProperty("transform");
    }, sec);
});