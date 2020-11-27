$(function (){
    //Variabile collegata all'icona sinistra
    var indietro = $('div.prev i.fa-angle-left');
    //Variabile collegata all'icona destra
    var avanti = $('div.next i.fa-angle-right');

    //funzione che al click da la classe active all'img successiva e la toglie a quella precedente
    avanti.click(function(){
        $('img.active').next().addClass('active');
        $('img.active').prev().removeClass('active');
    });

    //funzione che al click da la classe active all'img precedente e la toglie a quella successiva
    indietro.click(function(){
        $('img.active').prev().addClass('active');
        $('img.active').next().removeClass('active');
    });
});
        