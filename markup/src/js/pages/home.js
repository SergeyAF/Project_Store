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
  rangeSlider();
  asideOpen();
  asideClose();
});

function rangeSlider() {
  if ($('#price-range').length) {
    $('#price-range').ionRangeSlider({
      type: 'double',
      grid: false,
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: '$',
      hide_min_max: true,
    });
  }
}

function asideOpen() {
  $('.aside-opener').on('click', function(){
		if($('body').hasClass('active-aside')){
			$('body').removeClass('active-aside');
		} else {
			$('body').addClass('active-aside');
		}
  $('.tabs').tabs();
  $('.product-sliders').slick({
    dots: true,
  });
});
}