/*
Desc: .....
Author: Malak Khateeb
Date Time: 5/10/2024
Email:malakkhateeb9995@gmail.com
*/
/*
Desc: these functions will alert me when click on
*/
function city(element){
    alert("Loading weather report...");

}


/*
Desc: Function acceptMe will remove cookis from the page when i click on i accept
*/


function acceptMe(element){
    document.getElementById(element).remove();
}

/*
Desc: Function changeMe will convert the temperatures correctly between Fahrenheit and Celsius based on the selected option.
*/

function calcWeather(v, isF2c){
    if(isF2c){
        return (v - 32) / 1.8;
    }
    return (1.8 * v) + 32;
}




var tempOne = document.querySelectorAll(".degreeOne");

function changeTemp(element) {
    for (var i = 0; i < tempOne.length; i++) {
        var tempOneme = parseInt(tempOne[i].innerHTML);
        if (element.value === "F") {
            var calculateOne = (1.8 * tempOneme) + 32;
            
            tempOne[i].innerHTML = Math.round(calculateOne) + "°";
        }
        else {
            var calculateTwo = (tempOneme - 32) / 1.8;
            tempOne[i].innerHTML = Math.round(calculateTwo) + "°";
        }
    }
}












