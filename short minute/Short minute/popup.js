// Future JavaScript will go here
var data=[ 
    ["python","youtube","code with harry"],
    ["python","youtube","Thaapa Technical"],
    ["python","blogs","fullstackpython.com"],
    ["python","blogs","pybloggers.com"],
    ["python","Courses","udemy.com"],
    ["python","Courses","Coursera.com"],

    ["JAVA","youtube","Thoughts on Java"],
    ["JAVA","youtube","Devoxx"],
    ["JAVA","blogs","www.baeldung.com"],
    ["JAVA","blogs","pybloggers.com"],
    ["JAVA","Courses","Udacity.com"],
    ["JAVA","Courses","Skillshare.com"],

    ["Javascript","youtube","FreeCodeCamp."],
    ["Javascript","youtube","The Coding Train"],
    ["Javascript","blogs","https://javascript.info/"],
    ["Javascript","blogs","https://www.w3schools.com/js/DEFAULT.asp"],
    ["Javascript","Courses","eduonix.com"],
    ["Javascript","Courses","Lynda.com"],


];
const filterarray = data.filter(r=> r[0] ==="python");

const uniqueoptions = new Set();
filterarray.forEach( r=> uniqueoptions.add(r[1]));
const uniquelist = [...uniqueoptions];


const selectlevell1 = document.getElementById("level2");
uniquelist.forEach(item => {
    const option = document.createElement("option");
    option.textContent = item;
    selectlevell1.appendChild(option);
});



console.log(filterarray);
console.log(uniquelist);
