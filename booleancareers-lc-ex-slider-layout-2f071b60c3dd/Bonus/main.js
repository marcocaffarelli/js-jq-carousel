$(function (){
    // Generiamo i pallini con JS
    // aggiungo 4 tag i al div di classe nav
    for (var index = 0; index <4; index++) {
        $('<i></i>').appendTo('.nav');
    }

    //aggiungo le classi fas e fa-circle alle iappena aggiunte
    if ($('.nav i').hasClass('fas fa-circle')) {
    $('.nav i').removeClass('fas fa-circle');
    } else {
       $('.nav i').addClass('fas fa-circle');
    } 

    //Variabile collegata all'icona sinistra
    var indietro = $('div.prev i.fa-angle-left');
    //Variabile collegata all'icona destra
    var avanti = $('div.next i.fa-angle-right');

    //funzione che al click da la classe active all'img successiva e la toglie a quella precedente
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

    //funzione che al click da la classe active all'img precedente e la toglie a quella successiva
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
    
    //funzione che al premere del tasto freccia destra passa la classe active all'img successiva e al premere della freccia sinistra passa la classe active all'img precedente
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
 
});


// Clicchiamo sui pallini e mostriamo l’immagine corrispondente

    
