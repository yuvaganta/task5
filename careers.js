$(document).ready(function(){
    $('#name').change(function(e){
        e.preventDefault();
        $.fn.validate();
    });
    $('#email').change(function(e){
        e.preventDefault();
        $.fn.validate();
    });
    $('button').click(function(e){
        e.preventDefault();
        $.fn.validate();
    });
    $.fn.validate = function(){
        var nameBox=$('#name').val();
        var emailBox=$('#email').val();
        if(nameBox==""||emailBox==""){
            $('#feildWarning').text("Please fill all the required fields below");
            $('#feildWarning').css('color', 'red');

        }
        else{
            $('#feildWarning').text("");
        }
        if(nameBox==""){
        $('#nameWarning').text("Name is required");
        $('#nameWarning').css('color', 'red');
        }
        else{
            $('#nameWarning').text("");   
        }
        if(emailBox=="")
        {
            $('#emailWarning').text("Email is required");
            $('#emailWarning').css('color', 'red');
        }
        else{
            var emalRef =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
            if(emalRef.test(emailBox)){
                $('#emailWarning').text("");
            }
           else{
                $('#emailWarning').text("Please enter a valid EmailID");
                $('#emailWarning').css('color', 'red');
 
           }
        }
    }})