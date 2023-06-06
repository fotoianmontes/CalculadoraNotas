$(document).ready(function () {
    $('#button').click(function () {
        var t1 = $('#t1').val();
        var t2 = $('#t2').val();
        var t3 = $('#t3').val();
        var t4 = $('#t4').val();
        var t5 = $('#t5').val();
        var t6 = $('#t6').val();
        var t7 = $('#t7').val();
        var t8 = $('#t8').val();
        var total = ((t1 * 0.5) + (t2 * 0.5) + (t3 * 1) + (t4 * 2) + (t5 * 2) + (t6 * 1.5) + (t7 * 1.5) + (t8 * 1)) / 10;
        $('#total').val(total);
    });
})