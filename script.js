//1. sabse pahle ye pata karo ke mouse rectangle par aaya and move hua  ..Done


//2. (i) ab  ye calculate karo hum center se left hai ya cennter se right par hai
/*2. (ii) ab ye calculate karo ke hum center se kitna left par hai, jitna left par 
hai utni intensity se red color lagao  ..Done*/


//  3. color - rgb(255, 255, 255)
// 0 - 255

var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    //console.log("hey");
    var rectanglelocation = rect.getBoundingClientRect();
 var insiderectval = details.clientX - rectanglelocation.left;
 
    if(insiderectval < rectanglelocation.width / 2){
       var redcolor = gsap.utils.mapRange( 0, rectanglelocation.width / 2, 255,  0, insiderectval
         );   
       gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,

       });
     }
    else {
        var bluecolor = gsap.utils.mapRange( rectanglelocation.width / 2,rectanglelocation.width, 0,  255, insiderectval
        );   
      gsap.to(rect, {
           backgroundColor: `rgb(0, 0, ${bluecolor})`,
           ease: Power4,

      }); 
       }

});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white",
    })
});