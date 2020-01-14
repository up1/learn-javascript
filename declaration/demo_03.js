"use strict";

function helloError() {
    console.log(result);
}

function printNumber() {
    console.log(result);
    for(var i=0; i<5; i++) {
        var result = `${result}, ${i}`;
    }
    console.log(result);
    console.log(i);
}

printNumber();
helloError();