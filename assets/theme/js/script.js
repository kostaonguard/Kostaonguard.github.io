!function(t){function e(e){t(".pie_progress").asPieProgress({namespace:"asPieProgress",classes:{element:"pie_progress",number:"pie_progress__number"},min:0,max:100,size:150,speed:30,barsize:"8",fillcolor:"none",easing:"ease"}),t(e).find(".pie_progress").each(function(){t(this).asPieProgress("go",t(this).attr("data-goal")+"%")})}function n(e,n){var a=t(e).find("."+n);a.asPieProgress("go",a.attr("data-goal")+"%")}function a(){t(".countdown:not(.countdown-inited)").each(function(){t(this).addClass("countdown-inited").countdown(t(this).attr("data-due-date"),function(e){var n=t(e.target).closest(".countdown-cont").find("div.daysCountdown").attr("title"),a=t(e.target).closest(".countdown-cont").find("div.hoursCountdown").attr("title"),i=t(e.target).closest(".countdown-cont").find("div.minutesCountdown").attr("title"),o=t(e.target).closest(".countdown-cont").find("div.secondsCountdown").attr("title");t(this).html(e.strftime(['<div class="row">','<div class="col-xs-12 col-sm-6 col-md-3">','<span class="number-wrap">','<span class="number display-2">%D</span>','<span mbr-text class="period display-7">',n,"</span>",'<span class="dot">:</span>',"</span>","</div>",'<div class="col-xs-12 col-sm-6 col-md-3">','<span class="number-wrap">','<span class="number display-2">%H</span>','<span mbr-text class="period display-7">',a,"</span>",'<span class="dot">:</span>',"</span>","</div>",'<div class="col-xs-12 col-sm-6 col-md-3">','<span class="number-wrap">','<span class="number display-2">%M</span>','<span mbr-text class="period display-7">',i,"</span>",'<span class="dot">:</span>',"</span>","</div>",'<div class="col-xs-12 col-sm-6 col-md-3">','<span class="number-wrap">','<span class="number display-2">%S</span>','<span mbr-text class="period display-7">',o,"</span>","</span>","</div>","</div>"].join("")))})}),t(".countdown:not(.countdown-inited)").each(function(){t(this).countdown(t(this).attr("data-due-date"),function(e){t(this).text(e.strftime("%D days %H:%M:%S"))})})}function i(e,n){var i=/\d\d\d\d\/\d\d\/\d\d/g,o=t(e).find(".countdown");n.search(i)>-1&&(o.removeClass("countdown-inited"),a())}function o(){t(".flip-card:not(.builderCard)").each(function(){t(this).addClass("builderCard")})}function s(e){0!==t(e).find(".nav-tabs").length&&t(e).outerFind('section[id^="tabs"]').each(function(){var e=t(this).attr("id"),n=t(this).find(".nav-tabs .nav-item"),a=t(this).find(".tab-pane");a.removeClass("active").eq(0).addClass("active"),n.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active"),a.each(function(){t(this).attr("id",e+"_tab"+t(this).index())}),n.each(function(){t(this).find("a").attr("href","#"+e+"_tab"+t(this).index())})})}function r(e){t(e).find(".carousel-item:first").addClass("active")}function d(e){var n=t(e),a=n.attr("ID")+"-carousel";n.find(".carousel").attr("id",a),n.find(".carousel-controls a").attr("href","#"+a),r(n)}function c(e){var n=t(e),a=n.find(".carousel-item").length,i=n.find(".carousel-inner").attr("data-visible");a<i&&(i=a),n.find(".carousel-inner").attr("class","carousel-inner slides"+i),n.find(".clonedCol").remove(),n.find(".carousel-item .col-md-12").each(function(){i<2?t(this).attr("class","col-md-12"):"5"==i?t(this).attr("class","col-md-12 col-lg-15"):t(this).attr("class","col-md-12 col-lg-"+12/i)}),n.find(".carousel-item").each(function(){for(var e=t(this),n=1;n<i;n++){(e=e.next()).length||(e=t(this).siblings(":first"));var a=e.index();e.find(".col-md-12:first").clone().addClass("cloneditem-"+n).addClass("clonedCol").attr("data-cloned-index",a).appendTo(t(this).children().eq(0))}})}function l(e){var n=t(e),a=n.find(".carousel-item").length,i=n.find(".carousel-inner").attr("data-visible");a<i&&(i=a),n.find(".clonedCol").remove(),n.find(".carousel-item").each(function(){for(var e=t(this),n=1;n<i;n++){(e=e.next()).length||(e=t(this).siblings(":first"));var a=e.index();e.find(".col-md-12:first").clone().addClass("cloneditem-"+n).addClass("clonedCol").attr("data-cloned-index",a).appendTo(t(this).children().eq(0))}})}function u(e){e.stopPropagation(),e.preventDefault();var n,a=t(e.target);n=a.closest(".clonedCol").length?a.closest(".clonedCol").attr("data-cloned-index"):a.closest(".carousel-item").index();var i=t(a.closest(".carousel-inner").find(".carousel-item")[n]).find("img")[0];a.parents(".clonedCol").length>0&&i.click()}function h(e){var n=t(e).find(".table tbody tr").length;t(e).find(".dataTables_info").text("Showing "+n+" entries")}function m(e,n){t(e).find("table").dataTable({retrieve:!0,paging:!1,aaSorting:[],scrollX:!0,searching:n,info:n,language:{search:"Search:",info:"Showing _END_ entries",infoEmpty:"Showing _END_ entries",infoFiltered:"(filtered from _MAX_ total entries)"}})}var f=t("html").hasClass("is-builder");t.extend(t.easing,{easeInOutCubic:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n}}),t.fn.outerFind=function(t){return this.find(t).addBack(t)},t.fn.footerReveal=function(){function e(){n.outerHeight()<=i.outerHeight()?(n.css({"z-index":-999,position:"fixed",bottom:0}),n.css({width:a.outerWidth()}),a.css({"margin-bottom":n.outerHeight()})):(n.css({"z-index":"",position:"",bottom:""}),n.css({width:""}),a.css({"margin-bottom":""}))}var n=t(this),a=n.prev(),i=t(window);return e(),i.on("load resize",function(){e()}),this},function(t,e){var n=function(t,e,n){var a;return function(){var i=this,o=arguments;a?clearTimeout(a):n&&t.apply(i,o),a=setTimeout(function(){n||t.apply(i,o),a=null},e||100)}};jQuery.fn[e]=function(t){return t?this.bind("resize",n(t)):this.trigger(e)}}(jQuery,"smartresize"),t.isMobile=function(e){var n=[],a={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};return e="undefined"==t.type(e)?"*":e.toLowerCase(),"*"==e?n=t.map(a,function(t){return t}):e in a&&n.push(a[e]),!(!n.length||!navigator.userAgent.match(new RegExp(n.join("|"),"i")))};var p=function(){var e=t('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),n=e[0],a=parseInt(window.innerHeight/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).height,10);return e.remove(),i==a}();if(t(function(){function e(){t(this).css("height",9*t(this).parent().width()/16)}function n(e){setTimeout(function(){t(e).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function a(e){t(e).jarallax("destroy").css("position","")}function i(e){t(e).outerFind("[data-bg-video]").each(function(){var e=t(this).attr("data-bg-video"),n=e.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),a=t('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});if(t("> *:eq(0)",this).before(a),n&&(/youtube/g.test(n[3])||/vimeo/g.test(n[3]))){if(n&&/youtube/g.test(n[3])){var i="http"+("https:"===location.protocol?"s":"")+":";i+="//img.youtube.com/vi/"+n[6]+"/maxresdefault.jpg",t("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var t=this.src.split("/").pop();switch(t){case"maxresdefault.jpg":this.src=this.src.replace(t,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(t,"hqdefault.jpg");break;default:f&&a.css("background-image",'url("images/no-video.jpg")').show()}}else a.css("background-image",'url("'+this.src+'")').show()}).attr("src",i),!t.fn.YTPlayer||f||t.isMobile()||t("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:n[6],containment:"self",showControls:!1,mute:!0})}else if(n&&/vimeo/g.test(n[3])){var o=new XMLHttpRequest;o.open("GET","https://vimeo.com/api/v2/video/"+n[6]+".json",!0),o.onreadystatechange=function(){if(4===this.readyState)if(this.status>=200&&this.status<400){var t=JSON.parse(this.responseText);a.css("background-image",'url("'+t[0].thumbnail_large+'")').show()}else f&&a.css("background-image",'url("images/no-video.jpg")').show()},o.send(),o=null,!t.fn.vimeo_player||f||t.isMobile()||t("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:e,containment:"self",showControls:!1,mute:!0})}}else f&&a.css("background-image",'url("images/video-placeholder.jpg")').show()})}t("html").addClass(t.isMobile()?"mobile":"desktop"),t(window).scroll(function(){t(".mbr-navbar--sticky").each(function(){var e=t(window).scrollTop()>10?"addClass":"removeClass";t(this)[e]("mbr-navbar--stuck").not(".mbr-navbar--open")[e]("mbr-navbar--short")})}),t.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(e,n){var a=[e,e];a[n>e?0:1]=n,t(window).smartresize(function(){var e=t(window).height();t.inArray(e,a)<0&&(e=a[t(window).width()>e?1:0]),t(".mbr-section--full-height").css("height",e+"px")})}(t(window).width(),t(window).height()):p||(t(window).smartresize(function(){t(".mbr-section--full-height").css("height",t(window).height()+"px")}),t(document).on("add.cards",function(e){t("html").hasClass("mbr-site-loaded")&&t(e.target).outerFind(".mbr-section--full-height").length&&t(window).resize()})),t(window).smartresize(function(){t(".mbr-section--16by9").each(e)}),t(document).on("add.cards changeParameter.cards",function(n){var a=t(n.target).outerFind(".mbr-section--16by9");a.length?a.attr("data-16by9","true").each(e):t(n.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")}),t.fn.jarallax&&!t.isMobile()&&(t(window).on("update.parallax",function(e){setTimeout(function(){var e=t(".mbr-parallax-background");e.jarallax("coverImage"),e.jarallax("clipContainer"),e.jarallax("onScroll")},0)}),f?(t(document).on("add.cards",function(e){n(e.target),t(window).trigger("update.parallax")}),t(document).on("changeParameter.cards",function(e,i,o,s){if("bg"===i)switch(a(e.target),s){case"type":!0===o.parallax&&n(e.target);break;case"value":"image"===o.type&&!0===o.parallax&&n(e.target);break;case"parallax":!0===o.parallax&&n(e.target)}t(window).trigger("update.parallax")})):n(document.body),t(window).on("shown.bs.tab",function(e){t(window).trigger("update.parallax")}));var o,s,r=0,d=null,c=!t.isMobile();t(window).scroll(function(){s&&clearTimeout(s);var e=t(window).scrollTop(),n=e<=r||c;if(r=e,d){var a=e>d.breakPoint;n?a!=d.fixed&&(c?(d.fixed=a,t(d.elm).toggleClass("is-fixed")):s=setTimeout(function(){d.fixed=a,t(d.elm).toggleClass("is-fixed")},40)):(d.fixed=!1,t(d.elm).removeClass("is-fixed"))}}),t(document).on("add.cards delete.cards",function(e){o&&clearTimeout(o),o=setTimeout(function(){d&&(d.fixed=!1,t(d.elm).removeClass("is-fixed")),t(".mbr-fixed-top:first").each(function(){d={breakPoint:t(this).offset().top+3*t(this).height(),fixed:!1,elm:this},t(window).scroll()})},650)}),t(window).smartresize(function(){t(".mbr-embedded-video").each(function(){t(this).height(t(this).width()*parseInt(t(this).attr("height")||315)/parseInt(t(this).attr("width")||560))})}),t(document).on("add.cards",function(e){t("html").hasClass("mbr-site-loaded")&&t(e.target).outerFind("iframe").length&&t(window).resize()}),f?t(document).on("add.cards",function(t){i(t.target)}):i(document.body),t(document).on("changeParameter.cards",function(e,n,a,o){if("bg"===n)switch(o){case"type":t(e.target).find(".mbr-background-video-preview").remove(),"video"===a.type&&i(e.target);break;case"value":"video"===a.type&&(t(e.target).find(".mbr-background-video-preview").remove(),i(e.target))}}),f||t("body > *:not(style, script)").trigger("add.cards"),t("html").addClass("mbr-site-loaded"),t(window).resize().scroll(),f||t(document).click(function(e){try{var n=e.target;if(t(n).parents().hasClass("carousel"))return;do{if(n.hash){var a=/#bottom|#top/g.test(n.hash);t(a?"body":n.hash).each(function(){e.preventDefault();var a=t(".mbr-navbar--sticky").length?64:0,i="#bottom"==n.hash?t(this).height()-t(window).height():t(this).offset().top-a;t(this).hasClass("panel-collapse")||t(this).hasClass("tab-pane")||t("html, body").stop().animate({scrollTop:i},800,"easeInOutCubic")});break}}while(n=n.parentNode)}catch(e){}}),t(".cols-same-height .mbr-figure").each(function(){function e(){if(a.css({width:"",maxWidth:"",marginLeft:""}),s&&o){var t=s/o;n.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var e=i.height()/i.width();if(e>t){var r=100*(e-t)/t;a.css({width:r+100+"%",maxWidth:r+100+"%",marginLeft:-r/2+"%"})}}}var n=t(this),a=n.children("img"),i=n.parent(),o=a[0].width,s=a[0].height;a.one("load",function(){o=a[0].width,s=a[0].height,e()}),t(window).on("resize",e),e()})}),f||(t.fn.socialLikes&&t(document).on("add.cards",function(e){t(e.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(e,n,a){a>999&&t(".social-likes__counter",e.target).html(Math.floor(a/1e3)+"k")}).socialLikes({initHtml:!1})}),t(document).on("add.cards",function(e){t(e.target).hasClass("mbr-reveal")&&t(e.target).footerReveal()}),t(document).ready(function(){function e(t){var e=0;do{e+=t.offsetTop||0,t=t.offsetParent}while(t);return e}if(!t.isMobile()&&t("input[name=animation]").length){t("input[name=animation]").remove();var n=t("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return t(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")}).addClass("hidden animated"),a=t(window);a.on("scroll resize",function(){var a=window.innerHeight,i=document.documentElement.scrollTop||document.body.scrollTop,o=i+a-50;t.each(n,function(){var n=t(this),a=n[0],s=a.offsetHeight,r=e(a);r+s>=i&&r<=o&&n.hasClass("hidden")&&n.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n.removeClass("animated fadeInUp")})})}),a.trigger("scroll")}}),t(".nav-dropdown").length&&t(".nav-dropdown").swipe({swipeLeft:function(e,n,a,i,o){t(".navbar-close").click()}})),t(document).ready(function(){if(t(".mbr-arrow-up").length){var e=t("#scrollToTop"),n=t("body,html"),a=t(window);e.css("display","none"),a.scroll(function(){t(this).scrollTop()>0?e.fadeIn():e.fadeOut()}),e.click(function(){return n.animate({scrollTop:0},400),!1})}}),t(document).ready(function(){t(".counters").length&&t(".counters").viewportChecker({offset:200,callbackFunction:function(e,n){t("#"+e.attr("id")+" .count").each(function(){t(this).prop("Counter",0).animate({Counter:t(this).text()},{duration:3e3,easing:"swing",step:function(e){t(this).text(Math.ceil(e))}})})}})}),f||t(".mbr-arrow").on("click",function(e){var n=t(e.target).closest("section").next();n.hasClass("engine")&&(n=n.closest("section").next());var a=n.offset();t("html, body").stop().animate({scrollTop:a.top},800,"linear")}),t("nav.navbar").length){var g=t("nav.navbar").height();t(".mbr-after-navbar.mbr-fullscreen").css("padding-top",g+"px")}if(f||!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))||t(document).on("add.cards",function(e){var n=t(e.target);n.hasClass("mbr-fullscreen")&&t(window).on("load resize",function(){n.css("height","auto"),n.outerHeight()<=t(window).height()&&n.css("height","1px")}),(n.hasClass("mbr-slider")||n.hasClass("mbr-gallery"))&&(n.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),n.hasClass("mbr-slider")&&n.find(".full-screen .slider-fullscreen-image").css("height","1px"))}),t(document).ready(function(){if(!f){var e=function(e){var n=t(e).parents("section").find("iframe")[0],a=t(n).attr("src");if(e.parents("section").css("z-index","1"),-1!==a.indexOf("youtu")&&n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==a.indexOf("vimeo")){var i=new Vimeo.Player(t(n));i.play()}t(e).parents("section").find(t(e).attr("data-modal")).css("display","table").click(function(){-1!==a.indexOf("youtu")&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==a.indexOf("vimeo")&&i.pause(),t(this).css("display","none").off("click"),e.parents("section").css("z-index","0")})};t(".modalWindow-video iframe").each(function(){var e=t(this).attr("data-src");t(this).removeAttr("data-src");var n=e.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==e.indexOf("youtu")?t(this).attr("src","https://youtube.com/embed/"+n[6]+"?rel=0&enablejsapi=1"):-1!==e.indexOf("vimeo")&&t(this).attr("src","https://player.vimeo.com/video/"+n[6]+"?autoplay=0&loop=0")}),t("[data-modal]").click(function(){e(t(this))})}}),!f&&!t.isMobile()){var b=t("section.menu"),v=t(window).width();b.find(".navbar").hasClass("collapsed")||v>991&&(b.find("ul.navbar-nav li.dropdown").hover(function(){t(this).hasClass("open")||t(this).find("a")[0].click()},function(){t(this).hasClass("open")&&t(this).find("a")[0].click()}),b.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){t(this).hasClass("open")||t(this).find("a")[0].click()},function(){t(this).hasClass("open")&&t(this).find("a")[0].click()}))}f?t(document).on("add.cards",function(n){t(".pie_progress").length&&e(n.target)}).on("delete.cards",function(e){t(e.target).find(".pie_progress").asPieProgress("destroy")}).on("changeParameter.cards",function(e,a){0==a.indexOf("progress")&&t(".pie_progress").length&&n(e.target,a)}):t(".pie_progress").length&&e(document.body),f?t(document).on("add.cards",function(e){0!=t(".countdown").length&&a()}).on("changeParameter.cards",function(t,e,n){"countdown"===e&&i(t.target,n)}):0!=t(".countdown").length&&a(),f&&t(document).on("add.cards",function(){0!=t(".flip-card").length&&o()}),f?t(document).on("add.cards",function(t){s(t.target)}):s(document.body),f?t(document).on("add.cards",function(e){0!=t(".testimonials-slider").length&&d(e.target)}).on("changeParameter.cards",function(e,n,a){"testimonialsSlides"===n&&0==t(e.target).find(".carousel-item.active").length&&r(e.target)}):0!=t(".testimonials-slider").length&&t(".testimonials-slider").each(function(){d(this)}),f||(t(document).ready(function(){0!=t(".accordionStyles").length&&t('.accordionStyles .card-header a[role="button"]').each(function(){t(this).hasClass("collapsed")||t(this).addClass("collapsed")})}),t('.accordionStyles .card-header a[role="button"]').click(function(){var e=t(this).closest(".accordionStyles").attr("id");t(this).closest(".card").find(".panel-collapse").hasClass("collapsing")||(-1!=e.indexOf("toggle")?t(this).hasClass("collapsed")?t(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):t(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down"):-1!=e.indexOf("accordion")&&(t(this).closest(".accordionStyles ").children(".card").each(function(){t(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")}),t(this).hasClass("collapsed")&&t(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))})),f?t(document).on("add.cards",function(e){t(e.target).hasClass("clients")&&(d(e.target),c(e.target),"add"===e.type&&t(e.target).on("slide.bs.carousel",function(){l(e.target)}),t(e.target).find(".carousel-item [mbr-media]").on("click",function(t){u(t)}),t(e.target).on("slide.bs.carousel",function(){t(e.target).find(".carousel-item .clonedCol [mbr-media]").off("click").on("click",function(t){u(t)})}))}).on("changeParameter.cards",function(e,n,a){"slidesCount"==n&&0==t(e.target).find(".carousel-item.active").length&&r(e.target),c(e.target),l(e.target),t(e.target).find(".carousel-item [mbr-media]").on("click",function(t){u(t)}),t(e.target).on("slide.bs.carousel",function(){t(e.target).find(".carousel-item .clonedCol [mbr-media]").off("click").on("click",function(t){u(t)})})}).on("changeContent.cards",function(e,n){l(e.target);try{t(e.target).closest(".carousel").carousel("next")}catch(t){}}):t(document.body).find(".clients").each(function(e,n){d(t(this)),c(t(this))}),f?t(document).on("add.cards",function(e){t(e.target).hasClass("section-table")&&h(e.target)}).on("changeParameter.cards",function(t,e){"tableColumns"!=e&&"tableRows"!=e||h(t.target)}):0!=t(document).find("section.section-table").length&&t("section.section-table").each(function(){var e=t(this).find("table").is(".isSearch");t(this).find(".row.search").remove(),t(this).find(".table-wrapper .scroll").removeClass("scroll"),t(this).find(".row.info").remove(),m(t(this),e)}),f||0!=t("section.popup-btn-cards").length&&t("section.popup-btn-cards .card-wrapper").each(function(e,n){t(this).addClass("popup-btn")})}(jQuery),function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(t){}if(!document.getElementById("top-1")){var t=document.createElement("section");t.id="top-1",t.className="engine",t.innerHTML='<a href="http://alarmindy.com">alarmindy.com</a> alarmindy.com',document.body.insertBefore(t,document.body.childNodes[0])}}();