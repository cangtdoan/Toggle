var button = document.querySelector("button");
var images = document.getElementsByTagName('img');
var count = 1;
var x;
var y;

//show application that is degraded.
$(document).ready(function () {
    $('button').click(function () {
        // $('.logotest').toggle('slow');
        // $('.buttontest').toggle('slow');
        $('#myTable td').each(function() {
        $(this).toggleClass("disappear");   
        if ($('img', this).attr('title') == "Degraded" || $('img', this).attr('title') == "Unavailable"){
            $(this).toggleClass("show");
            // console.log("is belong to" + count);
            $(this).closest("td").next().toggleClass('show');
            // $(x).css('background','orange')
            $(this).closest("td").next().next().toggleClass('show');
        }
        count++;
    });
    });
});