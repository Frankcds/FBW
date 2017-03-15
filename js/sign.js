window.onload=function(){
	var count=localStorage.count;
	var phone=localStorage.getItem("mobileNumber"+count);
	document.getElementById("phoneNumber").innerHTML=phone;


var s=5;
var again=document.getElementById("again");
again.onclick=function sendMessage (){
	s--;
	again.innerHTML=s+"秒重新发送短信";
	again.setAttribute("disabled", true);
	if(s==0){
		again.innerHTML="发送短信";
        again.removeAttribute("disabled");
        again.style.background="#ff9000";
        s=1;
	}
	setTimeout(sendMessage, 1000);
}


var check=document.getElementById("check");
check.onclick=function (){
	location.href="Login.html";
} 



}


