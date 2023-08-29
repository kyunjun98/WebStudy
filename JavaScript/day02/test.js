// AWARDS -> Swiper
new Swiper('.awards .swiper', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5, // 한 페이지당 보려고 하는 슬라이드 개수
    navigation : {
        prevEl : '.awards .swiper-prev', // 이전슬라이드 보는 버튼
        nextEl : '.awards .swiper-next' // 다음슬라이드 보는 버튼
    }
});