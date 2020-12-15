"use strict"


let element= document.body;

function randomcolorgenerator(){

    const numbers="0123456789abcdef";

    let color="#";

    for (let index = 0; index < 6; index++) {
       const i= Math.round(Math.random()*15);

       color+=numbers[i]
    }

    return color;


}


setInterval(function(){

element.style.background=randomcolorgenerator()


},1000)