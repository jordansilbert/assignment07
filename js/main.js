    //Implementing the Hide Me link
$(document).ready(function () {
    "use strict";
    
    $("footer a").click(function () {
        $("footer").hide();
    });
    
    //moving the car
    $("#car img").click(function () {
        $("#car img").animate({left: '478px'}, {duration: 1000});
    });
    
    //fading the ghost in and out
    $("#container p").click(function () {
        $("#ghost").fadeToggle(3000);
    });
    
});

//When "Fall Theme" is clicked, the background is orange/fall themed
function setFallTheme() {
    "use strict";
    $("nav").css("background-color", "#B0703C");
    $("body").css("background-color", "#DBA72E");
}
  
//When "Spring Theme" it reverts to original
function setSpringTheme() {
    "use strict";
    $("nav").css("background-color", "#1C4905");
    $("body").css("background-color", "#D8ECC3");
}





















































//to make car move define position:relative in css

//#car img

//$(document).ready(function () {
//    "use strict";
//});
