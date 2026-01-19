
    console.log("the wildow herf",window.location.href)
    console.log("the wildow herf",window.location.pathname)
    console.log("the wildow herf",window.location.hostname)

function goTohome(link){
window.location.assign(link)
}

// var openNewWindow = function () {
//   var popup = window.open("monk.html","monk","width=420,height=380,left=200,top=200"
//   );


// }
function popup(){
    var pop=window.open("monk/index.html","monk","height=500,width=400,left=400,top=500")

}
var goForward=function(){
    window.history.forward()
}

var goReverse = function () {
  window.history.back();
};

var relod=function(){
    window.location.reload()
}

function checkForLastName(){
    var lastName=document.getElementById("lastNameField")
    if(lastName.value.length===0){
        alert("please enter your last name")
        lastName.focus()
        lastName.style.background="maroon"
        return false
    }
        lastName.style.background="red"
        return true
}
function checkUserEmail(){
    var email=document.getElementById("userEmail")
    if(email.value.length===0){
        alert("please enter your email")
        email.focus()
        email.style.color="blue"
        return false
    }
        email.style.color="green"
        return true
}
function checkCountrySelection(select){
    var country=document.getElementById("selectiveCountry").value
    if(country.length==="null"){
        alert("please select your country")
    }
    return true
}

