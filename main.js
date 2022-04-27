$(document).ready(function(){
    var i = 0;
    var facts =[
    {
        "image": "assets/skydiving.jpg",
        "fact":"&emsp;I have been skydiving before<br>&emsp;(at 14,000 feet!)",
        "caption": "Picture of Tia skydiving"
    },
    {
        "image": "assets/crochet.jpg",
        "fact":"&emsp;I love to crochet and knit!",
        "caption": "Picture of Tia's crocheted scarf"
    },
    {
        "image": "assets/piano.jpg",
        "fact":"&emsp;I play the piano, with my<br>&emsp;favorite piece being<br>&emsp;<i>Stickerbrush Symphony</i> from<br>&emsp;<i>Donkey Kong Country 2</i>",
        "caption": "Picture of Tia playing the piano"
    },
/*    {
        "image": "assets/piano.jpg",
        "fact":"I love to crochet and knit!"
    },*/
    ];
    $(".aboutButton").click(function(){
        i = (i+1)%facts.length;
        console.log(facts[i]);
        $(".changingImage").attr('src', facts[i].image);
        $(".changingImage").attr('alt', facts[i].caption);
        $(".changingFact").html(facts[i].fact);
    });
});

$(document).ready(function(){
    $('.backToTop').hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }
    });
    $(".backToTop").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
    });
});