$(function () {
  $('#tab').tabs({
    activate: function (event, ui) {
      ui.oldTab.removeClass('active-tab');
      ui.newTab.addClass('active-tab');
    },
  });
});
