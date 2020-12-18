//console.log('test')
$(document).ready(function () {

    $('.modal').hide()
    
    $('#signup-button').click(function(){
        $('.modal').show()

    })
    

     var sel = document.getElementsByClassName('search-selector')
     
     if (sel.option[1].selected === true){
        $('.search-btn').click(function(){

            alert('bizerte')
        })
    
   
}

})






