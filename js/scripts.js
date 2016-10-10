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


});
