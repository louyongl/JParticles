$(function(){function e(e,t){var n=document.createElement("script");n.onload=t,n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}function t(e,t){var n=document.createElement("link");n.onload=t,n.href=e,n.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(n)}function n(e,t){e.find(".active").removeClass("active"),t.addClass("active")}function o(){function e(e){n(o,e),t(e)}function t(e){var t=e.position().left+parseInt(e.css("paddingLeft"))+.5;s.css({width:e.width(),transform:"translate("+t+"px,0)"})}var o=$(".com-header .nav"),i=o.find(".active"),s=o.find(".slideblock");t(i),setTimeout(function(){s.addClass("animation").removeClass("hidden")},0),o.find("a").hover(function(){e($(this))},function(){e(i)}),$(window).resize(function(){clearTimeout(this.timer),this.timer=setTimeout(function(){t(o.find(".active"))},400)})}function i(){$("body").height()>$(".com-header").outerHeight()+$(".com-body").outerHeight()+$(".com-footer").outerHeight()&&$(".com-footer").css({width:"100%",position:"absolute",zIndex:8,bottom:0}),$(".com-footer").show()}function s(){$(".mobile-menu").click(function(){$(".com-header .nav").toggleClass("menu-show")}),$(document).on("click.hideMenu",function(e){var t=$(e.target);t.parents(".nav").length||t.parents(".mobile-menu").length||t.hasClass("mobile-menu")||t.hasClass("menu-show")||$(".com-header .nav").removeClass("menu-show")})}window.isMobile="block"===$(".mobile-menu").css("display"),$(window).resize(function(){window.isMobile="block"===$(".mobile-menu").css("display"),i()}),o(),i(),$("#page-example").length&&(t("//cdn.bootcss.com/prettify/r298/prettify.min.css"),e("//cdn.bootcss.com/prettify/r298/prettify.min.js",function(){$(".prettyprint").length?prettyPrint():$(".quick-getting").length&&"import use use-method config-default".split(" ").forEach(function(e){$.get("/code-tpl/"+e+".html",function(t){$("."+e).text(t).addClass("prettyprint"),prettyPrint(),"use"===e&&(window.d=new Particleground.particle("#demo",{dis:80,range:60}))})})})),/\/examples\/quick-getting/i.test(location.href)?window.localStorage.setItem("read",!0):window.localStorage.getItem("read")||$(".com-body >.menu >h5:eq(1)").append('<i class="essential pa">必读</i>'),s()});
//# sourceMappingURL=map/site.js.map
