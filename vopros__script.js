
$(document).ready(function() {
$('.bullet').click(function() {
 var frame = $(this).closest('.frame_vopos');
 var comment = frame.find('.comment');
 var isHidden = comment.is(':hidden');

 // Скрыть все открытые комментарии и выполнить анимацию сразу
 $('.comment').hide();

 if (isHidden) {
     $('.frame_vopos').removeClass('show');
     $('.frame_vopos').find('.bullet').removeClass('expanded').addClass('collapsed');

     frame.addClass('show');
     frame.find('.bullet').removeClass('collapsed').addClass('expanded');

     comment.slideDown();
 } else {
     frame.removeClass('show');
     frame.find('.bullet').removeClass('expanded').addClass('collapsed');

     comment.slideUp();
 }
});
});
