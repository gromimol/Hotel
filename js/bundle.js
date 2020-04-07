$(function() {! function() { var t = function(t) { for (var e = window.location.search.substring(1).split("&"), i = 0; i < e.length; i++) { var o = e[i].split("="); if (o[0] == t) return o[1] } return !1 }("anchorId"); if (t) { var e = $("#" + t),
                i = $("header").height();
            $("html, body").animate({ scrollTop: e.offset().top - i - 40 }, 500) } }() }), $(function() { $("[data-ripple]").on("click", function(t) { var e = $(this),
            i = e.data("ripple") || "white";
        $(e).append("<span class='ripple-effect ripple-effect-" + i + "'>"), $(e).find(".ripple-effect").css({ left: t.pageX - $(e).offset().left, top: t.pageY - $(e).offset().top }).animate({ opacity: 0 }, 1e3, function() { $(this).remove() }) }) }), $(function() { $(".dropdown").click(function(t) { t.preventDefault(), t.stopPropagation(), $(this).toggleClass("-expanded"), $("#" + $(t.target).attr("for")).prop("checked", !0) }), $(document).click(function() { $(".dropdown").removeClass("-expanded") }) }), $(function() { $(".elevator").on("click", function() { $("html, body").animate({ scrollTop: 0 }, 500) }) }), $(window).on("load", function() { $(document).on("input keyup", ".form__control", function() { "" != $(this).val() ? $(this).parent().addClass("-active") : $(this).parent().removeClass("-active") }), $(document).on("focus", ".form__control", function() { $(this).parent().addClass("-focus") }), $(document).on("focusout", ".form__control", function() { $(this).parent().removeClass("-focus") }), $("[data-vue]").length && $.when($.getScript("//npmcdn.com/flatpickr/dist/flatpickr.min.js")).done(function() { $.when($.getScript("//npmcdn.com/flatpickr/dist/l10n/ru.js"), $.getScript("//cdn.jsdelivr.net/npm/vue"), $.getScript("//unpkg.com/vue-flatpickr-component@6"), $.Deferred(function(t) { $(t.resolve) })).done(function() { Vue.component("flat-pickr", VueFlatpickr), new Vue({ el: "[data-vue]", data: { data: {}, loaded: !1, setting: { time: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"], calendar: { defaultDate: "today", altInput: !0, altFormat: "j, F Y", dateFormat: "d-m-Y", time_24hr: !0, locale: document.documentElement.lang, disableMobile: !0 } }, lang: "", submitURL: "", submitted: !1, state: "", error: !1 }, mounted: function() { this.submitURL = this.$el.action, this.lang = document.documentElement.lang, this.loaded = !0 }, methods: { submit: function() { var t = Object.assign({}, this.data),
                            e = this;
                        void 0 !== this.formatting && (t = this.formatting(t)), console.log("send", t), e.submitted = !0, e.error = !1, $.post(this.submitURL, JSON.stringify(t)).then(function(t) { e.state = t.state, t.success || (e.submitted = !1, e.error = !0) }).catch(function(t) { console.log(t) }) } } }), $("[data-vue]").removeClass("-loading") }) }) }), $(function() { $("[data-fancybox]").length && $.getScript("/bitrix/templates/template6/public/js/vendor/jquery.fancybox.min.js", function() { $.fancybox.defaults.buttons = ["fullScreen", "zoom", "close"], $("[data-fancybox-link]").on("click", function() { var t = $(this).data("fancybox-link"); return $.ajax({ type: "POST", url: t, dataType: "json", success: function(t) { $.fancybox.open(t, { loop: !0, buttons: ["slideShow", "fullScreen", "thumbs", "zoom", "close"], animationEffect: "fade", animationDuration: 500, transitionEffect: "slide", transitionDuration: 366, hash: null, slideShow: { autoStart: !0, speed: 4e3 } }) } }), !1 }) }) }), $(function() { $(document).ready(function() { $("[data-hover]").click(function(t) { var e = $(this),
                i = e.attr("data-hover");
            e.toggleClass(i) }) }), $(document).on("scroll", function() { $.each($("[data-hover]"), function(t, e) { var i = $(e).attr("data-hover");
            $(e).removeClass(i) }) }) }), $(window).on("load", function() {! function() { var o = document.querySelectorAll("[data-lazyload]"); if (o.length) { if (window.loadSlideImage = function(t, e) { e = null != e ? e : 0; var i = $(t).find('.slider__item[data-slick-index="' + e + '"]');
                    o = i.find("[data-lazyload]"), Array.prototype.forEach.call(o, function(t) { n(t) }) }, window.loadSectionImage = function(t) { var e = t.find("[data-lazyload]");
                    Array.prototype.forEach.call(e, function(t) { n(t) }) }, "IntersectionObserver" in window) { var e = new IntersectionObserver(function(t, e) { Array.prototype.forEach.call(t, function(t) { 0 < t.intersectionRatio && (e.unobserve(t.target), n(t.target)) }) }, { rootMargin: "300px 0px", threshold: 0 });
                Array.prototype.forEach.call(o, function(t) { e.observe(t) }) } else Array.prototype.forEach.call(o, function(t) { n(t) }) }

        function n(t) { var e = t.getAttribute("data-lazyload");
            null != e && ("IMG" === t.tagName ? t.setAttribute("src", e) : "SOURCE" === t.tagName ? t.setAttribute("srcset", e) : t.style.backgroundImage = 'url("' + e + '")', t.removeAttribute("data-lazyload")) } }() }), $(function() { var f = $(window);
    setTimeout(function() { $(".hr, .-bottom-line, .route").viewportChecker({ classToAdd: "-show" }), $(".ef-show").viewportChecker({ classToAdd: "-run", offset: "-10%" }), $("[data-vp-add-class]").viewportChecker() }, 250),
        function() { f.on("load", function() { $(".header__container.-search-form").addClass("mx-opacity") }); var o = $("[data-accortab]"),
                n = o.find(".accortab__pagination"),
                r = o.find(".accortab__container"),
                a = r.find(".accortab__item"),
                l = a.length,
                c = o.data("accortab-step"),
                s = l,
                e = o.data("accortab-fullsize-breakpoint"),
                i = o.data("accortab-halt-breakpoint");
            a.each(function(t) { $(this).css("top", c * t).css("right", c * t).css("z-index", s - t), $(this).attr("atabindex", t); var e = $(this).data("title"),
                    i = $(this).data("content");
                e && i ? n.append('<div class="accortab__pagination-item"><h2 class="h3 accortab__pagination-title">' + e + '</h2><div class="accortab__pagination-text">' + i + "</div></div>") : n.append('<div class="accortab__pagination-item"><h2 class="h3 accortab__pagination-title">' + e + "</h2></div>"), l <= 1 && $(".accortab__pagination-item").addClass("-type-cursor-default") }); var d = n.find(".accortab__pagination-item");
            d.first().addClass("-active"), a.first().addClass("-active"), d.each(function(t) { $(this).attr("atabindex", t) }), d.each(function() { $(this).on("click", function() { var t;
                    f.width() >= i && (d.removeClass("-active"), a.removeClass("-active"), $(this).addClass("-active"), t = $(this).attr("atabindex"), a.each(function() { $(this).css("top", 0).css("right", 0).css("z-index", s) }).promise().done(function() { a.each(function() { $(this).attr("atabindex") === t && (r.prepend($(this)), $(this).addClass("-active")) }).promise().done(function() { r.find(".accortab__item").each(function(t) { $(this).css("top", c * t).css("right", c * t).css("z-index", s - t) }) }) })) }) }), a.each(function() { $(this).on("click", function() { var e = $(this).attr("atabindex");
                    d.each(function() { var t = $(this).attr("atabindex"); if (e === t) return $(this).click(), !1 }) }) }); var u = !1,
                h = !1;
            f.on("resize", function(t) { f.width() >= i ? (a.each(function(t) { $(this).css("top", c * t).css("right", c * t).css("z-index", s - t) }), h = !0, e <= f.width() ? function() { var t = 0,
                        e = 0;
                    a.each(function() { t += $(this).height(), e += $(this).width() }); var i = t / l,
                        o = c * (l - 1),
                        n = e / l,
                        s = c * (l - 1);
                    r.height(i + o), r.width(n + s), a.each(function() { $(this).width("auto") }) }() : function() { var t = 0;
                    a.each(function() { t += $(this).height() }); var e = t / l,
                        i = c * (l - 1);
                    r.height(e + i), r.width(f.width()), a.each(function() { $(this).width(o.width() - c) }) }()) : (a.each(function() { $(this).width("100%").css("top", 0).css("right", 0) }), r.height("auto"), r.width("100%"), h = !1), u === h && (o.toggleClass("-reset"), u = !u) }).resize(), $("[data-scroll-down]").on("click", function() { var t = $(this).closest("[data-section]"),
                    e = t.height(),
                    i = t.offset().top + e;
                $("html, body").animate({ scrollTop: i }, 800) }) }() });
var isMobile = { Android: function() { return navigator.userAgent.match(/Android/i) }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function() { return navigator.userAgent.match(/IEMobile/i) }, any: function() { return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() } };
$(function() {! function() { var t = $("html").attr("lang"),
                r = $("#map"),
                e = !0 === r.data("offset"),
                a = $(window); if (r.length) { if ("IntersectionObserver" in window) { new IntersectionObserver(function(t, e) { t.forEach(function(t) { 0 < t.intersectionRatio && (e.unobserve(t.target), i()) }) }, { rootMargin: "500px 0px", threshold: 0 }).observe(r[0]) } else i() }

            function i() { $.getScript("//api-maps.yandex.ru/2.1/?lang=" + t, function() { ymaps.ready(function() {! function() { if ("object" == typeof hotelMarker) { var t = hotelMarker.location,
                                    n = new ymaps.Map("map", { behaviors: ["drag", "dblClickZoom", "multiTouch", "zoom"], center: t, controls: [], zoom: 15 }),
                                    s = n.getGlobalPixelCenter();
                                n.controls.add("zoomControl", { size: "small", position: { bottom: 45, right: 15 } }), isMobile.any() && n.behaviors.disable("drag"), n.geoObjects.add(new ymaps.Placemark(t, { hintContent: hotelMarker.title }, { iconLayout: ymaps.templateLayoutFactory.createClass('<div class="map__marker icon-map"></div>'), iconShape: { type: "Rectangle", coordinates: [
                                            [-25, -25],
                                            [50, 50]
                                        ] }, iconOffset: [-25, -40] })) } e && a.on("resize", function() { var t, e, i = r.width(),
                                    o = i / 4;
                                t = o, e = $("#map").height(), a.width() < 480 ? n.setGlobalPixelCenter([s[0], s[1] - e / 3]) : n.setGlobalPixelCenter([s[0] - t, s[1]]) }).resize() }() }) }) } }() }), $(function() { var i, e, t, o, n, s, r;
        i = $(".header"), e = $(".header__menu"), t = $(".nav__panel"), o = $(".menu.-header"), n = $(".nav"), s = $(".nav__close"), r = n.find(".nav__container"), $(window).on("scroll", function() { if ($("body").hasClass("type-main")) { var t = $(window).scrollTop(),
                    e = $(".header__container.-search-form");
                n.hasClass("-show") ? (setTimeout(function() { e.addClass("-show") }, 300), i.removeClass("-fixed")) : 240 < t ? (i.addClass("-fixed"), e.removeClass("-show")) : (i.removeClass("-fixed"), e.addClass("-show")) } else i.addClass("-fixed") }).scroll(), e.on("click", function() { $(window).scrollTop(), !n.hasClass("-show") && e.hasClass("-fixed") || ($("html").addClass("mx-no-scroll"), n.addClass("-show"), o.addClass("-show")) }), s.on("click", function() { o.removeClass("-show"), setTimeout(function() { $("html").removeClass("mx-no-scroll"), n.removeClass("-show"), e.removeClass("-open") }, 350) }), t.on("click", function() { var t = $(window).scrollTop();
            setTimeout(function() { 0 < t && setTimeout(function() { i.addClass("-fixed") }, 710) }, 10), o.removeClass("-show"), setTimeout(function() { n.removeClass("-show"), $("html").removeClass("mx-no-scroll"), e.removeClass("-open"), setTimeout(function() { e.removeClass("-fixed") }, 450) }, 350) }), $(window).on("resize scroll", function() { var t = (r.height() - o.height()) / 2;
            o.css({ top: t < 0 ? 0 : t }) }).resize() }), $(function() { var t;
        (t = $("[data-more-control-close]")) && t.each(function() { var t = $(this),
                e = t.find("[data-more-block]").data("more-block");
            t.css("position", "relative"), t.append('<div class="control -close" data-closing-block="' + e + '"><i class="icon-close"></i></div>') }), $("[data-more-control]").on("click", function() { var t, e = $(this),
                i = $(this).data("more-control"),
                o = $(this).find("span").text(),
                n = window.hide,
                s = window.more;
            e.data("show-text") && e.data("hide-text") && (n = e.data("hide-text"), s = e.data("show-text")), o == s ? $(this).html("<span>" + n + "</span>") : $(this).html("<span>" + s + "</span>"), t = i, $("body").find("[data-more-block=" + t + "]").toggleClass("mx-unvisible", 1e3, "easeOutSine"), e.closest("[data-more-control-parent]") && e.closest("[data-more-control-parent]").toggleClass("-active") }), $(".control.-close").on("click", function() { var t = $(this).data("closing-block");
            $("body").find("[data-more-control=" + t + "]").click() }) }),
    function() { if ($(".cookie-notification").length) { $(".cookie-notification").addClass("show"); var t = document.querySelector(".cookie-notification");

            function e() { $(t).addClass("cookie-notification_hidden") }

            function i() { e(), Cookies.set("_tl-agreement", "1"), Cookies.set("_tl-marketing", "1"), initMarketing() } Cookies.get("_tl-agreement") ? "1" == Cookies.get("_tl-marketing") && i() : $(t).removeClass("cookie-notification_hidden"), $("#yes").on("click", function() { $("#marketing-no").is(":checked") ? (e(), Cookies.set("_tl-agreement", "1"), Cookies.set("_tl-marketing", "0")) : $("#marketing").is(":checked") && ($("#marketing").attr("checked", "true"), i()) }) } }(), $(function() { 0 < $(".baron").length && baron({ root: ".baron", scroller: ".baron__scroller", bar: ".baron__bar", scrollingCls: "_scrolling", draggingCls: "_dragging" }).controls({ track: ".baron__track" }) }), $(window).on("load", function() {! function() { $(".header"), $("#search-form-toggle"), $("#search-form"), $(".search-form__close"); var t = $(".header__container.-search-form");
            $(".button.-header").on("click", function() { t.toggleClass("-show") }) }() });
var bpMobile = 480;
$(document).ready(function() { var g;
        g = $(window), $(".slider").length && $.getScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js", function() { var t, e, i, o, n, s, r, a, l, c, d, u, h, f, p, v, m;
            p = $(".slider.-main"), v = p.find(".slider__container"), m = $('*[data-pagination="slider-main"]'), p.length && v.slick({ lazyLoad: "progressive", fade: !0, infinite: !0, slidesToShow: 1, arrows: !0, dots: !1, autoplay: !0, autoplaySpeed: 5e3, appendArrows: m, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>' }), d = $(".slider.-type-rooms"), u = d.find(".slider__container"), h = $('*[data-pagination="rooms-main"].-to-tablet'), f = $('*[data-pagination="rooms-main"].-from-tablet'), d.length && u.slick({ lazyLoad: "progressive", dots: !1, slidesToScroll: 2, slidesToShow: 2, infinite: !0, appendArrows: h, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>', useTransform: !0, cssEase: "cubic-bezier(0.770, 0.000, 0.575, 1.000)", responsive: [{ breakpoint: 769, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 640, settings: { appendArrows: f, slidesToShow: 1, slidesToScroll: 1 } }] }),
                function() { var t = $(".slider.-type-offers"),
                        e = t.find(".slider__container"),
                        i = $('*[data-pagination="offers-main"].-to-tablet'),
                        o = $('*[data-pagination="offers-main"].-from-tablet'),
                        n = t.data("item-count"); if (t.length) { var s = 3,
                            r = 2,
                            a = 1;
                        n < 3 && (r = s = n, a = 1), e.slick({ lazyLoad: "progressive", slidesToShow: s, slidesToScroll: s, dots: !1, appendArrows: i, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>', responsive: [{ breakpoint: 992, settings: { slidesToShow: r, slidesToScroll: r } }, { breakpoint: 640, settings: { appendArrows: o, slidesToScroll: a, slidesToShow: a } }] }) } }(),
                function() { var e = $(".slider.-services"),
                        i = e.find(".slider__container"),
                        o = !1;

                    function t() { var t = $(this).width(); if (t < bpMobile) { if (!o) { if (!e.length) return;
                                i.slick({ lazyLoad: "ondemand", slidesToShow: 1, centerMode: !0, dots: !1, arrows: !1, variableWidth: !0, infinite: !0 }) } o = !0 } else o && i.slick("unslick"), o = !1 } g.on("resize", function() { t() }), t() }(), a = $(".slider.-type-news"), l = a.find(".slider__container"), c = $('*[data-pagination="news-main"]'), a.length && l.slick({ lazyLoad: "ondemand", slidesToShow: 1, dots: !1, appendArrows: c, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>' }), n = $(".slider.-type-reviews"), s = n.find(".slider__container"), r = $('*[data-pagination="reviews-main"]'), n.length && s.slick({ lazyLoad: "ondemand", slidesToShow: 1, dots: !1, appendArrows: r, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>' }), (o = $(".slider.-inner-primary")).length && o.each(function() { var t = $(this),
                        e = t.find(".slider__container"),
                        i = t.find(".slider__arrows");
                    e.slick({ lazyLoad: "ondemand", slidesToShow: 1, dots: !1, appendArrows: i, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>' }) }), t = $(".slider.-content"), e = t.find(".slider__container"), i = t.find(".slider__arrows"), t.length && e.slick({ lazyLoad: "ondemand", slidesToShow: 1, dots: !1, appendArrows: i, prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>' }),
                function() { var t = $(".slider.-content-pv"),
                        e = t.find(".slider__container.-images"),
                        i = t.find(".slider__container.-thumbnails"); if (t.length) { var o = e.slick({ lazyLoad: "ondemand", slidesToScroll: 1, slidesToShow: 1, swipeToSlide: !0, infinite: !0, dots: !1, arrows: !1, autoplay: !0, pauseOnHover: !0, fade: !0, asNavFor: i, slide: ".slider__item" }),
                            n = i.slick({ lazyLoad: "ondemand", slidesToScroll: 1, infinite: !0, slidesToShow: 4, swipeToSlide: !0, slide: ".slider__item", dots: !1, arrows: !1, autoplay: !0, vertical: !0, focusOnSelect: !0, asNavFor: e }),
                            s = e.find(".slider__item").length;
                        s < 5 && (o.slick("slickSetOption", "refresh", !0, !0), n.slick("slickSetOption", "infinite", !1, !1), n.slick("slickSetOption", "slidesToScroll", s, !0), n.slick("slickSetOption", "focusOnSelect", !1, !1)) } }(), $("body").find("[data-slider-thumbnailed]").each(function() { var t = $(this),
                        e = $(this).find(".image"),
                        i = ""; if (e.each(function() { var t = $(this).css("background-image").replace("url(", "").replace(")", "").replace(/\"/gi, "");
                            i += '<div class="slider__item -thumbnail"><div class="image" style="background-image:url(' + t + ');"></div></div>' }), e.length < 10)
                        for (var o = e.length; o < 10; o++) i += '<div class="slider__item -thumbnail -blank"></div>';
                    t.append('<div class="slider__container -thumbnails">' + i + "</div>") }), $(".slider.-gallery").each(function() { var t = $(this),
                        e = (t.find(".slider__container"), t.find(".slider__post-container")),
                        i = t.find(".slider__arrows"),
                        o = t.find(".slider__dots-container");
                    t.length && e.slick({ lazyLoad: "ondemand", slidesToShow: 1, dots: !0, infinite: !1, appendArrows: i, appendDots: o, dotsClass: "slider__dots", prevArrow: '<div class="slider__arrow -prev"><i class="icon icon-left"></i></div>', nextArrow: '<div class="slider__arrow -next"><i class="icon icon-right"></i></div>', customPaging: function(t, e) { var i = $(t.$slides[e]).find(".image").data("thumb") || ""; return '<div class="image" style="background-image: url(' + i + ')"></div>' }, responsive: [{ breakpoint: 640, settings: { dots: !1 } }] }) }), $(".slider:not(.-gallery)").on("beforeChange", function(t, e, i, o) { 1 < e.options.slidesToShow && (o += e.options.slidesToShow - 1), loadSlideImage(this, o) }) }) }), $(function() { $(".tabs__select-element ").first().addClass("-active"), $(".tabs__nav-item").on("click", function() { var t = $(this),
                e = t.data("content-ref-id");
            t.addClass("-active").siblings().removeClass("-active"), $("[data-content-id=" + e + "]").addClass("-active").siblings().removeClass("-active"), $(".tabs__select option[value=" + e + "]").attr("selected", "true"), $("#" + e).prop("checked", !0) }), $(".tabs__select-element").on("click", function() { var t = $(this).data("content-ref-id");
            $("[data-content-id=" + t + "]").addClass("-active").siblings().removeClass("-active"), $("[data-content-ref-id=" + t + "]").addClass("-active").siblings().removeClass("-active") }) }),
    function(i) { var o = {};

        function n(t) { if (o[t]) return o[t].exports; var e = o[t] = { i: t, l: !1, exports: {} }; return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports } n.m = i, n.c = o, n.i = function(t) { return t }, n.d = function(t, e, i) { n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: i }) }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 5) }([function(t, e, i) { "use strict"; var r = !1; try { var o = Object.defineProperty({}, "passive", { get: function() { r = !0 } });
            window.addEventListener("test", null, o) } catch (t) {}

        function n(t, e) { for (var i in t) t.hasOwnProperty(i) && e(i, t[i]) } t.exports.event = function(i, t, o, e) { var n = t.split(" "),
                s = "on" == e ? "add" : "remove";
            n.forEach(function(t) { var e = !1; - 1 != ["scroll", "touchstart", "touchmove"].indexOf(t) && r && (e = { passive: !0 }), i[s + "EventListener"](t, o, e) }) }, t.exports.css = function(i, t, e) { var o; if (void 0 === e) { if ("string" == typeof t) return i.style[t];
                o = t } else(o = {})[t] = e;
            n(o, function(t, e) { i.style[t] = e }) }, t.exports.add = function(t, e) { e && t.classList.add(e) }, t.exports.rm = function(t, e) { e && t.classList.remove(e) }, t.exports.has = function(t, e) { return !!e && t.classList.contains(e) }, t.exports.clone = function(t) { var i = {}; return n(t || {}, function(t, e) { i[t] = e }), i }, t.exports.qs = function(t, e) { return t instanceof HTMLElement ? t : (e || document).querySelector(t) }, t.exports.each = n }, function(t, e) { var i, o, n = t.exports = {};

        function s() { throw new Error("setTimeout has not been defined") }

        function r() { throw new Error("clearTimeout has not been defined") }

        function a(e) { if (i === setTimeout) return setTimeout(e, 0); if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0); try { return i(e, 0) } catch (t) { try { return i.call(null, e, 0) } catch (t) { return i.call(this, e, 0) } } }! function() { try { i = "function" == typeof setTimeout ? setTimeout : s } catch (t) { i = s } try { o = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { o = r } }(); var l, c = [],
            d = !1,
            u = -1;

        function h() { d && l && (d = !1, l.length ? c = l.concat(c) : u = -1, c.length && f()) }

        function f() { if (!d) { var t = a(h);
                d = !0; for (var e = c.length; e;) { for (l = c, c = []; ++u < e;) l && l[u].run();
                    u = -1, e = c.length } l = null, d = !1,
                    function(e) { if (o === clearTimeout) return clearTimeout(e); if ((o === r || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e); try { o(e) } catch (t) { try { return o.call(null, e) } catch (t) { return o.call(this, e) } } }(t) } }

        function p(t, e) { this.fun = t, this.array = e }

        function v() {} n.nextTick = function(t) { var e = new Array(arguments.length - 1); if (1 < arguments.length)
                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            c.push(new p(t, e)), 1 !== c.length || d || a(f) }, p.prototype.run = function() { this.fun.apply(null, this.array) }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, n.listeners = function(t) { return [] }, n.binding = function(t) { throw new Error("process.binding is not supported") }, n.cwd = function() { return "/" }, n.chdir = function(t) { throw new Error("process.chdir is not supported") }, n.umask = function() { return 0 } }, function(t, e) { t.exports = function(t, e, i) { var o = console[t] || console.log,
                n = ["Baron: " + e, i];
            Function.prototype.apply.call(o, console, n) } }, function(o, t, n) { "use strict";
        (function(p) { var v, u, h, t = function() { return this || (0, eval)("this") }(),
                m = t && t.window || t,
                f = n(0).event,
                g = n(0).css,
                b = n(0).add,
                w = n(0).has,
                y = n(0).rm,
                _ = n(0).clone,
                $ = n(0).qs,
                e = T,
                i = ["left", "top", "right", "bottom", "width", "height"],
                k = [],
                x = { v: { x: "Y", pos: i[1], oppos: i[3], crossPos: i[0], crossOpPos: i[2], size: i[5], crossSize: i[4], crossMinSize: "min-" + i[4], crossMaxSize: "max-" + i[4], client: "clientHeight", crossClient: "clientWidth", scrollEdge: "scrollLeft", offset: "offsetHeight", crossOffset: "offsetWidth", offsetPos: "offsetTop", scroll: "scrollTop", scrollSize: "scrollHeight" }, h: { x: "X", pos: i[0], oppos: i[2], crossPos: i[1], crossOpPos: i[3], size: i[4], crossSize: i[5], crossMinSize: "min-" + i[5], crossMaxSize: "max-" + i[5], client: "clientWidth", crossClient: "clientHeight", scrollEdge: "scrollTop", offset: "offsetWidth", crossOffset: "offsetHeight", offsetPos: "offsetLeft", scroll: "scrollLeft", scrollSize: "scrollWidth" } },
                C = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/.test(m.navigator && m.navigator.userAgent);

            function T(t) { var e, i, o = !!t,
                    n = t && t[0] || t,
                    s = "string" == typeof t || n instanceof HTMLElement ? { root: t } : _(t),
                    r = { direction: "v", barOnCls: "_scrollbar", resizeDebounce: 0, event: f, cssGuru: !1, impact: "scroller", position: "static" }; for (var a in s = s || {}, r) null == s[a] && (s[a] = r[a]); if ("production" !== p.env.NODE_ENV && "absolute" == s.position && "clipper" == s.impact && v("error", ["Simultaneous use of `absolute` position and `clipper` impact values detected.", "Those values cannot be used together.", "See more https://github.com/Diokuz/baron/issues/138"].join(" "), s), e = this && this instanceof m.jQuery, s._chain ? i = s.root : e ? s.root = i = this[0] : i = $(s.root || s.scroller), "production" === p.env.NODE_ENV || i) { var l = A(i, s.direction),
                        c = +l; if ((s.index = c) == c && null !== l && k[c]) return "production" !== p.env.NODE_ENV && o && v("error", ["repeated initialization for html-node detected", "https://github.com/Diokuz/baron/blob/master/docs/logs/repeated.md"].join(", "), s.root), k[c];
                    s.root && s.scroller ? (s.scroller = $(s.scroller, i), "production" !== p.env.NODE_ENV && (s.scroller || v("error", "Scroller not found!", i, s.scroller))) : s.scroller = i, s.root = i; var d = function(t) { var e = new T.prototype.constructor(t);
                        z(e, t.event, "on"), A(e.root, t.direction, "on", k.length), k.push(e), "production" !== p.env.NODE_ENV && (100 < ++u && !h.liveTooMany && (v("warn", ["You have too many live baron instances on page (" + u + ")!", "Are you forget to dispose some of them?", "All baron instances can be found in baron._instances:"].join(" "), k), h.liveTooMany = !0), 1e3 < k.length && !h.allTooMany && (v("warn", ["You have too many inited baron instances on page (" + k.length + ")!", "Some of them are disposed, and thats good news.", "but baron.init was call too many times, and thats is bad news.", "All baron instances can be found in baron._instances:"].join(" "), k), h.allTooMany = !0)); return e.update(), e }(s); return d.autoUpdate && d.autoUpdate(), d } v("error", ["Baron initialization failed: root node not found."].join(", "), s) }

            function S() { return (new Date).getTime() }

            function z(e, i, o) { e._eventHandlers = e._eventHandlers || [{ element: e.scroller, handler: function(t) { e.scroll(t) }, type: "scroll" }, { element: e.root, handler: function() { e.update() }, type: "transitionend animationend" }, { element: e.scroller, handler: function() { e.update() }, type: "keyup" }, { element: e.bar, handler: function(t) { t.preventDefault(), e.selection(), e.drag.now = 1, e.draggingCls && b(e.root, e.draggingCls) }, type: "touchstart mousedown" }, { element: document, handler: function() { e.selection(1), e.drag.now = 0, e.draggingCls && y(e.root, e.draggingCls) }, type: "mouseup blur touchend" }, { element: document, handler: function(t) { 2 != t.button && e._pos0(t) }, type: "touchstart mousedown" }, { element: document, handler: function(t) { e.drag.now && e.drag(t) }, type: "mousemove touchmove" }, { element: m, handler: function() { e.update() }, type: "resize" }, { element: e.root, handler: function() { e.update() }, type: "sizeChange" }, { element: e.clipper, handler: function() { e.clipperOnScroll() }, type: "scroll" }],
                    function(t, e) { var i = 0,
                            o = t; for (void 0 !== o.length && o !== m || (o = [o]); o[i];) e.call(this, o[i], i), i++ }(e._eventHandlers, function(t) { if (t.element)
                            if (t.element.length && t.element !== m)
                                for (var e = 0; e < t.element.length; e++) i(t.element[e], t.type, t.handler, o);
                            else i(t.element, t.type, t.handler, o) }) }

            function A(t, e, i, o) { var n = "data-baron-" + e + "-id"; return "on" == i ? t.setAttribute(n, o) : "off" == i && t.removeAttribute(n), t.getAttribute(n) }

            function O(t) { if (this.events && this.events[t])
                    for (var e = 0; e < this.events[t].length; e++) { var i = Array.prototype.slice.call(arguments, 1);
                        this.events[t][e].apply(this, i) } } "production" !== p.env.NODE_ENV && (v = n(2), u = 0, h = { liveTooMany: !1, allTooMany: !1 }), "production" !== p.env.NODE_ENV && (T._instances = k), (T.prototype = { _debounce: function(e, i) { var o, n, s = this,
                        r = function() { if (s._disposed) return clearTimeout(o), void(o = s = null); var t = S() - n;
                            t < i && 0 <= t ? o = setTimeout(r, i - t) : (o = null, e()) }; return function() { n = S(), o || (o = setTimeout(r, i)) } }, constructor: function(s) { var o, n, r, l, e, c, a;

                    function d() { return r[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset] }

                    function i() { return !1 } if (c = S(), this.params = s, this.event = s.event, this.events = {}, this.root = s.root, this.scroller = $(s.scroller), "production" !== p.env.NODE_ENV && "body" == this.scroller.tagName && v("error", ["Please, do not use BODY as a scroller.", "https://github.com/Diokuz/baron/blob/master/docs/logs/do-not-use-body.md"].join(", "), s), this.bar = $(s.bar, this.root), r = this.track = $(s.track, this.root), !this.track && this.bar && (r = this.bar.parentNode), this.clipper = this.scroller.parentNode, this.direction = s.direction, this.rtl = s.rtl, this.origin = x[this.direction], this.barOnCls = s.barOnCls, this.scrollingCls = s.scrollingCls, this.draggingCls = s.draggingCls, this.impact = s.impact, this.position = s.position, this.rtl = s.rtl, this.barTopLimit = 0, this.resizeDebounce = s.resizeDebounce, this.cursor = function(t) { return t["client" + this.origin.x] || (((t.originalEvent || t).touches || {})[0] || {})["page" + this.origin.x] }, this.pos = function(t) { var e = "page" + this.origin.x + "Offset",
                                i = this.scroller[e] ? e : this.origin.scroll; return void 0 !== t && (this.scroller[i] = t), this.scroller[i] }, this.rpos = function(t) { var e = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client]; return (t ? this.pos(t * e) : this.pos()) / (e || 1) }, this.barOn = function(t) { if (this.barOnCls) { var e = this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize];
                                t || e ? w(this.root, this.barOnCls) && y(this.root, this.barOnCls) : w(this.root, this.barOnCls) || b(this.root, this.barOnCls) } }, this._pos0 = function(t) { n = this.cursor(t) - o }, this.drag = function(t) { var e = function(t) { return (t - this.barTopLimit) / d.call(this) }.call(this, this.cursor(t) - n),
                                i = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client];
                            this.scroller[this.origin.scroll] = e * i }, this.selection = function(t) { this.event(document, "selectpos selectstart", i, t ? "off" : "on") }, this.resize = function() { var a = this,
                                t = void 0 === a.resizeDebounce ? 300 : a.resizeDebounce,
                                e = 0;

                            function i() { var t, e = a.scroller[a.origin.crossOffset],
                                    i = a.scroller[a.origin.crossClient],
                                    o = 0; if (C ? o = 15 : 0 < i && 0 === e && (e = i + 17), e)
                                    if (a.barOn(), "scroller" == a.impact) { var n = e - i + o; if ("static" == a.position) g(a.scroller, a.origin.crossSize) != (t = a.clipper[a.origin.crossClient] + n + "px") && a._setCrossSizes(a.scroller, t);
                                        else { var s = {},
                                                r = a.rtl ? "Left" : "Right"; "h" == a.direction && (r = "Bottom"), s["padding" + r] = n + "px", g(a.scroller, s) } } else g(a.clipper, a.origin.crossSize) != (t = i + "px") && a._setCrossSizes(a.clipper, t);
                                Array.prototype.unshift.call(arguments, "resize"), O.apply(a, arguments), c = S() } S() - c < t && (clearTimeout(l), e = t), e ? l = setTimeout(i, e) : i() }, this.updatePositions = function(t) { var e, i = this;
                            i.bar && (e = (r[i.origin.client] - i.barTopLimit) * i.scroller[i.origin.client] / i.scroller[i.origin.scrollSize], (t || parseInt(a, 10) != parseInt(e, 10)) && (function(t) { var e = this.barMinSize || 20,
                                    i = t;
                                0 < i && i < e && (i = e), this.bar && g(this.bar, this.origin.size, parseInt(i, 10) + "px") }.call(i, e), a = e), o = function(t) { return t * d.call(this) + this.barTopLimit }.call(i, i.rpos()), function(t) { if (this.bar) { var e = g(this.bar, this.origin.pos),
                                        i = +t + "px";
                                    i && i != e && g(this.bar, this.origin.pos, i) } }.call(i, o)), Array.prototype.unshift.call(arguments, "scroll"), O.apply(i, arguments) }, this.scroll = function() { var t = this;
                            t.updatePositions(), t.scrollingCls && (e || b(t.root, t.scrollingCls), clearTimeout(e), e = setTimeout(function() { y(t.root, t.scrollingCls), e = void 0 }, 300)) }, this.clipperOnScroll = function() { this.rtl ? this.clipper[this.origin.scrollEdge] = this.clipper[this.origin.scrollSize] : this.clipper[this.origin.scrollEdge] = 0 }, this._setCrossSizes = function(t, e) { var i = {};
                            i[this.origin.crossSize] = e, i[this.origin.crossMinSize] = e, i[this.origin.crossMaxSize] = e, g(t, i) }, this._dumbCss = function(t) { if (!s.cssGuru) { var e = t ? "hidden" : null,
                                    i = t ? "none" : null;
                                g(this.clipper, { overflow: e, msOverflowStyle: i, position: "static" == this.position ? "" : "relative" }); var o = t ? "scroll" : null,
                                    n = {};
                                n["overflow-" + ("v" == this.direction ? "y" : "x")] = o, n["box-sizing"] = "border-box", n.margin = "0", n.border = "0", "absolute" == this.position && (n.position = "absolute", n.top = "0", "h" == this.direction ? n.left = n.right = "0" : (n.bottom = "0", n.right = this.rtl ? "0" : "", n.left = this.rtl ? "" : "0")), g(this.scroller, n) } }, this._dumbCss(!0), C) { var t = "paddingRight",
                            u = {},
                            h = m.getComputedStyle(this.scroller)[[t]]; "h" == s.direction ? t = "paddingBottom" : s.rtl && (t = "paddingLeft"); var f = parseInt(h, 10);
                        f != f && (f = 0), u[t] = 15 + f + "px", g(this.scroller, u) } return this }, update: function(t) { return "production" !== p.env.NODE_ENV && this._disposed && v("error", ["Update on disposed baron instance detected.", "You should clear your stored baron value for this instance:", this].join(" "), t), O.call(this, "upd", t), this.resize(1), this.updatePositions(1), this }, dispose: function() { "production" !== p.env.NODE_ENV && (this._disposed && v("error", "Already disposed:", this), u--), z(this, this.event, "off"), A(this.root, this.params.direction, "off"), "v" == this.params.direction ? this._setCrossSizes(this.scroller, "") : this._setCrossSizes(this.clipper, ""), this._dumbCss(!1), this.barOn(!0), O.call(this, "dispose"), k[this.params.index] = null, this.params = null, this._disposed = !0 }, on: function(t, e, i) { for (var o = t.split(" "), n = 0; n < o.length; n++) "init" == o[n] ? e.call(this, i) : (this.events[o[n]] = this.events[o[n]] || [], this.events[o[n]].push(function(t) { e.call(this, t || i) })) }, baron: function(t) { return t.root = this.params.root, t.scroller = this.params.scroller, t.direction = "v" == this.params.direction ? "h" : "v", t._chain = !0, T(t) } }).constructor.prototype = T.prototype, T.noConflict = function() { return m.baron = e, T }, T.version = "3.0.1", T.prototype.autoUpdate = n(4)(m), T.prototype.fix = n(7), T.prototype.controls = n(6), o.exports = T }).call(t, n(1)) }, function(t, e, i) { "use strict";

        function o(t) { var e, i = this; if (!this._au) { var o = i._debounce(function() { i.update() }, 300);
                this._observer = new t(function() { n(), i.update(), o() }), this.on("init", function() { i._observer.observe(i.root, { childList: !0, subtree: !0, characterData: !0 }), n() }), this.on("dispose", function() { i._observer.disconnect(), s(), delete i._observer }), this._au = !0 }

            function n() { i.root[i.origin.offset] ? s() : function() { if (e) return;
                    e = setInterval(function() { i.root[i.origin.offset] && (s(), i.update()) }, 300) }() }

            function s() { clearInterval(e), e = null } } t.exports = function(t) { var e = t.MutationObserver || t.WebKitMutationObserver || t.MozMutationObserver || null; return function() { return e && o.call(this, e), this } } }, function(t, e, i) { var o = i(3);
        window.baron = o, window.jQuery && window.jQuery.fn && (window.jQuery.fn.baron = o) }, function(t, e, i) { "use strict"; var o = i(0).qs;
        t.exports = function(e) { var s, r, t, a = this;
            r = e.screen || .9, e.forward && (t = { element: o(e.forward, this.clipper), handler: function() { var t = a.pos() + (e.delta || 30);
                    a.pos(t) }, type: "click" }, this._eventHandlers.push(t), this.event(t.element, t.type, t.handler, "on")), e.backward && (t = { element: o(e.backward, this.clipper), handler: function() { var t = a.pos() - (e.delta || 30);
                    a.pos(t) }, type: "click" }, this._eventHandlers.push(t), this.event(t.element, t.type, t.handler, "on")), e.track && (s = !0 === e.track ? this.track : o(e.track, this.clipper)) && (t = { element: s, handler: function(t) { if (t.target == s) { var e = t["offset" + a.origin.x],
                            i = a.bar[a.origin.offsetPos],
                            o = 0;
                        e < i ? o = -1 : e > i + a.bar[a.origin.offset] && (o = 1); var n = a.pos() + o * r * a.scroller[a.origin.client];
                        a.pos(n) } }, type: "mousedown" }, this._eventHandlers.push(t), this.event(t.element, t.type, t.handler, "on")) } }, function(t, e, i) { "use strict";
        (function(o) { var n = i(2),
                g = i(0).css,
                b = i(0).add,
                w = i(0).rm;
            t.exports = function(t) { var r, a, l = { outside: "", inside: "", before: "", after: "", past: "", future: "", radius: 0, minView: 0 },
                    c = [],
                    d = [],
                    u = [],
                    i = this.scroller,
                    h = this.event,
                    f = this;

                function s(t, e, i) { var o = e,
                        n = 1 == i ? "pos" : "oppos";
                    a < (l.minView || 0) && (o = void 0), g(r[t], this.origin.pos, ""), g(r[t], this.origin.oppos, ""), w(r[t], l.outside), void 0 !== o && (o += "px", g(r[t], this.origin[n], o), b(r[t], l.outside)) }

                function p(t) { try { var e = document.createEvent("WheelEvent");
                        e.initWebKitWheelEvent(t.originalEvent.wheelDeltaX, t.originalEvent.wheelDeltaY), i.dispatchEvent(e), t.preventDefault() } catch (t) {} }

                function e(t) { var e; for (var i in t) l[i] = t[i]; if (l.elements instanceof HTMLElement ? r = [l.elements] : "string" == typeof l.elements ? r = this.scroller.querySelectorAll(l.elements) : l.elements && l.elements[0] instanceof HTMLElement && (r = l.elements), r) { a = this.scroller[this.origin.client]; for (var o = 0; o < r.length; o++)(e = {})[this.origin.size] = r[o][this.origin.offset] + "px", r[o].parentNode !== this.scroller && g(r[o].parentNode, e), (e = {})[this.origin.crossSize] = r[o].parentNode[this.origin.crossClient] + "px", g(r[o], e), a -= r[o][this.origin.offset], u[o] = r[o].parentNode[this.origin.offsetPos], c[o] = c[o - 1] || 0, d[o] = d[o - 1] || Math.min(u[o], 0), r[o - 1] && (c[o] += r[o - 1][this.origin.offset], d[o] += r[o - 1][this.origin.offset]), 0 == o && 0 == u[o] || (this.event(r[o], "mousewheel", p, "off"), this.event(r[o], "mousewheel", p));
                        l.limiter && r[0] && (this.track && this.track != this.scroller ? ((e = {})[this.origin.pos] = r[0].parentNode[this.origin.offset] + "px", g(this.track, e)) : this.barTopLimit = r[0].parentNode[this.origin.offset], this.scroll()), !1 === l.limiter && (this.barTopLimit = 0) } var n = { element: r, handler: function() { for (var t, e = this.parentNode.offsetTop, i = 0; i < r.length; i++) r[i] === this && (t = i); var o = e - c[t];
                            l.scroll ? l.scroll({ x1: f.scroller.scrollTop, x2: o }) : f.scroller.scrollTop = o }, type: "click" }; if (l.clickable) { this._eventHandlers.push(n); for (var s = 0; s < n.element.length; s++) h(n.element[s], n.type, n.handler, "on") } } "production" !== o.env.NODE_ENV && "static" != this.position && n("error", ["Fix plugin cannot work properly in non-static baron position.", "See more https://github.com/Diokuz/baron/issues/135"].join(" "), this.params), this.on("init", e, t); var v = [],
                    m = []; return this.on("init scroll", function() { var t, e, i, o; if (r) { var n; for (o = 0; o < r.length; o++) t = 0, e = u[o] - this.pos() < d[o] + l.radius ? (t = 1, c[o]) : u[o] - this.pos() > d[o] + a - l.radius ? (t = 2, this.scroller[this.origin.client] - r[o][this.origin.offset] - c[o] - a) : void(t = 3), i = !1, (u[o] - this.pos() < d[o] || u[o] - this.pos() > d[o] + a) && (i = !0), t == v[o] && i == m[o] || (s.call(this, o, e, t), v[o] = t, m[o] = i, n = !0); if (n)
                            for (o = 0; o < r.length; o++) 1 == v[o] && l.past && (b(r[o], l.past), w(r[o], l.future)), 2 == v[o] && l.future && (b(r[o], l.future), w(r[o], l.past)), 3 == v[o] && (w(r[o], l.past), w(r[o], l.future), b(r[o], l.inside)), v[o] != v[o + 1] && 1 == v[o] ? (b(r[o], l.before), w(r[o], l.after)) : v[o] != v[o - 1] && 2 == v[o] ? (b(r[o], l.after), w(r[o], l.before)) : (w(r[o], l.before), w(r[o], l.after)), l.grad && (m[o] ? b(r[o], l.grad) : w(r[o], l.grad)) } }), this.on("resize upd", function(t) { e.call(this, t && t.fix) }), this } }).call(e, i(1)) }]),
    function(u) { u.fn.viewportChecker = function(t) { var c = { classToAdd: "visible", classToRemove: "invisible", classToAddForFullView: "", removeClassAfterAnimation: !1, offset: 100, repeat: !1, invertBottomOffset: !0, callbackFunction: function(t, e) {}, scrollHorizontal: !1, scrollBox: window };
            u.extend(c, t); var e = this,
                d = { height: u(c.scrollBox).height(), width: u(c.scrollBox).width() }; return this.checkElements = function() { var a, l;
                l = c.scrollHorizontal ? (a = Math.max(u("html").scrollLeft(), u("body").scrollLeft(), u(window).scrollLeft())) + d.width : (a = Math.max(u("html").scrollTop(), u("body").scrollTop(), u(window).scrollTop())) + d.height, e.each(function() { var t = u(this),
                        e = {},
                        i = {}; if (t.data("vp-add-class") && (i.classToAdd = t.data("vp-add-class")), t.data("vp-remove-class") && (i.classToRemove = t.data("vp-remove-class")), t.data("vp-add-class-full-view") && (i.classToAddForFullView = t.data("vp-add-class-full-view")), t.data("vp-keep-add-class") && (i.removeClassAfterAnimation = t.data("vp-remove-after-animation")), t.data("vp-offset") && (i.offset = t.data("vp-offset")), t.data("vp-repeat") && (i.repeat = t.data("vp-repeat")), t.data("vp-scrollHorizontal") && (i.scrollHorizontal = t.data("vp-scrollHorizontal")), t.data("vp-invertBottomOffset") && (i.scrollHorizontal = t.data("vp-invertBottomOffset")), u.extend(e, c), u.extend(e, i), !t.data("vp-animated") || e.repeat) { 0 < String(e.offset).indexOf("%") && (e.offset = parseInt(e.offset) / 100 * d.height); var o = e.scrollHorizontal ? t.offset().left : t.offset().top,
                            n = e.scrollHorizontal ? o + t.width() : o + t.height(),
                            s = Math.round(o) + e.offset,
                            r = e.scrollHorizontal ? s + t.width() : s + t.height();
                        e.invertBottomOffset && (r -= 2 * e.offset), s < l && a < r ? (t.removeClass(e.classToRemove), t.addClass(e.classToAdd), e.callbackFunction(t, "add"), n <= l && a <= o ? t.addClass(e.classToAddForFullView) : t.removeClass(e.classToAddForFullView), t.data("vp-animated", !0), e.removeClassAfterAnimation && t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { t.removeClass(e.classToAdd) })) : t.hasClass(e.classToAdd) && e.repeat && (t.removeClass(e.classToAdd + " " + e.classToAddForFullView), e.callbackFunction(t, "remove"), t.data("vp-animated", !1)) } }) }, ("ontouchstart" in window || "onmsgesturechange" in window) && u(document).bind("touchmove MSPointerMove pointermove", this.checkElements), u(c.scrollBox).bind("load scroll", this.checkElements), u(window).resize(function(t) { d = { height: u(c.scrollBox).height(), width: u(c.scrollBox).width() }, e.checkElements() }), this.checkElements(), this } }(jQuery);
var objectFitImages = function() { "use strict";

    function s(t, e, i) { var o = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
        p.call(t, "src") !== o && v.call(t, "src", o) }

    function r(t, e) { t.naturalWidth ? e(t) : setTimeout(r, 100, t, e) }

    function a(e) { var i, o, t = function(t) { for (var e, i = getComputedStyle(t).fontFamily, o = {}; null !== (e = c.exec(i));) o[e[1]] = e[2]; return o }(e),
            n = e[l]; if (t["object-fit"] = t["object-fit"] || "fill", !n.img) { if ("fill" === t["object-fit"]) return; if (!n.skipTest && d && !t["object-position"]) return } if (!n.img) { n.img = new Image(e.width, e.height), n.img.srcset = p.call(e, "data-ofi-srcset") || e.srcset, n.img.src = p.call(e, "data-ofi-src") || e.src, v.call(e, "data-ofi-src", e.src), e.srcset && v.call(e, "data-ofi-srcset", e.srcset), s(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = ""); try { i = e, o = { get: function(t) { return i[l].img[t || "src"] }, set: function(t, e) { return i[l].img[e || "src"] = t, v.call(i, "data-ofi-" + e, t), a(i), t } }, Object.defineProperty(i, "src", o), Object.defineProperty(i, "currentSrc", { get: function() { return o.get("currentSrc") } }), Object.defineProperty(i, "srcset", { get: function() { return o.get("srcset") }, set: function(t) { return o.set(t, "srcset") } }) } catch (e) { window.console && console.warn("https://bit.ly/ofi-old-browser") } }(function(t) { if (t.srcset && !f && window.picturefill) { var e = window.picturefill._;
                t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } })(n.img), e.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = t["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(t["object-fit"]) ? r(n.img, function() { n.img.naturalWidth > e.width || n.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto" }) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), r(n.img, function(t) { s(e, t.naturalWidth, t.naturalHeight) }) }

    function n(t, e) { var i = !m && !t; if (e = e || {}, t = t || "img", u && !e.skipTest || !h) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var o = 0; o < t.length; o++) t[o][l] = t[o][l] || { skipTest: e.skipTest }, a(t[o]);
        i && (document.body.addEventListener("load", function(t) { "IMG" === t.target.tagName && n(t.target, { skipTest: e.skipTest }) }, !0), m = !0, t = "img"), e.watchMQ && window.addEventListener("resize", n.bind(null, t, { skipTest: e.skipTest })) } var l = "bfred-it:object-fit-images",
        c = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
        t = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image,
        d = "object-fit" in t.style,
        u = "object-position" in t.style,
        h = "background-size" in t.style,
        f = "string" == typeof t.currentSrc,
        p = t.getAttribute,
        v = t.setAttribute,
        m = !1; return n.supportsObjectFit = d, n.supportsObjectPosition = u,
        function() {
            function i(t, e) { return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t } u || (HTMLImageElement.prototype.getAttribute = function(t) { return p.call(i(this, t), t) }, HTMLImageElement.prototype.setAttribute = function(t, e) { return v.call(i(this, t), t, String(e)) }) }(), n }();