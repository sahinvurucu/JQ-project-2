$(function() {
    $('.top h1').text('Traveling is fun');
    $('#list').children().text('Hey');
    $('.element').children().addClass('hidden');

    $('.change-show').click(function () {
    $('.show').toggleClass('hidden');

  });

    $('.add-item').click (function () {
        $('#list').append('<li class="hello">Hello</liv>')

    });
  
  });