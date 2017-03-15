$(function() {
    var flag1=false;
    var flag2=false;
    var flag3=false;
    var flag4=false;
    // 手机号码

    $("#mobileTrue").hide();
    $("#mobileFalse").hide();
    $("#mobile").hide();


    $("#mobileNumber").blur(function() {
        var regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        // var regMobile=/^[1][3|5|8|9]\d{9}$/;
        var mobileVal =$("#mobileNumber").val();
        var a="";
        if (regMobile.test(mobileVal)==false||mobileVal==a) {
            $("#mobileTrue").hide();
            $("#mobileFalse").show();
            $("#mobile").show();
            flag1=false;

        } else {
            $("#mobileFalse").hide();
            $("#mobile").hide();
            $("#mobileTrue").show();

            flag1=true;
        }
    })

    // 密码验证

    $("#codeTrue").hide();
    $("#codeFalse").hide();
    $("#codeFalse2").hide();

    $("#goCode").blur(function(){
    	var regCode=/^[a-z]\d{5,9}$/i;
    	var codeVal=$("#goCode").val();
    	var a="";

    	if(regCode.test(codeVal)==false||codeVal==a){
    		$("#codeTrue").hide();
    		$("#codeFalse").show();
    		$("#codeFalse2").show();

    		flag2=false;
    	}else{
    		$("#codeTrue").show();
    		$("#codeFalse").hide();
    		$("#codeFalse2").hide();

    		flag2=true;
    	}
    })

    // 确认密码验证

    $("#confirmCodeTrue").hide();
    $("#confirmCodeFalse").hide();
    $("#confirmCodeFalse2").hide();

    $("#confirmCode").blur(function(){
    	var codeVal=$("#goCode").val();
    	var confirmCode=$("#confirmCode").val();
    	var a="";
    	if(codeVal==confirmCode&&codeVal!=a){
    		 $("#confirmCodeTrue").show();
    		 $("#confirmCodeFalse").hide();
    		 $("#confirmCodeFalse2").hide();

    		 flag3=true;
    	}else{
    		$("#confirmCodeTrue").hide();
    		 $("#confirmCodeFalse").show();
    		 $("#confirmCodeFalse2").show();

    		 flag3=false;
    	}
    })


    // 邮箱验证
    $("#emailTrue").hide();
    $("#emailFalse").hide();
    $("#emailFalse2").hide();

    $("#usedEmail").blur(function(){
    	var regEmail=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    	var usedEmailVal=$("#usedEmail").val();
    	var a="";
    	if(regEmail.test(usedEmailVal)&&usedEmailVal!=a){
    		$("#emailTrue").show();
    		$("#emailFalse").hide();
    		$("#emailFalse2").hide();

    		flag4=true;
    	}else{
    		$("#emailTrue").hide();
    		$("#emailFalse").show();
    		$("#emailFalse2").show();

    		flag4=false;
    	}
    })
    var count=localStorage.count;
    $("#subBtn").click(function(){
        if(flag1==true && flag2==true && flag3==true && flag4==true){
            if(!count){
                count=1;
            }else{
                count++;
            }
            localStorage.setItem("mobileNumber"+count,$("#mobileNumber").val());
            localStorage.setItem("goCode"+count,$("#goCode").val());
            localStorage.setItem("count",count);
           $("#subBtn").val("正在跳转中...");
            setTimeout(function(){
      
            $("#formSign").submit();
           },3000)
           
        }else {
            $("#subBtn").val("不正确");
        }
    })
    
})
















