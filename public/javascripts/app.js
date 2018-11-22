$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();

        var fullname   = $("#username").val();
        var email      = $("#email").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();

        if(!username || !email || !password || !cpassword ){ 

            $("#msgDiv").show().html("All fields are required.");

        } else if(cpassword != password){

            $("#msgDiv").show().html("Passowrds should match.");

        }
        else{ 

            $.ajax({
                url: "/register",
                method: "POST",

                data: { username: username, email: email, password: password }

            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});