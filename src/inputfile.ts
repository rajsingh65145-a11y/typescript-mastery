const inputfield = document.getElementById("username") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
    console.log(inputfield.value);
    const name=inputfield.value;
    if(name.trim()===""){
        alert("Please enter a name");
    }else{
        console.log(name);
    }
});