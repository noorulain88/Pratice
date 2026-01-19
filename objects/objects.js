// objects in js
var student={
    Name:"noor",
    Class:10,
    rollNo:2417,
    institute:"abc institute"
}

console.log("student name is ",student.Name);
// alert("student roll no is " + student.rollNo )
// change value of object 
student.Name="ahmed"
//  object with array
var student={
    Name:"nooor",
    monthsDuration:["august","september","october","november"],

}
 console.log("student months duration is ",student.monthsDuration[3])
//  object with function
var studentSubjects={
    Name:"noor",
    subjects:function(){
        console.log("student subjects are math,science,english")
    }
}
studentSubjects.subjects();

// this word in js
// var months={
//     subjects:"urdu",
//     cnic:"56s78-598509830-9",
//       Name:"noor",
//      buy: function () {
//     console.log("this plan is buyed");
//   },


// }

// console.log(months.buy())


var months={
    subjects:"urdu",
    cnic:"56s78-598509830-9",
      Name:"noor",
     deatils: function () {
    console.log("student detail",this.Name);
  },
}
console.log(months.deatils())
console.log("month",months)
// delete any im data in objects
delete months.cnic;
// check avalibility of required

console.log("available ",'fatherName' in months)

console.log("available ",'Name' in months)


var course={
    name1:"digital Marketing",
    name2:"Ms",
    name3:"freelancing",
    name4:"web development",
}
console.log("the first course name is ",course.name1)

// objects with  function
var course={
    name1:"digital Marketing",
    name2:"Ms",
    name3:"freelancing",
    name4:"web development",
    done:function (){
        console.log("the user course name is ",this.name4)
    },

}
course.done();

// object with window with key

// var courses={
//     name1:"digital Marketing",
//     name2:"Ms",
//     name3:"freelancing",
//     name4:"web development",
// }
// for(var key in courses){
//     console.log("the name in student ",course['name1'])
//         console.log("the name in  ",course['name2'])
// }

// var student = {
//   name: "John Doe",
//   rollNo: "123",
//   key:"456",
// };


// var listOfProperties=[]
// for(var key in student){
//     console.log("key",key)
//     listOfProperties.push(key)
//     console.log(student[key])// student['name'] ----> student.'name' X
// }
// console.log("list",listOfProperties)

console.log("the window herf ",window.location.href)
console.log("the window pathname ",window.location.pathname)
console.log("the window host ",window.location.hostname)

//  var hostname=window.location.hostname
//  var link="http://"+hostname+"/about.html"
//  window.location.href=link
    var handleLink = function () {
  window.location.href = "/about.html#contact-section";

    var hostname = window.location.hostname;
    var link = "http://" + hostname + "/about.html";
    window.location.href = link;
};








