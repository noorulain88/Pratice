// for(var i=0;i<10;i++){
//     let row=""
//     for(var j=0;j<=i;j++){
//         row +="&"
//     }
//     console.log("row",i)
// }

// console.log("Math.floor(marks/10)",Math.floor(2/1))

var sentence =
  "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which  World War II contains,  with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard  World War II can understand the evil magi precisely because he is just World War II  enough like them  to grasp their minds and motives in ways that  World War II they cannot grasp his.";

var indexNumber = sentence.indexOf("World War II");
if (indexNumber != -1) {
  sentence =
    sentence.slice(0, indexNumber) +
    "Second world war" +
    sentence.slice(indexNumber + 12);
  console.log("🚀 ~ sentence:", sentence);
}    
                                                                                                       