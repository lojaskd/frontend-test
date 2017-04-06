$(document).ready(function() {
  //login checks
  $('#formlogin input').focus(function(event){
    $(this).removeAttr('style');
    $('.labelgo').removeAttr('style');
    var label = $(this).prev();
    label.addClass('labelgo');
    label.removeClass('labelgono');
    label.parent().find('.error').remove();
      //verify lenght on focusout
    $(this).focusout(function(event){
      event.stopImmediatePropagation();
      var btrim = $(this).val().trim();
      if (btrim.length == 0) {
        $(this).attr('style','border-bottom:1px solid #e46868');
        label.parent().append('<span class="error"><img src="lib/assets/images/errortop.png">Não pode ficar em branco!</span>');
        label.removeClass('labelgo');
        label.addClass('labelgono');
      }else if (btrim.length >= 1) {
        $('.labelgo').attr('style','color:#4caf50');
        $(this).attr('style','border-bottom:1px solid #4caf50');
      }else{
        label.parent().find('.error').remove();
      }
    });
  });
  //Menu mobile show
  $('.main-menu-btn').click(function(){
    $('.main-menu').slideToggle();
  });
  //order products list
  $('#orderproducts').click(function(){
    $('#listorderproducts').slideToggle();
  });
  //alert icon effect
  $('.alert-open').click(function(){
     $(this).toggleClass("alert-open-active");
  });
  //product shipping date list effects
  $('.datelist .alert-open').click(function(){
     $(this).parent().find('.datelist-info').slideToggle();
  });
  //products details effects
  $('.product-list .alert-open').click(function(){
    $(this).parentsUntil('.product-list').find('.timeline-status').slideToggle().css('display','inline-block');
    //$(this).parent().find('.timeline-status').slideToggle();
  });
  //Em producao eu faria isso de outra forma, como nao fiz um array indentifiquei manualmente cada item abaixo
  $('#productid123 #tabsep').click(function(){
     $(this).parent().toggleClass("stepactive");
     $(this).parentsUntil('#productid123').find('#tabstepshow').slideToggle().css('display','inline-block');
  });
  $('#productid456 #tabsep').click(function(){
     $(this).parent().toggleClass("stepactive");
     $(this).parentsUntil('#productid456').find('#tabstepshow').slideToggle().css('display','inline-block');
  });  
});
