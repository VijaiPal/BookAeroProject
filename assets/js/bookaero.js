
$(document).ready(function(){


// offer slider
        $("#offslide").owlCarousel({
            items: 1,
            margin:0,
            loop: true,
            nav:false,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            dots: true,
            rewind: true,
            autoplay: true,
            mouseDrag: true,
            singleItem: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            checkVisible: false,
            lazyLoad:true,
            responsive:{
                0:{
                    items:1,
                    dots:false
                },
                600:{
                    items:1,
                    dots:false
                },
                1000:{
                    items:1
                }
            }
        });


        $("#hotelslide").owlCarousel({
            items: 1,
            margin:0,
            loop: true,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            dots: false,
            rewind: true,
            autoplay: true,
            mouseDrag: true,
            singleItem: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            checkVisible: false,
            lazyLoad:true,
            responsive:{
                0:{
                    items:1,
                    dots:false
                },
                600:{
                    items:2,
                    dots:false
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });


        $("#adsslide").owlCarousel({
            items: 1,
            margin:0,
            loop: true,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            dots: false,
            rewind: true,
            autoplay: true,
            mouseDrag: true,
            singleItem: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            checkVisible: false,
            lazyLoad:true,
            responsive:{
                0:{
                    items:1,
                    dots:false
                },
                600:{
                    items:2,
                    dots:false
                },
                1000:{
                    items:3
                }
            }
        });

    });