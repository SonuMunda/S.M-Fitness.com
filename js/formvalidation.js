function validate(){
var name=document.getElementById("cname").value;
var number=document.getElementById("cnumber").value;
var age=document.getElementById("cage").value;
var area=document.getElementById("carea").value;


if(name==""){
    document.getElementById("name").innerHTML="* * please fill name in the name field";
    return false;
}
if((name.length<=2)||(name.length>24)){
    document.getElementById("name").innerHTML="* * name must be between 3 to 24 character";
    return false;
}
if(!isNaN(name)){
    document.getElementById("name").innerHTML="* * only characters are allowed";
    return false; 
}

if(number==""){
    document.getElementById("number").innerHTML="* * please fill number in the phone number field";
    return false;
}
if(isNaN(number)){
    document.getElementById("number").innerHTML="* * characters not allowed";
    return false;
}
if(number.length!=10){
    document.getElementById("number").innerHTML="* * please fill 10 digit number";
    return false;
}


if(age==""){
    document.getElementById("age").innerHTML="* * please fill your age in the field";
    return false;
}
if(isNaN(age)){
    document.getElementById("age").innerHTML="* * only digits";
    return false;
}
if(age.length!=2){
    document.getElementById("age").innerHTML="* * age must be of 2 digits";
    return false;
}

if(area==""){
    document.getElementById("area").innerHTML="* * please fill your area in the field";
    return false;
}

}