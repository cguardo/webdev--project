
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

/*		parent_fieldset.find('select').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please choose any of the given")
    			next_step = false;
				
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
*/
		parent_fieldset.find('input[id="form-first-name"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("First Name cannot be blank.")
    			next_step = false;
				
    		}
		});

		parent_fieldset.find('input[id="form-last-name"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Last Name cannot be blank.")
    			next_step = false;
				
    		}
		});

		parent_fieldset.find('input[type="studnum"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Student Number cannot be blank.")
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
						alert('Please enter an 11-digit student number.');
						next_step = false;
					}
					
				}
				else{
					$(this).addClass('input-error');
					alert('Please enter an 11-digit student number.');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}

    	});

		parent_fieldset.find('select[id="form-year-level"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please choose a Year Level.")
    			next_step = false;
				
    		}
		});

		parent_fieldset.find('select[id="form-program"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Please choose a Program.")
    			next_step = false;
				
    		}
		});

	/*
        Step 2/5
    */
	
		parent_fieldset.find('input[id="form-ue-email"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("UE Email Address cannot be blank.")
    			next_step = false;	
    		}
			else if ($(this).val()) {
				var ueemailregex = /^([a-zA-Z0-9_.+-])+\@(ue.edu.ph)$/;
				var ueemail = $(this).val();
				if (ueemailregex.test(ueemail)){
					
				}
				else{
					$(this).addClass('input-error');
					alert('The inputted UE Email Address is invalid. Please enter a valid school Email Address.');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}
    	});


		parent_fieldset.find('input[id="form-personal-email"]').each(function() {
    		if($(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Personal Email Address cannot be blank.")
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
					alert('The inputted Personal Email Address is invalid. Please enter a valid Email Address.');
					next_step = false;
				}
			}

    		else {
    			$(this).removeClass('input-error');
    		}
    	});
		

		parent_fieldset.find('input[id="form-contact-number"]').each(function() {
			if($(this).val() == "" ) {
			   $(this).addClass('input-error');
				alert("Contact Number cannot be blank.")
			   next_step = false;	
		   }
			else if ($(this).val()) {
				var phoneregex = /^(09)\d{9}$/;
				var mobNum = $(this).val();
				if (phoneregex.test(mobNum)){
					if(mobNum.length==11){
						next_step = true;
					}
					else{
						$(this).addClass('input-error');
					   alert('The inputted Contact Number is invalid. Please enter an 11-digit contact number.');
						next_step = false;
					}
				   
				}
				else{
					$(this).addClass('input-error');
					alert('The inputted Contact Number is invalid. Please enter an 11-digit contact number.');
					next_step = false;
				}
			}

			else {
				$(this).removeClass('input-error');
			}
	   });

	   	parent_fieldset.find('input[id="form_home_address"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Home Address cannot be blank.")
    			next_step = false;
				
    		}
		});

		parent_fieldset.find('input[id="form_provincial_address"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("Provincial Address cannot be blank.")
    			next_step = false;
				
    		}
		});

		/* step 3/5 */

		parent_fieldset.find('input[id="form-fullname-emergency"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("The Name cannot be blank.")
    			next_step = false;
				
    		}
		});
		
		parent_fieldset.find('input[id="form-relationship"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
				alert("The Relationship cannot be blank.")
    			next_step = false;
				
    		}
		});

		parent_fieldset.find('input[id="form-contact-numberEmergency"]').each(function() {
			if($(this).val() == "" ) {
			   $(this).addClass('input-error');
				alert("Contact Number cannot be blank.")
			   next_step = false;	
		   }
			else if ($(this).val()) {
				var phoneregex = /^(09)\d{9}$/;
				var mobNum = $(this).val();
				if (phoneregex.test(mobNum)){
					if(mobNum.length==11){
						next_step = true;
					}
					else{
						$(this).addClass('input-error');
					   alert('The inputted Contact Number is invalid. Please enter an 11-digit contact number.');
						next_step = false;
					}
				   
				}
				else{
					$(this).addClass('input-error');
					alert('The inputted Contact Number is invalid. Please enter an 11-digit contact number.');
					next_step = false;
				}
			}

			else {
				$(this).removeClass('input-error');
			}
	   });

	   	parent_fieldset.find('input[id="form-home-addressEmergency"]').each(function() {
			if( $(this).val() == "" ) {
				$(this).addClass('input-error');
				alert("Home Address cannot be blank.")
				next_step = false;
			
			}
		});

		parent_fieldset.find('input[id="form-facebook-username"]').each(function() {
			if ($(this).val()) {
				var fbusernameex = /^@([a-zA-Z0-9_.+-])$/;
				var fbusername = $(this).val();
				if (fbusernameex.test(fbusername)){
					next_step = true;
				}
				else{
					$(this).addClass('input-error');
					alert('The inputted Facebook Username is invalid. Please enter a valid username.');
					next_step = false;
				}
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
