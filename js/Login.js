window.onload=function(){






	var count=localStorage.count;
	var phone=localStorage.getItem("mobileNumber"+count);
	    document.getElementById("phone").innerHTML=phone;

$("#btn-login").click(function() {
	$(".pop").show();
	$(".back").show();
});
$("#left").click(function(){
	$(this).addClass('change');
	$("#right").removeClass('change');
	$(".loginB").show();
	$(".codelogin").hide();
});
$("#right").click(function(){
	$(this).addClass('change');
	$("#left").removeClass('change');
	$(".loginB").hide();
	$(".codelogin").show();
});
$("#login-btn").click(function(){
	if($(".phone_two").val()==localStorage.getItem("mobileNumber"+count) && $(".pwdtwo").val()==localStorage.getItem("goCode"+count)){
      // alert("成功登陆")
      location.href="成功登陆.html";
	}else{
		$(".error").show()
	}
});
}