$(document).ready(function () {

    /////////////////////////////Navigation Bar Manipulation 

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



    /////////////////////////////Select Button Manipulation

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
                alert('You need to be a member, please sign up first')
            }

        });
    });

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Tunis") {
                alert('You need to be a member, please sign up first')
            }

        });
    });

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if (selectedText === "Nabeul") {
                alert('You need to be a member, please sign up first')
            }

        });
    });

    ////////////////////////////Local storage

    ////////////////////////////Storage function

    $('#sgnup').click(function () {
        var localData = JSON.parse(localStorage.getItem('users'))
        var username = $('#uname').val();
        var password = $('#psw').val();
        var repeatpassword = $('#psw-repeat').val()
        if (password !== repeatpassword) {
            alert("Passwords Dosen't Match");
        }
        else if (Array.isArray(localData)) {
            var data = {
                name: username,
                password: password
            };
            localData.push(data);
            localStorage.setItem('users', JSON.stringify(localData));
            alert('Your account has been created');
        }
        else {
            var users = [];
            users.push(data);
            localStorage.setItem('users', JSON.stringify(users));
        }
    })

    ////////////////////////////Log checking

    $('#lgin').click(function (event) {
        event.preventDefault()

        function gowelcome() {
            window.location = 'welcome.html'
        }

        var localData = JSON.parse(localStorage.getItem('users'))
        for (var i = 1; i < localData.length; i++) {

            var usernamelog = $('#unamelog').val();
            var userpasswordlog = $('#pswlog').val();
            if (usernamelog == localData[i].name && userpasswordlog == localData[i].password) {
                alert('You are logged in.');
                $('#lgin').click(gowelcome())




                return;

            }
        }
        return alert('Error on login!');
    })






})