


// function to send a message

function sendMessage(){
    document.getElementById("sendMessage").innerHTML="";
    document.getElementById("sendMessage").style.color="#3B4A54";
}

// modification du premier element des chats

 let userInfo = document.getElementsByClassName("userInfo");
 userInfo[0].style.borderTop = "none";




// modification des chats


document.getElementById("number1").style.display = "none";
document.getElementById("number3").style.display = "none";


// modification du chat numero 7

setTimeout(()=>{
    document.getElementById("view7").style.display="none";
    document.getElementById("message7").innerHTML="Writing...";
    document.getElementById("message7").style.color="#25d366";
    document.getElementById("message7").style.fontWeight="bold";

},3000)




