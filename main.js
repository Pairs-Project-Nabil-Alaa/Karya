//console.log('test')
$(document).ready(function () {

    //Navigation Bar Manipulation :////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    $('#forma').hide()
    $('#formasignup').hide()


    $('#login').click(function () {
        $('#forma').hide()
        $('#formasignup').hide()
        $('#forma').fadeIn(1000)
    })

    $('#signup-button').click(function () {
        $('#formasignup').fadeIn(1000)
        $('#forma').hide()
    })

    $('#home').click(function () {
        $('#forma').hide()
        $('#formasignup').hide()
    })



    // Select Button Manipulation////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //  var sel = document.getElementsByClassName('search-selector')

    //  if (sel.option[1].selected === true){
    //     $('.search-btn').click(function(){

    //         alert('bizerte')
    //     })
    //  }

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Bizerte") {
                alert('Welcome to Bizerte')
            }

        });
    });


    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Tunis") {
                alert('Tunis will be available soon..')
            }

        });
    });

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Nabeul") {
                alert('Nabeul will be available soon..')
            }

        });
    });





//Local storage /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Storage function :
$('#sgnup').click(function () {
    
    var username = $('#uname').val();
    var password = $('#psw').val();
    var repeatpassword = $('#psw-repeat').val()
    

    if(password !== repeatpassword){
        alert("Passwords Dosen't Match");

    

    }
    else
    {
        localStorage.setItem('uname', username);
        localStorage.setItem('psw', password);
        alert('Your account has been created');
    }
})

//checking


$('#lgin').click(function () {
    var storedusername = localStorage.getItem('uname');
    var storedpassword = localStorage.getItem('psw');

    var usernamelog = $('#unamelog').val();
    var userpasswordlog = $('#pswlog').val();
    

    if(usernamelog == storedusername && userpasswordlog == storedpassword){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }


})




})