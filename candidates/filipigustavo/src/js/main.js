;
(function (window, $) {
  var LKD = window.LKD || function($el){return this.init($el);};
  
  LKD.prototype = {
    opt:{
      barras: true
    },
    
    init: function($el){
      var t = this;
      
      if($el.is('.login')){
        console.log('form#10');
        $('#form-login').on('submit',{t:t},t.validateForm);
      }else 
      if($el.is('.pedido')){
        $('.btn-toggle').on('click',t.toggleBlock);
        $('.open-target').on('click',t.openTarget);
        t.configTimeline(t);
        t.putDisclaimer(t);
        t.configStatus(t);
        $(window).resize(function(){
          t.putDisclaimer(t);
          t.configStatus(t);

          return;
        });
      }

      return;
    },
    
    validateForm: function(e){
      var data = e.data,
          _form = $(this),
          _input = $('input', _form),
          submit = true;
      
      _form.find('.msg-err').remove();
      
      _input.each(function(){
        var value = $.trim($(this).val());
        
        if(value.length === 0){
          submit = false;
          $(this).addClass('invalid').after('<div class="center msg-err"><div class="input-err">Não pode ficar em branco.<span class="arrow"></span></div></div>');
        }else{
          
          if($(this).is('.cpf')){
            if(!data.t._validateCPF(value)){
              if($(this).is('.cnpj')){
                if(!data.t._validateCNPJ(value)){
                  submit = false;
                  $(this).addClass('invalid').after('<div class="center msg-err"><div class="input-err">Documento inválido.<span class="arrow"></span></div></div>');
                }
              }
            }
          }
          
        }
      });
      
      console.log(submit);
      return submit;
    },
    toggleBlock: function(e){
      e.preventDefault();

      return $(this).closest('.parent-toggle').find('.block-toggle').toggleClass('hide');
    },
    openTarget: function(e){
      e.preventDefault();
      var _this = $(this),
          _target = _this.closest('.parent-target').find($(_this.data('target'))),
          index = ':eq(' + _this.index() + ')';

      return _target.not(index).addClass('hide').end().filter(index).toggleClass('hide');
    },
    putDisclaimer: function(t){
      var viewportW = t._viewport().w,
          _disclaimer = $('.disclaimer'),
          _anchor = $('.disclaimer-anchor'),
          _prev = _disclaimer.prev(),
          _next = _disclaimer.next();

      if(viewportW < 601 && _prev.is(_anchor)){
        return _anchor.before(_disclaimer.removeClass('after').addClass('before'));
      }else if(viewportW > 600 && _next.is(_anchor)){
        return _anchor.after(_disclaimer.removeClass('before').addClass('after'));
      }

      return;
    },
    configTimeline: function(t){
      var _tl = $('.component.timeline'),
          _current = $('.item.current', _tl),
          _next = $('.item.next');

      return _current.prev('.item').find('.border-left').addClass('current'),
          _next.prev('.item').find('.border-left').addClass('next');
    },
    configStatus: function(t){
      var _buttons = $('.buttons'),
          position;

      return _buttons.each(function(i){
            var _thisBTN = $(this),
                _step = $('.step', _thisBTN),
                btnW = _thisBTN.closest('.product').width();

            position = (btnW - _step.filter(':eq(0)').width() - 4) / (_step.length - 1);
            return _thisBTN.height(_step.filter(':eq(0)').height() + 4).width(btnW), 
                _step.each(function(o){
                  var _thisSTP = $(this);

                  return _thisSTP.css({'left':(position * o)});
                });
          }), t._inserirStatusBarras(_buttons, t.opt.barras, position, t);
    },
    _inserirStatusBarras: function(obj, barras, width, t){
        return obj.each(function(){
          var _btn = $(this),
              _step = $('.step', _btn),
              qtd = _step.length - 1,
              _barra = $('<div class="barra"></div>');
          
          if(barras === true){
            t.opt.barras = false;
            for(var i = 0;i < qtd;i++){
              _btn.append(_barra.clone());
            }
          }
          
          return t._configurarBarras(obj, width);
        });
    },
    _configurarBarras: function(obj, width){
      return obj.each(function(){
        var _btn = $(this),
            _step = $('.step', _btn);
            
        return _step.each(function(i){
          var s = $(this);
          if(i !== 0){
            _btn.find('.barra').filter(':eq(' + (i-1) + ')').addClass(s.data('status')).css({
              'top':(s.height() - 2)/2, 
              'width': width,
              'left':((width * (i-1)) + (s.width() / 2))
            });
          }
        });
      });
    },
    
    _viewport: function(){
      return {
            w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
          };
    },
    _validateCNPJ: function(cnpj){
      cnpj = cnpj.replace(/[^\d]+/g,'');

      if(cnpj == '') return false;

      if (cnpj.length != 14)
          return false;

      // Elimina CNPJs invalidos conhecidos
      if (cnpj == "00000000000000" || 
          cnpj == "11111111111111" || 
          cnpj == "22222222222222" || 
          cnpj == "33333333333333" || 
          cnpj == "44444444444444" || 
          cnpj == "55555555555555" || 
          cnpj == "66666666666666" || 
          cnpj == "77777777777777" || 
          cnpj == "88888888888888" || 
          cnpj == "99999999999999")
          return false;

      // Valida DVs
      tamanho = cnpj.length - 2
      numeros = cnpj.substring(0,tamanho);
      digitos = cnpj.substring(tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0))
          return false;

      tamanho = tamanho + 1;
      numeros = cnpj.substring(0,tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1))
            return false;

      return true;
    },
    _validateCPF: function(cpf){
      var numeros, digitos, soma, i, resultado, digitos_iguais;
      digitos_iguais = 1;
      if (cpf.length < 11)
            return false;
      for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1))
                  {
                  digitos_iguais = 0;
                  break;
                  }
      if (!digitos_iguais)
            {
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                  soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                  return false;
            numeros = cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--)
                  soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                  return false;
            return true;
            }
      else
          return false;
    }
  };
  
  window.LKD = LKD;
  
  $(function(){
    var $LKD = new window.LKD($('#lkd'));
  });
})(window, jQuery);