
function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var about = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        document.getElementById("name-msg").innerHTML = "* * please fill name in the name field";
        return false;
    }
    if ((name.length <= 2) || (name.length > 24)) {
        document.getElementById("name-msg").innerHTML = "* * name must be between 3 to 24 character";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById("name-msg").innerHTML = "* * only characters are allowed";
        return false;
    }


    if (phone == "") {
        document.getElementById("phone-msg").innerHTML = "* * please fill name in the name field";
        return false;
    }

    if (mail == "") {
        document.getElementById("mail-msg").innerHTML = "* * please fill name in the name field";
        return false;
    }

    if (about == "") {
        document.getElementById("sub-msg").innerHTML = "* * please fill name in the name field";
        return false;
    }

    if (message == "") {
        document.getElementById("area-msg").innerHTML = "* * please fill name in the name field";
        return false;
    }
}



function validate() {


    if (name == "") {
        document.getElementById("name-msg").innerHTML = "* * please fill name in the name field";
        return false;
    }




}