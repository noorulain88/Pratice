// // var kidnode=document.getElementById("div2")
// // var pNode=kidnode.parentNode
// // var firstChild=kidnode.firstChild;
// // var SecondeSibling=firstChild.firstChild;
// // var thirdSibling=SecondeSibling.nextSibling;
// // var forthSibling=thirdSibling.nextSibling;
// // console.log("the first child is ", firstChild)
// // console.log("the first child is ", SecondeSibling)
// // console.log("the first child is ", thirdSibling)
// // console.log("the first child is ", forthSibling)
// // console.log("🚀 ~ pNode:", pNode)

// var kidNode = document.getElementById("div2");
// var firstChild = kidNode.firstChild;
// var nextSibling = firstChild.nextSibling;
// var thirdSibling = nextSibling.lastChild;
// console.log("🚀 ~ firstChild:", firstChild)
// console.log("🚀 ~ firstChild name:", firstChild.nodeValue);
// console.log("🚀 ~ nextSibling:", nextSibling);
// console.log("🚀 ~ thirdSibling:", thirdSibling)
// console.log("third previous ",thirdSibling.previousSibling)

// correct 

// var kidnode=document.getElementById("div2")
// var parentNode=kidnode.parentNode
// var firstChild=kidnode.firstChild
// var SecondeSibling=firstChild.nextSibling
// var thirdSibling=SecondeSibling.nextSibling
// console.log("1",firstChild)
// console.log("2",SecondeSibling)
// console.log("3",thirdSibling)

// var firstChild=document.getElementById("div3")
// var orderlist=firstChild.firstChild
// console.log("the fisrt list ",orderlist.innerHTML)
// var secondeList=orderlist.nextSibling
// console.log("the 2 li is ",secondeList.innerHTML)
// var thirdList=secondeList.nextSibling
// console.log("the third list is ",thirdList.innerHTML)



// var img=document.getElementById("img")
// var parent=img.parentNode
// console.log("the parent node is ",parent.childNodes)
// for(var i=0;i<parent.length;i++){
//     var child=parent[i]
//     console.log("the child node is ",child)
// }
// if(child[i].nodeName=="IMG"){
//     child[i].src="https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"
// }


// var img=document.getElementById("img")
// var parent=img.childNodes;
// console.log("the parent node is ",parent.childNodes);
// for(var i=0;i<parent.length;i++){
// var child=parent[i]
// console.log("the child node is ",child)
// }
// if(child.nodeName.toLowerCase()=="img"){
//     child.src="https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg"
//     child.src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/10/07/2656435-1.jpg"
// }


// function change(){
//     var img=document.getElementById("images").firstChild
//     img.src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/10/07/2656435-1.jpg"
// }

// more type 
// function change(){
//     var img=document.getElementById("images").firstChild
//     img.src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/10/07/2656435-1.jpg"
// }


function changeText(){
var paragraph=document.getElementById("para")
paragraph.innerHTML="the text value is changed"
}