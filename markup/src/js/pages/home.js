$(function () {
  $('#tabs').tabs();
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