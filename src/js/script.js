$(document).ready(function() {
  var empty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  var player = 'O';
  var opponent = 'X';
  var top = [];
  
  $('.space').click(function() {
    $(this).addClass(player);
    var id = parseInt($(this).attr('id'));
    var loc = empty.indexOf(id);
    empty.splice(loc, 1);
    var remove = Math.floor(Math.random() * empty.length);
    if (remove <= 0) remove = 1;
    $('#'+empty[remove - 1]).addClass(opponent);
    empty.splice(remove - 1, 1);
    
    if( ($('.top.O').length == $('.top').length) || ($('.middle.O').length == $('.middle').length)  || ($('.bottom.O').length == $('.bottom').length) || ($('.diagonal-right.O').length == $('.diagonal-right').length) || ($('.diagonal-left.O').length == $('.diagonal-left').length) || ($('.left.O').length == $('.left').length) || ($('.center.O').length == $('.center').length) || ($('.right.O').length == $('.right').length) ) {
      alert("O's Win!");
      $('div').each(function(){
        $(this).removeClass('O');
        $(this).removeClass('X');
        empty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      });
    }
    
    if(($('.top.X').length == $('.top').length) || ($('.middle.X').length == $('.middle').length)  || ($('.bottom.X').length == $('.bottom').length) ($('.diagonal-right.X').length == $('.diagonal-right').length) || ($('.diagonal-left.X').length == $('.diagonal-left').length) || ($('.left.X').length == $('.left').length) || ($('.center.X').length == $('.center').length) || ($('.right.X').length == $('.right').length) ) {
      alert("X's Win!");
      $('div').each(function(){
        $(this).removeClass('O');
        $(this).removeClass('X');
        empty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      });
    }
  });
});