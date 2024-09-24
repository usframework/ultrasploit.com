
function check() {
    var width = $(document).width();
    
    if ( width <= 320 ) {
        $(".lichess_tv").css('width', '250px');
        console.log('sexy!');

    }   else if ( width <= 480 ) {
        $(".lichess_tv").css('width', '300px');
        console.log('sexy!');
        
    }   else {
        $(".lichess_tv").css('width', '400px');

    }
    
}

check();
$(window).resize(function () { 
    check();
});