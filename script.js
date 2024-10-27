// console.log("this is javascript");
// var name="GMIT"

// function f1(){
//     console.log("number : "+name);
// }
// // function f2(){
// //     console.log("number"+name);
// // }
// f1();
// function add(num1,num2){
//     console.log(num1+parseInt(num2));
// }
// add(2,"4");
// {
//     var a=10;
//     console.log(+a);
//     let b=20;
//     console.log(+b);
//     const c=30;
//     console.log(+c);
// }
// var username="Gmit";
// var password="Gmit123";

// function login(){
//     // console.log("called");
//     var inputname=document.getElementById("username").value;
//     var inputpassword=document.getElementById("password").value;

//     if(inputname==username && inputpassword==password)
//     {
//         console.log("success");
//     }else{
//         console.log("failure");
//     }
//     // console.log(inputname);
//     // console.log(inputpassword);

// }
function signup(){
    let inputfirstname=document.getElementById("firstname").value;
    let inputsecondname=document.getElementById("secondname").value;
    let inputemail=document.getElementById("email").value;
    var inputphoneno=document.getElementById("phoneno").value;
    var inputpassword=document.getElementById("password").value;
    var inputrepassword=document.getElementById("reenterpassword").value;
    // console.log(inputfirstname);
    // console.log(inputsecondname);
    // console.log(inputemail);
    // console.log(inputphoneno);
    // console.log(inputpassword);
    // console.log(inputrepassword);
    // console.log(inputfirstnamep,inputsecondname);
    let validatefname=validatepage(inputfirstname,inputsecondname);
    // let validatesname=validatepage(inputsecondname);
    // console.log(validatefname,validatesname);
    console.log(validatefname);
 
}
function validatepage(inputfname,inputsname){
    if(inputfname.length>5 && inputsname.length>5)
        return true;
    else
        return false;
}