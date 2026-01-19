var input=document.getElementById("calculation")
function appendValue(value){
    input.value +=value
}
function remove(){
    input.value=""
}
function  calculate(){
    input.value=eval(input.value)
}
 
// 
// function sendMessage(){
// var text=document.getElementById("message-container")
// var userValue=document.createElement('p')
// userValue.setAttribute("class",'user-message')
// var inputValue=document.getElementById("message").value
// var value=document.createTextNode(inputValue)
// userValue.appendChild(value)

// text.appendChild(userValue)

// document.getElementById("chatApp").value=""
// }


function sendMessage(){
    var div=document.getElementById("message-continer")
    var messagePara=document.createElement("p");
    messagePara.setAttribute("class","user-text")
    var input=document.getElementById("message").value
    var text=document.createTextNode(input)
    messagePara.appendChild(text)
    div.appendChild(messagePara)
    document.getElementById("message").value=""

}






