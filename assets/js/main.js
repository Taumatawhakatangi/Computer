jQuery(function ($) {


  // Menu mobile burger

  $('.burger').on('click', function() {
    $('.burger span, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  })

  $('.close-menu-btn').on('click', function() {
    $('.menu').toggleClass('active')
  });

  $(window).scroll( function() {
    const scroll = $(this).scrollTop();

    if (scroll > 70) {
      $('.container_menu').addClass('fixed-menu');
    } else if (scroll < 70) {
      $('.container_menu').removeClass('fixed-menu');
    }
  })


  //Таймер

  var current_date = new Date();// текущая дата
  current_date.setDate(current_date.getDate())
  curDay = current_date.getDate(),
  curMonth = current_date.getMonth(),
  curYear = current_date.getFullYear();


  $('#counter1').countMe(curYear, curMonth, curDay+19, '#counter1');



});//JQuery

