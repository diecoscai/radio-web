// Custom js code
! function($) {
    "use strict";

    var jQuery = $;

    jQuery(document).ready(function($) {

        // Main Slider Animation //
        ! function(e) {
            function t(t) {
                t.each(function() {
                    var t = e(this),
                        a = t.data("animation");
                    t.addClass(a).one("webkitAnimationEnd animationend", function() {
                        t.removeClass(a)
                    })
                })
            }
            var a = e("#carousel-example-generic"),
                o = a.find(".carousel-item:first").find("[data-animation ^= 'animated']");
            a.carousel(), t(o), a.carousel("pause"), a.on("click slide.bs.carousel", function(a) {
                t(e(a.relatedTarget).find("[data-animation ^= 'animated']"))
            })
        }

        // Mobile version menu
        (jQuery), $("#search_button").on("click", function(e) {
            $("#search_open").slideToggle(), e.stopPropagation()
        }), $(document).on("click", function(e) {
            e.target.closest("#search_open") || $("#search_open").slideUp()
        }),

        // Treanding wrapper slider
        // $(document).ready(function() {
        //     $(".treanding_song_slider .owl-carousel").owlCarousel({
        //         loop: !0,
        //         margin: 15,
        //         autoplay: !1,
        //         smartSpeed: 1200,
        //         responsiveClass: !0,
        //         navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        //         responsive: {
        //             0: {
        //                 items: 1,
        //                 nav: !0
        //             },
        //             600: {
        //                 items: 3,
        //                 nav: !0
        //             },
        //             1000: {
        //                 items: 5,
        //                 nav: !0,
        //                 loop: !0,
        //                 margin: 20
        //             }
        //         }
        //     })
        // }),

        // Unknown
        $(document).ready(function() {
            $(".ms_tranding_more_icon").on("click", function(e) {
                if (e.preventDefault(), e.stopImmediatePropagation(), void 0 !== $(this).attr("data-other")) var t = $(this).parent().parent();
                else t = $(this).parent();
                t.find("ul.tranding_more_option").hasClass("tranding_open_option") ? t.find("ul.tranding_more_option").removeClass("tranding_open_option") : ($("ul.tranding_more_option.tranding_open_option").removeClass("tranding_open_option"), t.find("ul.tranding_more_option").addClass("tranding_open_option"))
            }), $(document).on("click", function(e) {
                $("ul.tranding_more_option.tranding_open_option").removeClass("tranding_open_option")
            })
        });
			
        // Magnific popup
        $(".test-popup-link").magnificPopup({
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>',
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "https://www.youtube.com/embed/ryzOXAO0Ss0"
                    }
                }
            }
        });

        // Player
        var adonisObj = {};
        jQuery(document).ready(function(t) {
            adonisObj.toggleOffCanvas = function(e) {
                var a = t(e).hasClass("show") ? "hide" : "show";
                return "show" == a ? (t(e).addClass("show"), t("body").addClass("off-canvas-overlay-on")) : (t(e).removeClass("show"), t("body").removeClass("off-canvas-overlay-on")), "" == t(".off-canvas-overlay").attr("data-target") || void 0 === t(".off-canvas-overlay").attr("data-target") ? t(".off-canvas-overlay").attr("data-target", e) : t(".off-canvas-overlay").removeAttr("data-target"), a
            }, adonisObj.ajaxify = function() {
                if (!0 === filterlinks(_url)) {
                    if (t(this).parents(".off-canvas").length > 0) {
                        var a = t(this).parents(".off-canvas"),
                            o = void 0 !== a.attr("data-close-offcanvas-below") ? a.attr("data-close-offcanvas-below") : "";
                        t(window).outerWidth() < parseInt(o) && adonisObj.toggleOffCanvas(a)
                    }
                    e.preventDefault(), adonisObj.hideOffCanvas()
                }
            }, t(document).on("click", ".toggle-off-canvas,.off-canvas-overlay,.close-offcanvas", function(e) {
                e.preventDefault(), adonisObj.toggleOffCanvas(t(this).attr("data-target"))
            })
        });

        // Theme switch
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]'),
        currentTheme = localStorage.getItem("theme");

        function switchTheme(e) {
            e.target.checked ? (document.documentElement.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"))
        }

        currentTheme && (document.documentElement.setAttribute("data-theme", currentTheme), "dark" === currentTheme && (toggleSwitch.checked = !0)), toggleSwitch.addEventListener("change", switchTheme, !1);
    });
}(jQuery);