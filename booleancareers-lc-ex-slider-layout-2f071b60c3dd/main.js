$(function (){
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
        }


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
        }
    });
});
        
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS