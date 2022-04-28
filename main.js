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
        "fact":"&emsp;I love to crochet and knit! This is<br>&emsp;my most recent project, a scarf",
        "caption": "Picture of Tia's crocheted scarf"
    },
    {
        "image": "assets/piano.jpg",
        "fact":"&emsp;I play the piano, with my favorite<br>&emsp;piece being <i>River Flows in You</i><br>&emsp;by Yiruma",
        "caption": "Picture of Tia playing the piano"
    },
        {
        "image": "assets/ogden.jpg",
        "fact":"&emsp;My first job was at a local<br>&emsp;movie theater (which has now<br>&emsp;shut down :( )",
        "caption": "Picture of Ogden 6 Theater"
    },
        {
        "image": "assets/beatsaber.jpg",
        "fact":"&emsp;I love to play Beat Saber<br>&emsp;on VR in my free time!",
        "caption": "Picture of Beat Saber VR game"
    },
    {
        "image": "assets/cat.jpg",
        "fact":"&emsp;I don't have a pet, but I<br>&emsp;would like a cat in the future!<br>&emsp;This is my friend's cat Niu Niu",
        "caption": "Picture of friend's cat"
    }
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