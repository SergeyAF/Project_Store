// eslint-disable-next-line func-names


$(function(){
  rangeSlider();
});

function rangeSlider() {
  console.log('привет!');

  if ($('#price-range').length) {
      $('#price-range').ionRangeSlider({
          type: 'double',
          grid: false,
          min: 0,
          max: 1000,
          from: 0,
          to: 600,
          prefix: "$",
          hide_min_max: true
      });
  }
}

$(function () {
  $('#tabs').tabs();
});





