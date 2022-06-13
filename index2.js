$('document').ready(function() {
    $('.btn').on('click', function() {
        let Width = $('#width').val();
        console.log(Width);
        let Height = $('#height').val();
        let NCol = $('#ncol').val();
        let calc = Width*Height*NCol/1024;
        console.log(calc);
        $("#result").append(calc);
})
})