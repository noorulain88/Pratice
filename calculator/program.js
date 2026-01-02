var calculator=document.getElementById("calculation")
function appendValue(value){
    calculator.value += value
}
function clearDisplay(){
    calculator.value =""
}
function calculate(){
    calculator.value=eval(calculator.value)
}
function del(){
    calculator.value=calculator.value.slice(0, -1)
}