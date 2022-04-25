$(document).ready(function(){
    var i = 0;
    var facts =[
    {
        "image": "assets/skydiving.jpg",
        "fact":"&emsp;I have been skydiving before<br>&emsp;(at 14,000 feet!)"
    },
    {
        "image": "assets/crochet.jpg",
        "fact":"&emsp;I love to crochet and knit"
    },
    {
        "image": "assets/piano.jpg",
        "fact":"&emsp;I have been playing the piano<br>&emsp;since six years old"
    },
/*    {
        "image": "assets/piano.jpg",
        "fact":"I love to crochet and knit!"
    },*/
    ];
    $("#aboutButton").click(function(){
        i = (i+1)%facts.length;
        console.log(facts[i]);
        $(".changingImage").attr('src', facts[i].image);
        $("#changingFact").html(facts[i].fact);
    });
});