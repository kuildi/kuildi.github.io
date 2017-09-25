$(document).ready(function(){

  var sl_n2 = 0;
  $(".sl2").each(function() {
   if(sl_n2 == 0){text = ' class="active2"';}else{text='';}
    $('.slaider-menu2').append('<span data-type="'+sl_n2+'"'+text+'></span>');
    if(sl_n2 == 0){$(this).css('left','0');}
      $(this).addClass('n_ss_p'+sl_n2);sl_n2 = sl_n2+1;
  });

  $(".back2").click( function() {slaider_l_r2('left');return false;});
  $(".next2").click( function() {slaider_l_r2('right');return false;});
  $(".slaider-menu2 span").click( function() {
   var id = $(this).data('type');
   slaider_menu2(id);
   return false;
  });


});


function slaider_l_r2(flip){
  var num_sl = $('#num_slaider2').html();
  var marg = parseInt($('.slider_w2').position().left);
  var num_img = $('.sl2').length*1-1;
  var num_html = 0;

  if(flip == 'left'){
    num_html = num_sl*1 - 1;
  }else{
    num_html = num_sl*1 + 1;
  }
  if(num_html > num_img){num_html = 0;num_sl=num_img;}
  if(num_html < 0){num_html = num_img;}
  if(flip == 'left'){
   $('.slider_w2 .n_ss_p'+num_html).css({ 'left':'-870px'}, 600);
   $('.slider_w2 .n_ss_p'+num_sl).animate({ 'left':'870px'}, 600);
    $('.slider_w2 .n_ss_p'+num_html).animate({ 'left':'0px'}, 600);;console.log(num_sl+"-"+num_html);
  }else{
    $('.slider_w2 .n_ss_p'+num_html).css({ 'left':'870px'}, 600);
   $('.slider_w2 .n_ss_p'+num_sl).animate({ 'left':'-870px'}, 600);
    $('.slider_w2 .n_ss_p'+num_html).animate({ 'left':'0px'}, 600);;console.log(num_sl+"-"+num_html);
  }
  $(".slaider-menu2 span").removeClass();
  $(".slaider-menu2").children("span[data-type='"+num_html+"']").addClass('active2');
  $('#num_slaider2').html(num_html);
}

function slaider_menu2(num){
 var nm_s = $('#num_slaider2').html();
  if(nm_s > num){
   $('.slider_w2 .n_ss_p'+num).css({ 'left':'-870px'}, 600);
   $('.slider_w2 .n_ss_p'+nm_s).animate({ 'left':'870px'}, 600);
    $('.slider_w2 .n_ss_p'+num).animate({ 'left':'0px'}, 600);
  }else{
    $('.slider_w2 .n_ss_p'+num).css({ 'left':'870px'}, 600);
   $('.slider_w2 .n_ss_p'+nm_s).animate({ 'left':'-870px'}, 600);
    $('.slider_w2 .n_ss_p'+num).animate({ 'left':'0px'}, 600);
  }
  $(".slaider-menu2 span").removeClass();
  $(".slaider-menu2").children("span[data-type='"+num+"']").addClass('active2');
  $('#num_slaider2').html(num);
}