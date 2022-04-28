/*Fun Fact Generator*/

/*Source: https://stackoverflow.com/questions/16549183/jquery-iterate-through-an-array-by-using-onclick*/
/*Source: https://wpbeaches.com/swap-image-via-button-with-jquery/*/
/*Source: https://stackoverflow.com/questions/56951465/how-to-replace-innerhtml-with-jquery*/
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

/*Back to Top Portfolio Page Button*/

/*Source: https://stackoverflow.com/questions/14249998/jquery-back-to-top*/
/*Source: https://deepmikoto.com/coding/3--how-to-create-back-to-top-button-using-jquery-and-some-css*/
/*Source: https://electrictoolbox.com/jquery-hide-text-page-load-show-later/#:~:text=Document%20ready,-%24(document).&text=your%20Javascript%20files%3A-,%24(document).,loaded%20and%20will%20then%20hide*/
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