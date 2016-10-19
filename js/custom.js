
$(document).ready(function(){
	
	var checkType = '<h3>Communication Type Exclusions</h3> select * from <b>pvdata.DM_OPT_OUT</b> <br><br><a href="#">porttitor</a> varius, magna nibh posuere purus';
	var checkChannel = '<h3>Portfolio & Channel Exclusions</h3> select * from <b>pvdata.EDM_OPT_OUT</b> <br><br>dolor sit amet, consectetur adipiscing elit. Duis feugiat, purus non <a href="#">porttitor</a> varius, magna nibh posuere purus';

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
	$("#row2col2").hide();	

	$('#submit').on("click", function(){	
		$('#submit').css('background-color',"#3EB5E5");	
		$("#log").slideDown(1000);		
		
		if( $(".radioButton").is(":checked") && $(".pButton").is(":checked") && $(".cButton:checkbox").is(":checked") ) {
			$('#log').html(
				  '<span style="color:red">' + 'Comm Type: ' + '</span>' + $(".radioButton:checked").val()+ "<br/>"
				+ '<span style="color:red">' + 'Portfolio: ' + '</span>' + $(".pButton:checked").val() + "<br/>"
				+ '<span style="color:red">' + 'Channel: ' + '</span>' + $('.cButton:checkbox:checked').map(function() {return ' '+this.value;}).get() + "<br/>"
			 	+ '<i>' + "is selected!" + '</i>');
				
	  		$('#row2col1').html(checkType).slideDown(2000);
	  		$('#row2col2').html(checkChannel).slideDown(2000);			
			 			
		}
		else{ alert('Please complete all 3 selection citeria');
			$("#log").hide();
			$("#row2col1").hide();
			$("#row2col2").hide();			
		}	

	});	


	$('#reset').on("click", function(){	
		$('#reset').css('background-color',"#3EB5E5");	
		location.reload(true);
		// window.location.href = window.location.href;
	});	


	// $('.channel').css('cursor', 'pointer');

	// $('#submit').click(function(){
	//   $('#output').html('');
	//   $('#output').html(userSelect);
	//   $('#output').toggleSlide("slow");
	//   userSelect ="";
	// });
});
