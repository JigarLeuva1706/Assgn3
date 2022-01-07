function validation()
{
    var email=document.getElementById("uname").value;
    var pass=document.getElementById("pwd").value;
    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,20})$/;
    var regp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*@).+$/;

    if(regx.test(email))
    {
        document.getElementById("err").innerHTML="Valid";
        document.getElementById("err").style.visibility="visible";
        document.getElementById("err").style.color="green";
    }
    else
    {
        document.getElementById("err").innerHTML="InValid";
        document.getElementById("err").style.visibility="visible";
        document.getElementById("err").style.color="red";
    }

    if(regp.test(pass))
    {
        document.getElementById("perr").innerHTML="Valid";
        document.getElementById("perr").style.visibility="visible";
        document.getElementById("perr").style.color="green";
    }
    else
    {
        document.getElementById("perr").innerHTML="InValid";
        document.getElementById("perr").style.visibility="visible";
        document.getElementById("perr").style.color="red";
    }
}    