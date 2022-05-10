$(document).ready(function(){
 
    $(".slider").slick({ 
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
       
    })

        $(".btn-box >.center").click(function(){
    
            let num = $(this).index()
                
           $('.slider').slick('slickGoTo' , num );
          })


        $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            
            $(".center").text(nextSlide+1 + " / 8")
        });


        $(".btn-box >.prev").click(function(){
           $(".slider").slick("slickPrev")
        })

        $(".btn-box >.next").click(function(){
           $(".slider").slick("slickNext")
            
          });

 

//// 끝
})