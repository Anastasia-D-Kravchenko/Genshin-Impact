// const screenWidth = window.screen.width //розмір монітора
// const availableScreenWidth = window.screen.availWidth //розмір доступного монітора
// const windowOuterWidth = window.outerWidth //розмір вікна
// const windowInnerWidth = window.innerWidth //внутріній розмір вікна
// const pageWidth = document.documentElement.scrollWidth //розмір веб-сторінки
// if(pageWidth < 1000){
//     $(body).css("background", "green");
//     console.log(pageWidth)
// }
$("#telep").on('click', '.span', function () {
    $(".clickme").css("display", "flex");
    $("#a").css("font-size", "1rem");
});
$("#telep").on('click', '.xxxx', function () {
    $(".clickme").css("display", "none");
});
d.querySelector('html').style.overflowY = 'scroll';
 $(".data-box").on('click', '.add_data', function () {
  var add = $('.add_data'),
      want = $(".want"),
      chhek = $("#checkout");
      want.fadeIn(1000).css('display', 'flex');
      want.animate({top: '75%'}, 1000);
      want.fadeOut('fast').css('top', '0');
      add.attr('disabled', true);
      chhek.attr('disabled', true);
      setTimeout(function() {
        add.attr('disabled', false);
        chhek.attr('disabled', false);
      }, 2200);
  });