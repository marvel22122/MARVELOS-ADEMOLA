const mywife = "ayomide";

const myage = 18;

const ismarried = true;

let myfuturewife;

myfuturewife = "grace";
let mywhatever = null;

//my student
let student = ["kimi", "victor", "ella", "precious", "jomi"];

//add new student
let updatestudent = student.push("destiny");

//remove last student
let removelaststudent = student.pop();

//remove 3rd student
let removestudent = student.splice(2, 1);

console.log("students:", student;);




function hidenav(params) {
    if (mynav.style.display === "flex"){
        mynav.style.display = "none"
        
    }
     else {
        mynav.style.display = "flex"
        
    }
    
}

openNav.addEventListener("click",hidenav);
CloseNav.addEventListener("click",hidenav)
