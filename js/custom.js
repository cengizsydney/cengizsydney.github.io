
$(document).ready(function(){
	
	var exclOutput = '<h3>Communication Type Exclusions</h3> select * from <b>X.ABC</b> <br><br><a href="#">porttitor</a> varius, magna nibh posuere purus';
	// var checkChannel = '<h3>Portfolio & Channel Exclusions</h3> select * from <b>pvdata.EDM_OPT_OUT</b> <br><br>dolor sit amet, consectetur adipiscing elit. Duis feugiat, purus non <a href="#">porttitor</a> varius, magna nibh posuere purus';

	$("#markType").hide();	

	$('#marketingButton').on("click", function(){
		$("#markType").slideDown(1000);
		$("#serviceType").slideUp(1000);	
		$("#mandatoryType").slideUp(1000);			
		$('#marketingButton').css('background-color',"#3EB5E5");
		$('#serviceButton').css('background-color',"#FFCC00");		
		$('#complianceButton').css('background-color',"#FFCC00");			
	});
	

	$("#serviceType").hide();	

	$('#serviceButton').on("click", function(){
		$("#serviceType").slideDown(1000);
		$("#markType").slideUp(1000);	
		$("#mandatoryType").slideUp(1000);			
		$('#marketingButton').css('background-color',"#FFCC00");	
		$('#serviceButton').css('background-color',"#3EB5E5");	
		$('#complianceButton').css('background-color',"#FFCC00");						
	});	


	$("#mandatoryType").hide();

	$('#complianceButton').on("click", function(){
		$("#mandatoryType").slideDown(1000);			
		$("#serviceType").slideUp(1000);
		$("#markType").slideUp(1000);	
		$('#marketingButton').css('background-color',"#FFCC00");	
		$('#serviceButton').css('background-color',"#FFCC00");		
		$('#complianceButton').css('background-color',"#3EB5E5");						
	});	


	$("#log").hide();	
	$("#row2col1").hide();
	// $("#row2col2").hide();	

	$('#submit').on("click", function(){	
		$('#submit').css('background-color',"#3EB5E5");	
		$("#log").slideDown(1000);		
		
		if( $(".radioButton").is(":checked") && $(".pButton").is(":checked") && $(".cButton:checkbox").is(":checked") ) {
			$('#log').html(
				  '<span style="color:red">' + 'Comm Type: ' + '</span>' + $(".radioButton:checked").val()+ "<br/>"
				+ '<span style="color:red">' + 'Portfolio: ' + '</span>' + $(".pButton:checked").val() + "<br/>"
				+ '<span style="color:red">' + 'Channel: ' + '</span>' + $('.cButton:checkbox:checked').map(function() {return ' '+this.value;}).get() + "<br/>"
			 	+ '<i>' + "is selected!" + '</i>');			
			
	  		$('#row2col1').html(exclOutput).slideDown(600);
	  		// $('#row2col2').html(checkChannel).slideDown(2000);	
	  		$('#row2col1').css('color', 'rgb(5,200,160)');
			 			
		}
		else{ 
			// alert('Please complete all 3 selection citeria');
				
  				$(".alert-grey").fadeIn(400);	

  				$('.alert-ok').on('click',function(){
  				$(".alert-grey").fadeOut(400);
			});	
		
			$("#log").hide();
			$("#row2col1").hide();
			// $("#row2col2").hide();			
		}	

	});	


	$('#reset').on("click", function(){	
		$('#reset').css('background-color',"#3EB5E5");	
		location.reload(true);
		// window.location.href = window.location.href;
	});	


	$('.get__lotto_numbers').on("click", function(){

	var arr = []; 
	var count = 5;
	for (var i = 0; i <= count; i++) {
  	arr[i] = Math.floor(49*(Math.random()))+1;
	}

	if ((arr[0]!=arr[1])&&(arr[0]!=arr[2])&&(arr[0]!=arr[3])&&(arr[0]!=arr[4])&&(arr[0]!=arr[5])&&
		(arr[1]!=arr[2])&&(arr[1]!=arr[3])&&(arr[1]!=arr[4])&&(arr[1]!=arr[5])&&
		(arr[2]!=arr[3])&&(arr[2]!=arr[4])&&(arr[2]!=arr[5])&&
		(arr[3]!=arr[4])&&(arr[3]!=arr[5])&&
		(arr[4]!=arr[5]))
		// &&(arr[0]!=0)&&(arr[1]!=0)&&(arr[2]!=0)&&(arr[3]!=0)&&(arr[4]!=0)&&(arr[5]!=0)) 
	{

	// document.getElementById("div1").innerHTML = arr[0];
	// document.getElementById("div2").innerHTML = arr[1];
	// document.getElementById("div3").innerHTML = arr[2];
	// document.getElementById("div4").innerHTML = arr[3];
	// document.getElementById("div5").innerHTML = arr[4];
	// document.getElementById("div6").innerHTML = arr[5];

	$({
	    countNum: $('.num1').text()
	}).animate({
	    countNum: arr[0]
	}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function () {
	        $('.num1').text(Math.ceil(this.countNum));
	    },
	    complete: function () {
	        $('.num1').html(arr[0]);
	    }
	});

	$({
	    countNum: $('.num2').text()
	}).animate({
	    countNum: arr[1]
	}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function () {
	        $('.num2').text(Math.ceil(this.countNum));
	    },
	    complete: function () {
	        $('.num2').html(arr[1]);
	    }
	});

	$({
	    countNum: $('.num3').text()
	}).animate({
	    countNum: arr[2]
	}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function () {
	        $('.num3').text(Math.ceil(this.countNum));
	    },
	    complete: function () {
	        $('.num3').html(arr[2]);
	    }
	});

	$({
	    countNum: $('.num4').text()
	}).animate({
	    countNum: arr[3]
	}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function () {
	        $('.num4').text(Math.ceil(this.countNum));
	    },
	    complete: function () {
	        $('.num4').html(arr[3]);
	    }
	});

	$({
	    countNum: $('.num5').text()
	}).animate({
	    countNum: arr[4]
	}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function () {
	        $('.num5').text(Math.ceil(this.countNum));
	    },
	    complete: function () {
	        $('.num5').html(arr[4]);
	    }
	});

	$({
	    countNum: $('.num6').text()
	}).animate({
	    countNum: arr[5]
	}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function () {
	        $('.num6').text(Math.ceil(this.countNum));
	    },
	    complete: function () {
	        $('.num6').html(arr[5]);
	    }
	});

		}
		else{
	  		$(".alert-grey2").fadeIn(400);	

	  		$('.alert-ok2').on('click',function(){
	  		$(".alert-grey2").fadeOut(400);
			});
		}
	});


	$('.clear__button').on("click", function(){			
		location.reload(true);
	});	

});
