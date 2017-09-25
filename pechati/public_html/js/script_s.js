$(document).ready(function(){

  var sl_n = 0;
  $(".sl").each(function() {
  	if(sl_n == 0){text = ' class="active"';}else{text='';}
    $('.slaider-menu').append('<span data-type="'+sl_n+'"'+text+'></span>');
    if(sl_n == 0){$(this).css('left','0');}
      $(this).addClass('n_s'+sl_n);sl_n = sl_n+1;
  });

  setTimeout(function(){$(".conteiner-tovar").css('width',($(".tv").width())*$('.tv').length*1+10);},500);
  $(".back").click( function() {slaider_l_r('left');return false;});
  $(".next").click( function() {slaider_l_r('right');return false;});
  $(".back-t").click( function() {slaiderT_l_r('left');return false;});
  $(".next-t").click( function() {slaiderT_l_r('right');return false;});
  $(".slaider-menu span").click( function() {
  	var id = $(this).data('type');
  	slaider_menu(id);
  	return false;
  });


});

function clik_tovar(){
  $('.sub-li span').unbind().click(function() {
    var text = $(this).html(), span = $(this).parent().parent().children('.d'),
        IDmoney = $(this).parent().parent().parent().parent().find('.money'),
        money = $(this).data('money'), dop_d = $(this).parent().parent().parent().parent();
    span.html(text);
    $('input[name="money"]').val(money);
  	 $('input[name="razmer"]').val(text);
    IDmoney.html(money);
    if($(this).data('rkv')){
      dop_d.find('.rv').html(text);
      dop_d.find('.rkv').html($(this).data('rkv'));
      dop_d.find('.rd').html($(this).data('rd'));
    }
    if($(this).data('dop')){
      dop_d.find('.rdop').html($(this).data('dop'));
    }else{
      dop_d.find('.rdop').html('');
    }
    if($(this).parent().parent().parent().parent().attr('id') != 'zacaz'){
      $('.show-zacaz .v_zac .li').html($(this).parent().parent().html());
      $('.show-zacaz .v_zac .sub-li').css('display','none');
    }
  });
}

function slaider_l_r(flip){
  var num_sl = $('#num_slaider').html();
  var marg = parseInt($('.slider_w').position().left);
  var num_img = $('.sl').length*1-1;
  var num_html = 0;

  if(flip == 'left'){
    num_html = num_sl*1 - 1;
  }else{
    num_html = num_sl*1 + 1;
  }
  if(num_html > num_img){num_html = 0;num_sl=num_img;}
  if(num_html < 0){num_html = num_img;}
  if(flip == 'left'){
  	$('.slider_w .n_s'+num_html).css({ 'left':'-870px'}, 600);
  	$('.slider_w .n_s'+num_sl).animate({ 'left':'870px'}, 600);
    $('.slider_w .n_s'+num_html).animate({ 'left':'0px'}, 600);console.log(num_sl+"-"+num_html);
  }else{
    $('.slider_w .n_s'+num_html).css({ 'left':'870px'}, 600);
  	$('.slider_w .n_s'+num_sl).animate({ 'left':'-870px'}, 600);
    $('.slider_w .n_s'+num_html).animate({ 'left':'0px'}, 600);console.log(num_sl+"-"+num_html);
  }
  $(".slaider-menu span").removeClass();
  $(".slaider-menu").children("span[data-type='"+num_html+"']").addClass('active');
  $('#num_slaider').html(num_html);
}

function slaider_menu(num){
	var nm_s = $('#num_slaider').html();
  if(nm_s > num){
  	$('.slider_w .n_s'+num).css({ 'left':'-870px'}, 600);
  	$('.slider_w .n_s'+nm_s).animate({ 'left':'870px'}, 600);
    $('.slider_w .n_s'+num).animate({ 'left':'0px'}, 600);
  }else{
    $('.slider_w .n_s'+num).css({ 'left':'870px'}, 600);
  	$('.slider_w .n_s'+nm_s).animate({ 'left':'-870px'}, 600);
    $('.slider_w .n_s'+num).animate({ 'left':'0px'}, 600);
  }
  $(".slaider-menu span").removeClass();
  $(".slaider-menu").children("span[data-type='"+num+"']").addClass('active');
  $('#num_slaider').html(num);
}

function slaiderT_l_r(flip){
  var num_sl = $('#num_tovar').html();
  var marg = parseInt($('.conteiner-tovar').position().left);
  var num_img = $('.tv').length*1-1;
  var num_html = 0;

  if(flip == 'left'){
    if(num_sl!=0){ num_html = num_sl*1 - 1; }
  }else{
    if(num_sl!=num_img){ num_html = num_sl*1 + 1; }else{ num_html = num_sl; }
  }

  $('.conteiner-tovar').animate({ 'left':'-'+(num_html*$(".tv").width())+'px'}, 600);
  $('#num_tovar').html(num_html);
  $('a.img-lupa'+num_html).unbind().easyZoom({parent:$('a.img-lupa'+num_html).parent().parent(),id:'img2'});
}

function slaiderT_menu(num){
  $('.conteiner-tovar').animate({ 'left':'-'+(num*$(".tv").width())+'px'}, 600);
  $('#num_tovar').html(num);
  $('a.img-lupa'+num).unbind().easyZoom({parent:$('a.img-lupa'+num).parent().parent(),id:'img2'});
}

function center_show(elem){$(elem).css({position:'absolute',left: ($(window).width() - $(elem).outerWidth())/2 + $(window).scrollLeft() + "px",top: ($(window).height() - $(elem).outerHeight())/2 + $(window).scrollTop() + "px"});}