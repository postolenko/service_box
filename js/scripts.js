$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


 // ---------------------------------------------------------

//  Для Табов
// Определние активного таба при загрузке страницы

$(function() {

    var countItemsTabMenuFor;
    var countItemsTabMenu = $(".tab_link").length - 1;

    var dataAttrTab;

    for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

        if( $(".tab_link:eq("+ countItemsTabMenuFor +")").hasClass("active") ) {

            dataAttrTab = $(".tab_link:eq("+ countItemsTabMenuFor +")").attr("for");

            for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                if ( $(".tab:eq("+ countItemsTabMenuFor +")").attr("id") == dataAttrTab ) {

                    $(".tab:eq("+ countItemsTabMenuFor +")").addClass("active");

                }

            }

        }

    }


    $(".tab_link").click(function() {

        if( !$(this).hasClass("active") ) {

            $(".tab").removeClass("active");

            $(".tab_link").not($(this)).removeClass("active");                             

            $(this).toggleClass("active");

        }

    });

});


$(function() {

    $(".close-search").click(function() {

        $(".fade-search-box").animate({"height" : 0 + "px"} , 300);

        $(".fade-search-box").fadeOut(300);

    });

});

 // ---------------------------------------------------------

    $(function() {


        countNumList = $(".list-style-num").length - 1;
        forCountNumList = 0;


        countNumLi = $(".list-style-num li").length - 1;
        forCountNumLi = 0;

        for ( forCountNumList = 0; forCountNumList <= countNumList; forCountNumList++ ) {

            forCountNumLi = 0;

            for ( forCountNumLi = 0; forCountNumLi <= countNumLi; forCountNumLi++ ) {

                $(".list-style-num:eq("+ forCountNumList +") li:eq("+ forCountNumLi +")").prepend("<span class='li-num'>" + (forCountNumLi + 1) + ".</span>");

            }

        }


    });


// ---------------------------------------------------------

    $(function() {

        var indexAccordeonLink;

        var tipHeight;

        $(".accordeon li a + .tip-box-wrapp").addClass("hover");

        $(".accordeon li a").click(function(accordeonEvent) {

            accordeonEvent.preventDefault();

            indexAccordeonLink = $(".accordeon li a").index(this);

            tipHeight = $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp .tip-box").height();

            // $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").toggleClass("show");

            if($(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").height() > 0) {                

                $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").animate({"height" : 0 + "px"}, 300);

                // $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").removeClass("show");

            } else {

                $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").animate({"height" : tipHeight + "px"}, 300);

                // $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").addClass("show");

            }


        });

    });


});
