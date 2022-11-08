$(document).ready(function(){

    $('#clear').click(function(e){

        e.preventDefault();
        $('#contactform')[0].reset();
        $('#feildWarning').text("");
        $('#nameWarning').text(""); 
        $('#organizationNameWarning').text(""); 
        $('#emailWarning').text("");
       
    });

    $('#male').click(function(){
        alert("Hello Sir");
    });

    $('#female').click(function(){
        alert("Hello Lady");
    });

    $('#state').click(function(){
        var stateName=$('#state').val();
        var promoValue =stateName;
        promoValue+="-PROMO";
        $('#promoCode').val(promoValue);

    });

    $('#name').change(function(e){
        e.preventDefault();
        validate();
    });
    $('#organizationName').change(function(e){
        e.preventDefault();
        validate();
    });
    $('#email').change(function(e){
        e.preventDefault();
        validate();
    });
    $('#submit').click(function(e){
        e.preventDefault();
        validate();
    });
    function validate(){
        var organizationBox=$('#organizationName').val();
        var nameBox=$('#name').val();
        var emailBox=$('#email').val();
        if(nameBox==""||emailBox==""||organizationBox==""){
            $('#feildWarning').text("Please fill all the required fields below");
            $('#feildWarning').css('color', 'red');

        }
        else{
            $('#feildWarning').text("");
        }
        if(organizationBox==""){
        $('#organizationNameWarning').text("Organization Name is required");
        $('#organizationNameWarning').css('color', 'red');
        }
            else{
            $('#organizationNameWarning').text("");   
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