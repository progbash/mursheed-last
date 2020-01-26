$(document).ready(function($) {
    $('.tab_content').hide();
<<<<<<< HEAD
    $('.tab_content:eq(1)').show();
=======
    $('.tab_content:eq(3)').show();
>>>>>>> 1e4885322b8e36134b5a466200ee85091a2126f8
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });