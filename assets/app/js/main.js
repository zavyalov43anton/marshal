$('.single-slide').slick({
    dots: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 510,
            settings: {
                dots: false
            }
        }
    ]
});