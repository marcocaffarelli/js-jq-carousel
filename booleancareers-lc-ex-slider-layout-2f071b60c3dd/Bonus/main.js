$(function (){
    // Generiamo i pallini con JS
    // aggiungo 4 tag i al div di classe nav
    for (var index = 0; index <4; index++) {
        $('<i></i>').appendTo('.nav');
    };

    ////////////////////AGGIUNTA DI CLASSI ALL' HTML////////////////////

    //aggiungo le classi fas e fa-circle alle i appena aggiunte
    if ($('.nav i').hasClass('fas fa-circle')) {
    $('.nav i').removeClass('fas fa-circle');
    } else {
       $('.nav i').addClass('fas fa-circle');
    };
    //aggiunte anche le classi first e active al primo i
    $('.nav i:first').addClass('first active');
    // aggiunta classe second al secondo i
    $('.nav i:first').next().addClass('second');
    // aggiunta la classe second alla seconda img
    $('.images img:first').next().addClass('second');
    // aggiunta la classe third al terzo i 
    $('.nav i:last').prev().addClass('third');
    // aggiunta la classe third alla terza img
    $('.images img:last').prev().addClass('third');
    //aggiunta la classe last all'ultimo i
    $('.nav i:last').addClass('last');

    ////////////////////CREATE 2 VARIABILI PER LE FRECCE LATERALI////////////////////

    //Variabile collegata all'icona sinistra
    var indietro = $('div.prev i.fa-angle-left');
    //Variabile collegata all'icona destra
    var avanti = $('div.next i.fa-angle-right');

    //////////////////// FUNZIONI PER LO SCORRIMENTO DEL CAROSELLO////////////////////

    //funzione che al click dell'icona destra da la classe active all'img successiva e la toglie a quella che già la possiede
    avanti.click(function(){
        if($('img.last').hasClass('active')){
            $('img.last').removeClass('active') && $('img.first').addClass('active') && $('i.last').removeClass('active') && $('i.first').addClass('active');
        }else{
            $('img.active').next().addClass('active');
            $('i.active').next().addClass('active');
            $('img.active').prev().removeClass('active');
            $('i.active').prev().removeClass('active');
        };
    });

    //funzione che al click dell'icona sinistra da la classe active all'img precedente e la toglie a quella che già la possiede
    indietro.click(function(){
        if($('img.first').hasClass('active')){
            $('img.first').removeClass('active') && $('img.last').addClass('active') && $('i.first').removeClass('active') && $('i.last').addClass('active');
        }else{
            $('img.active').prev().addClass('active');
            $('i.active').prev().addClass('active');
            $('img.active').next().removeClass('active');
            $('i.active').next().removeClass('active');
        };
    });
    
    //funzione che al premere del tasto freccia destra nella tastiera passa la classe active all'img successiva e al premere della freccia sinistra nella tastiera passa la classe active all'img precedente
    $('html').keydown(function(e){
        if(e.keyCode == 37){
            if($('img.first').hasClass('active')){
                $('img.first').removeClass('active') && $('img.last').addClass('active') && $('i.first').removeClass('active') && $('i.last').addClass('active');
            }else{
                $('img.active').prev().addClass('active');
                $('i.active').prev().addClass('active');
                $('img.active').next().removeClass('active');
                $('i.active').next().removeClass('active');
            };
        } else if(e.keyCode == 39){
            if($('img.last').hasClass('active')){
                $('img.last').removeClass('active') && $('img.first').addClass('active') && $('i.last').removeClass('active') && $('i.first').addClass('active');
            }else{
                $('img.active').next().addClass('active');
                $('i.active').next().addClass('active');
                $('img.active').prev().removeClass('active');
                $('i.active').prev().removeClass('active');
            };
        };
    });
    
    //funzione che al premere di una delle icone a forma circolare cambia img 
    $('.nav i').click(function(){
        $('.nav i').removeClass('active') && $(this).addClass('active');
        if ($('i.first').hasClass('active')) {
            $('.images img').removeClass('active') && $('img.first').addClass('active');
        } else if ($('i.second').hasClass('active')) {
            $('.images img').removeClass('active') && $('img.second').addClass('active');
        } else if ($('i.third').hasClass('active')) {
            $('.images img').removeClass('active') && $('img.third').addClass('active');
        } else if ($('i.last').hasClass('active')) { 
            $('.images img').removeClass('active') && $('img.last').addClass('active');
        }
    });
});

