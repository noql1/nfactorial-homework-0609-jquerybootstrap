$('document').ready(function() {
    $('button').on('click', function() {
        console.log("hello")
        let Width = $('width').val();
        let Height = $('height').val();
        let NColors = $('ncol').val();
        let result = Width*Height*Ncolors/1024;
        let textResult= result.empty().append($('result')).val() + "KB";

        if(result<10){

        }
})
})