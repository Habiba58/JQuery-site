let abouOffest = $('#about').offset().top;
let colorBoxWidth = $(".color-box").innerWidth();
console.log(colorBoxWidth);
let defultWidth = 0 - colorBoxWidth;

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > (abouOffest - 50)) {
        $('#btnUp').fadeIn(2000);
        $('.main-nav').css("backgroundColor", "rgba(0,0,0,0.5)");
        $('.main-nav').css("paddingTop", "0px");
    }
    else {
        $('#btnUp').fadeOut(2000);
        $('.main-nav').css("backgroundColor", "transparent");
        $('.main-nav').css("paddingTop", "10px");
    }
});
$("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
});
$("a").click(function (e) {
    let aHref = $(e.target).attr("href");
    let sectionOffest = $(aHref).offset().top;
    $("html, body").animate({ scrollTop: sectionOffest }, 2000);
});

$("#toggle-Icon").click(function () {
    if ($("#sidebar").css("left") == "0px") {
        $("#sidebar").animate({ left: `-${colorBoxWidth}` }, 1000);
    }
    else {
        $("#sidebar").animate({ left: 0 }, 1000);
    }
});
let colorBoxes = $(".color-item");
colorBoxes.eq(0).css("backgroundColor", "tomato");
colorBoxes.eq(1).css("backgroundColor", "#09c");
colorBoxes.eq(2).css("backgroundColor", "orange");
colorBoxes.eq(3).css("backgroundColor", "teal");
colorBoxes.eq(4).css("backgroundColor", "aqua");
colorBoxes.eq(5).css("backgroundColor", "lightgreen");

$(".color-item").click(function(e){
    let changedColor= $(e.target).css("backgroundColor");
    $(".change").css("color", changedColor);
});