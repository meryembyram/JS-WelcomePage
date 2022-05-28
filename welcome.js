let userName = prompt ("Write Your Name:")
let karsilama =  document.querySelector ("#karsilama")
karsilama.innerHTML = `${userName.toUpperCase()}` 
karsilama.innerHTML = `${userName.length>0 ? userName.toUpperCase() : alert ("You don't have user information!" ) }`
function tarihSaat() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayName = date.getDay();
     switch (dayName) {
        case 1:
           dayName = "Monday";
           break;
        case 2:
           dayName = "Tuesday";
           break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;           
     }
     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;     
     var timer = ` ${h} : ${m} : ${s}  - ${dayName} `;
    document.querySelector('#zaman').innerHTML = timer ;
    setInterval(tarihSaat, 1000);
}
tarihSaat(); 