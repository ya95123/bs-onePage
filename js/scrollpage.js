//  ^ 代表開頭是...的東西
$('a[href^="#"]').on('click', function (event) {
  // 點下去會抓到目標
  let $target = $(this.getAttribute('href'));

  if ($target.length) {
    event.preventDefault();
    $('html,body').stop().animate({
      scrollTop: $target.offset().top
    }, 1500, 'easeInOutBack');
  }
})