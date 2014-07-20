$(document).ready(function(){
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 2){
            clearInterval(interval);
        }
        $('.jumbotron').ready(function() {
            $( ".jumbotron" ).fadeTo('slow', 0.3, function(){
                $('.jumbotron').fadeTo('slow',0.9);
            });
            $( ".jumbotron" ).fadeTo('slow', 1);
        });
    }, 2000);
});