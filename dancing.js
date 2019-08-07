function dancing(event, pixel)
{ $(event.target).animate({ top: pixel + 'px' }, function () { dancing(event, -pixel); }); }
$(document).ready(function () {
    var speed = 120;
    $('.wyliczeniemenu a').hover(function (event) { $(this).stop().animate({ top: '-10px' }, speed, function () { dancing(event, 10); }); },
   function () { $(this).stop().animate({ top: '0' }, speed); });
});