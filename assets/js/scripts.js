
jQuery(document).ready(function() {
	
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/bg_ue.png");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form select [name="yearLevel"] .registration-form program').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;

		parent_fieldset.find('input[type="email"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please input on required slots")
    			next_step = false;	
    		}
			else if ($(this).val()) {
				var emailregex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				var email = $(this).val();
				if (emailregex.test(email)){
					next_step = true;	
				}
				else{
					$(this).addClass('input-error');
					alert('Invalid email');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}
    	});

		parent_fieldset.find('input[type="ueemail"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please input on required slots")
    			next_step = false;	
    		}
			else if ($(this).val()) {
				var ueemailregex = /^([a-zA-Z0-9_.+-])+\@(ue.edu.ph)$/;
				var ueemail = $(this).val();
				if (ueemailregex.test(ueemail)){
					
				}
				else{
					$(this).addClass('input-error');
					alert('Invalid email');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}
    	});


		parent_fieldset.find('input[type="studnum"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please input on required slots")
    			next_step = false;	
    		}
			else if ($(this).val()) {
				var filter = /^(20)\d{9}/;
				var studNum = $(this).val();
				if (filter.test(studNum)){
					if(studNum.length==11){
						next_step = true;
					}
					else{
						$(this).addClass('input-error');
						alert('Not a valid number');
						next_step = false;
					}
					
				}
				else{
					$(this).addClass('input-error');
					alert('Invalid input');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}

    	});

		parent_fieldset.find('select').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please choose any of the given")
    			next_step = false;
				
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
		


        //contact number validation 
		parent_fieldset.find('input[type="contact"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please input on required slots")
    			next_step = false;	
    		}
			else if ($(this).val()) {
				var check = /^(09)\d{9}/;
				var contact = $(this).val();
				if (check.test(contact)){
					if(contact.length==11){
						next_step = true;
					}
					else{
						$(this).addClass('input-error');
						alert('Not a valid number');
						next_step = false;
					}
					
				}
				else{
					$(this).addClass('input-error');
					alert('Invalid input');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}

    	});



	

		parent_fieldset.find('input[type="text"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please input on required slots")
    			next_step = false;
				
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});


		if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}

    	
    });

    



		// parent_fieldset.find('input[type="contact"]').each(function() {
    	// 	if($(this).val() == "" ) {
    	// 		$(this).addClass('input-error');
		// 		alert("Please input on required slots")
    	// 		next_step = false;	
    	// 	}
		// 	else if ($(this).val()) {
		// 		var phoneregex = /^(09)\d{9}$/;
		// 		var mobNum = $(this).val();
		// 		if (phoneregex.test(mobNum)){
		// 			if(mobNum.length==11){
		// 				next_step = true;
		// 			}
		// 			else{
		// 				$(this).addClass('input-error');
		// 				alert('Not a valid phone number');
		// 				next_step = false;
		// 			}
					
		// 		}
		// 		else{
		// 			$(this).addClass('input-error');
		// 			alert('Invalid input');
		// 			next_step = false;
		// 		}
		// 	}

    	// 	else {
    	// 		$(this).removeClass('input-error');
    	// 	}
    	// });

    	
    // 	if( next_step ) {
    // 		parent_fieldset.fadeOut(400, function() {
	//     		$(this).next().fadeIn();
	//     	});
    // 	}
    	
    // });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], year, program').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
