// function change_Image(){
//     var images=document.getElementById("para-Lorem")
//     var chiles=images.childNodes;
//     for(var i=0;i<chiles.length;i++){
//         var child=chiles[i]
//         if(child.nodeName.toLowerCase()=="img"){
//             child.src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/10/07/2656435-1.jpg"
//         }
//     }
// }

function change_Image(){
 var img=document.getElementById("para-Lorem")
 var nodes=img.childNodes;
 for(var i=0;i<nodes.length;i++){
    var child=nodes[i]
 }
 if(child.nodeName.toLowerCase()=="img"){
    child.src="https://muxtech.com.pk/wp-content/uploads/2025/04/Bugatti-Divo-car-1024x597.webp"
 }
}


// change text
function changeText(){
    var text=document.getElementById("lorem")
    text.innerHTML="the text value is changed"
}
// 
var element=document.createElement("h1");
var Class=document.createTextNode("this is hesding 01");
element.appendChild(Class);
 var div=document.getElementById("Element")
 div.appendChild(element); //this one add the element 
 div.removeChild(element) //this one remove the element 

// 





