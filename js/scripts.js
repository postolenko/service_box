$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var radiboxTabLenght = $(".choose-type-box").length - 1;
    var radiboxTabFor = 0;


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        getRadiboxTabHeight();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    getRadiboxTabHeight();


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

            tipHeight = $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp .tip-box").outerHeight(true);

            if($(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").height() > 0) {                

                $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").animate({"height" : 0 + "px"}, 300);

                $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").removeClass("show");

            } else {

                $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").animate({"height" : tipHeight + "px"}, 300);

                $(".accordeon li a:eq("+ indexAccordeonLink +") + .tip-box-wrapp").addClass("show");

            }


        });

    });

// ---------------------------------------------------------

     $(function() {

        $(".resp-nav-btn").click(function() {

            $(".main-nav-block.left-col").addClass("show");

        });

        $(".close-resp-nav-btn").click(function() {

            $(".main-nav-block.left-col").removeClass("show");

        });

     });



// ---------------------------------------------------------

function getRadiboxTabHeight() {

    // radiboxTabLenght = $(".choose-type-box").length - 1;
    // radiboxTabFor = 0;

    // setTimeout(function() {

    //     for( radiboxTabFor = 0; radiboxTabFor <= radiboxTabLenght; radiboxTabFor++ ) {

    //         $(".choose-type-box .choose-type:eq("+ radiboxTabFor +") label").outerHeight( $(".choose-type-box .choose-type:eq("+ radiboxTabFor +")").height() );

    //     }

    // }, 1000);

}


});
