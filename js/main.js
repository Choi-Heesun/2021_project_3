$(document).ready(function(){

    /* 헤더메뉴*/
    $(".header_menu > li > ul").hide();

    $(".header_menu > li").mouseover(function(){
        $(this).children(".header_menu > li > ul").stop().slideDown('fast')
    }).mouseout(function(){
        $(this).children(".header_menu > li > ul").stop().slideUp('fast')
    });


    /* 메뉴 토글 */
    $(".menu_click").click(function(){
        $(".header_menu").stop().slideToggle();
    })
    

    /* 메인 이미지 슬라이더 */
    var i = 0;
    function mainSlide(){
        
        i++;
        if(i >  $(".slider > li:last").index()){
            i=0
        }

        $(".slider > li").eq(i).fadeIn();
        $(".slider > li").eq(i-1).fadeOut();
    }

    setInterval(mainSlide,3000);

    /* 영상 링크 슬라이더 */
    function videoLinkSlider(){
        var videoWidth = $(".video_slide > li").css('width');

        $("#video_wrap > .next").click(function () {
            $(".video_slide").stop().animate({ marginLeft: "-" + videoWidth}, function () {
                $(".video_slide > li:first-of-type").appendTo(".video_slide");
                $(".video_slide").css({ marginLeft: 0 });
            });
       });
   
       $("#video_wrap > .prev").click(function () {
           $(".video_slide > li:last-of-type").prependTo(".video_slide");
           $(".video_slide").css({ marginLeft: "-" + videoWidth });
           $(".video_slide").animate({ marginLeft: 0 });
      });
    }

    videoLinkSlider();

   /* 카운트다운박스 */
   function countDown(){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let festivalopen = "dec 30, 2021 00:00:00",
        countDown = new Date(festivalopen).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        }, 0)

    }
    countDown();

    /* 플레이리스트 */
    
    function playList(){
        const myAudio = [
            new Audio("audio/Frau-Power.mp3"),
            new Audio("audio/Black-Hole-Sun.mp3"),
            new Audio("audio/Memories_Of_Paradise.mp3"),
            new Audio("audio/Paranoia-Overflow.mp3"),
            new Audio("audio/Altered_Song.mp3"),
            new Audio("audio/Blue_Ghost.mp3"),
            new Audio("audio/Broken-Song.mp3")
        ];

        $(".playbtn_icon").click(function(){
           

            var i = $(this).closest('tr').index();

            $(this).hide();
            $(this).siblings(".stopbtn_icon").show();
            
            
            myAudio[i].play();
            myAudio[i].volume = 0.3;

            $(".stopbtn_icon").click(function(){
                $(this).hide();
                $(this).siblings(".playbtn_icon").show();

                myAudio[i].pause();
            });

            myAudio[i].addEventListener("ended",function(){
                $(".stop").hide();
                $(".play").show();
            });
        });
    }

    playList();


    
    /*헤더 스크롤*/
    function scrollHeader(){
        $(window).scroll(function(){
           var scroller = $(window).scrollTop();

          if(scroller > 800) {
                $(".backAni").stop().animate({marginTop:0});
                $("header").css("box-shadow","0 0 20px rgba(255, 0, 100, 0.2)")
                                    
            } else {
                $(".backAni").stop().animate({marginTop:-120});
            }
        });
    };
    scrollHeader();
    
});