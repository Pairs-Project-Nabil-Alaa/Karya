//console.log('test')
$(document).ready(function () {

    $('#forma').hide()
    $('#formasignup').hide()

    
    $('#login').click(function(){
        $('#forma').hide()
        $('#formasignup').hide()
        $('#forma').fadeIn(1000)
     })
    
     $('#signup-button').click(function(){
        $('#formasignup').fadeIn(1000)
        $('#forma').hide()
     })
     
     $('#home').click(function(){
        $('#forma').hide()
        $('#formasignup').hide()
     })
    // Select Button////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //  var sel = document.getElementsByClassName('search-selector')
     
    //  if (sel.option[1].selected === true){
    //     $('.search-btn').click(function(){

    //         alert('bizerte')
    //     })
    //  }
   
    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if(selectedText === "Bizerte"){
                alert('Welcome to Bizerte')
            }
            
        });
    });


    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if(selectedText === "Tunis"){
                alert('Tunis will be available soon..')
            }
            
        });
    });

    $(function () {
        $(".search-btn").click(function () {
            var selectedText = $(".search-selector").find("option:selected").text();
            if(selectedText === "Nabeul"){
                alert('Nabeul will be available soon..')
            }
            
        });
    });
    
})





