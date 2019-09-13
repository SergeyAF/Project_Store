$(function () {
    dialogInit();
    profileOpen();
    menuOpen();
});

function dialogInit () {
  $( "#dialog" ).dialog({
    width: 730,
    autoOpen: false,
    show: {
      effect: "fade",
      duration: 300
    },
    hide: {
      effect: "fade",
      duration: 300
    }
  });

$( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
    });
}

function profileOpen () {
  $('.js-opener').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
  } else {
      $(this).addClass('active');
  }
  })
}

function menuOpen () {
  $('.menu-holder').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
  } else {
      $(this).addClass('active');
  }
  })
}