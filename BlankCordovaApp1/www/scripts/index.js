$(document).ready(function () {

    // Modification de la taille de police du contenu des articles
    $(".ui-content").css({
        "font-size": "1em"});

    // test
    /*
    $('#changeStyle').click(function () {
        if ($("#mainContent").css('background-color') != "rgb(255, 0, 0)") {
            console.log($("#mainContent").css('background-color'));
            $("#mainContent").css({
                "font-size": "0.8em",
                "background-color": "red"
            });
        }
        else {
            $("#mainContent").css({
                "font-size": "0.8em",
                "background-color": "yellow"
            });
        }
    });
    */

    /*
    $('#openpanel').click(function () {
        $('#box').animate({ 'bottom': '0' }, 300);
    });

    $('#close').click(function () {
        $('#box').animate({ 'bottom': '-100%' }, 300)
    });
    */

    $('#minusTime').click(function (e) {
        e.preventDefault();
        let time = parseInt($('#resultTime').html());
        if(time >= 5)
            time -= 5;
        $('#resultTime').html(time.toString());
    });

    $('#plusTime').click(function (e) {
        e.preventDefault();
        let time = parseInt($('#resultTime').html());
        time += 5;
        $('#resultTime').html(time.toString());
    });
    /*
    $("#changeTheme").click(function (e) {
        e.preventDefault();
        console.log($("#mainPage").attr("data-theme"));
        if ($("#mainPage").attr("data-theme") == "a") {
            $("#mainPage").attr("data-theme", "b")
        }
        else {
            $("#mainPage").attr("data-theme", "a")
        }
    });
    */
});