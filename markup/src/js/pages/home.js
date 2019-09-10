$(function () {
<<<<<<< HEAD
  $('#tab').tabs({
    activate: function (event, ui) {
      ui.oldTab.removeClass('active-tab');
      ui.newTab.addClass('active-tab');
    },
  });
});
=======
  $('.tabs').tabs();
  $('.product-sliders .sliders .sliders-content').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    responsive:[
     {
        breakpoint:1151,
        settings:{
        slidesToShow: 3,
        slidesToScroll: 3
     }
   },
     {
        breakpoint:1000,
        settings:{
        slidesToShow: 2,
        slidesToScroll: 2
     }
   },
     {
        breakpoint:675,
        settings:{
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
  });
});
>>>>>>> 675c97035a484010539b8b827425a4dc9ab72e4c
