/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {
	$('.signup-form').hide(); //hides the sing up form when the page loads
	var hideLoginShowSignup = function(){
		$('.signup-form').show();  //show's the sing up form
		$('.login-form').hide();	//hide's the login form
		$('.signup-form-btn').addClass('active'); //makes the sign up button active
		$('.login-form-btn').removeClass('active'); //makes the login button inactive
	}
	var showLoginHideSignup = function(){
		$('.login-form').show();
		$('.signup-form').hide();
		$('.login-form-btn').addClass('active');
		$('.signup-form-btn').removeClass('active');
	}

	$('.signup-form-btn').click(function(){
		hideLoginShowSignup();
	});
	$('.login-form-btn').click(function(){
		showLoginHideSignup();
	});
	$('.btn-login').on('click', function(){
		var user = {														//creates an object to take in a username and password
			username: $('#login-username-field').val(),
			password: $('#login-password-field').val()
		}
		var answer = codepen.api.login(user);								//sends the object to the server to see if the user can login
		$('#login-password-field').val('');									//clears the password and username fields
		$('#login-username-field').val('');
		alert(answer.error);												//returns a response
	});
	$('.btn-signup').on('click', function(){
		
		if($('#signup-password-field1').val() === $('#signup-password-field2').val()){		
			var namearray = $('#signup-name-field').val().split(" ")
			var user = {
				name: {
					firstname: namearray[0],
					lastname: namearray[1] 
				},
				email: $('#signup-email-field').val(),
				username: $('#signup-username-field').val(),
				password: $('#signup-password-field1').val(),
			}
			var answer = codepen.api.signup(user);
			console.log($('#signup-password-field1').val());
			alert(answer.error);
			showLoginHideSignup();
		}
		else{
			alert('please make your passwords match');
		}
	});



});