new WOW().init();

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

$('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
});


$(document).ready(function () {
    var owl = $("#teacherCarousel");
    
    owl.owlCarousel({
        loop: true,
        margin: 20,
        // nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });

    $(".button-ctrl label").click(function () {
        var slideIndex = $(this).attr("data-slide");
        owl.trigger("to.owl.carousel", [slideIndex, 500]);
    });

    owl.on("changed.owl.carousel", function (event) {
        var currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        var totalSlides = event.item.count;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        $(".button-ctrl label").removeClass("active");
        $('.button-ctrl label[data-slide="' + currentIndex + '"]').addClass("active");
    });
});

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    getSortData: {
        category: '[data-category]'
    }
});


$(document).ready(function () {
    var owl = $("#badgeCarousel");

    owl.owlCarousel({
        loop: true,
        margin: 20,
        // nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });

    $(".button-ctrl label").click(function () {
        var slideIndex = $(this).attr("data-slide");
        owl.trigger("to.owl.carousel", [slideIndex, 500]);
    });

    owl.on("changed.owl.carousel", function (event) {
        var currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        var totalSlides = event.item.count;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        $(".button-ctrl label").removeClass("active");
        $('.button-ctrl label[data-slide="' + currentIndex + '"]').addClass("active");
    });
});
