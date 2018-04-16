window.onload = function(){
	var oUserInput = document.getElementById("userInput");
	var oPassInput = document.getElementById("passInput");
	var oPassInput2 = document.getElementById("passInput2");
	var oP = document.getElementById("prompt");


	oUserInput.onfocus = function(){
		oP.style.display = "none";
	}

	oUserInput.onblur = function(){
		oP.style.display = "block";

		var oValue = oUserInput.value.replace(/ /ig, "");
		oUserInput.value = oValue;

		if(!oValue){
			oP.innerHTML = "用户名不能为空";
		}else if(!(/^[1-3]\d{10}$/ && oValue.length == 11) || !(/^\w+@\w+(\.\w+)+$/)){
			oP.innerHTML = "请输入正确正确的邮箱账号或手机号!";
			oP.style.color = "#e6594e";
		}else{
			oP.innerHTML = "可以使用";
			oP.style.color = "green";
		}
	}

	
	var oPassValue = null;
	oPassInput.onblur = function(){
		oP.style.display = "block";

		oPassValue = oPassInput.value.replace(/ /ig, "");
		oPassInput.value = oPassValue;

		if(!oPassValue){
			oP.innerHTML = "密码不能为空";
			oP.style.color = "#e6594e";
		}else if(oPassValue.length < 4){
			oP.innerHTML = "密码长度不能少于四个字符";
			oP.style.color = "#e6594e";
		}
	} 

	oPassInput2.onblur = function(){
		var oPassValue2 = oPassInput2.value.replace(/ /ig, "");
		oPassInput2.value = oPassValue2;
		if(!oPassValue2){
			oP.innerHTML = "不能为空";
			oP.style.color = "#e6594e";
		}else if(oPassValue2 != oPassValue){
			oP.innerHTML = "密码不一致";
			oP.style.color = "#e6594e";
		}else{
			oP.innerHTML = "密码一致";
			oP.style.color = "green";
		}
	}



}