$(function(){
    let currentIndex = 0

    $('.slider_wrap').append($('.slide').first().clone(true));

    setInterval (() => {
        currentIndex++;
        $('.slider_wrap').animate({marginLeft: -100 * currentIndex + "%"},600)  

        if(currentIndex == 3){  
            setTimeout(() => {
                $('.slider_wrap').animate({marginLeft: 0}, 0);  
                currentIndex = 0;  
            }, 700);
        }
    },3000);
});

// $(function(){
//     let currentIndex = 0; //현재 이미지
//     $(".slider_wrap").append($(".slide").first().clone(true)); //첫번째 이미지를 복사해서 마지막에 추가

//     setInterval(() => {
//         currentIndex++;     //혅재 이미지를 1씩 추가
//         $(".slider_wrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);   //이미지 애니메이션

//         if(currentIndex == 3){  //마지막 이미지
//             setTimeout(() => {
//                 $(".slider_wrap").animate({marginLeft: 0}, 0);   //애니메이션 정지
//                 currentIndex = 0;   //현재 이미지 초기화
//             }, 700);
//         }
//     }, 3000);
// });
