"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputfield = document.getElementById("username");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log(inputfield.value);
    const name = inputfield.value;
    if (name.trim() === "") {
        alert("Please enter a name");
    }
    else {
        console.log(name);
    }
});
