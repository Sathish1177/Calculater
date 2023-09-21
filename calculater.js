let displayscreen = document.getElementById("screendisplay");

function Display(num){
    displayscreen.value += num;
}

function calculate(){
    try{
        displayscreen.value = eval( displayscreen.value)
    }
    catch(err){
          alert("invalid")
    }
}
function clearDisplay(){
    displayscreen.value =""
}
function del(){
    displayscreen.value = displayscreen.value.slice(0,-1);
}
