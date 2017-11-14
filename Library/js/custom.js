jQuery(function($){
$(document).ready(function() {
    
	$('.chngLng').click(function(){
        var lang = $(this).prev('.pgLng').text();
        if (lang == 'RU') {
            $(this).prev('.pgLng').text('LV');
        } else {
            $(this).prev('.pgLng').text('RU');
        };
    });
    
    $(".divF>input").focusin(function() {
      $(this).siblings(".formIcon").css('color','rgba(208, 175, 80, 0.94)');  
    }).focusout(function(){
      $(this).siblings(".formIcon").css('color','#b9b8bd');  
    });
	
   
    
   /*function checkForm() {
       var counter = 0;
       $('#usOrd input').each(function() {
           if (!$(this).val()) {
               counter++;
           }
        });
       if (!counter) {
           $('#butSub1').attr('disabled',false);
       } else {
           $('#butSub1').attr('disabled',true);
       }
   }*/
    
    
    $('span.butIcon').click(function(){
        $(this).toggleClass('active');
        $('ul.dropMenu').toggleClass('invis');
    });
    
    $('input.guests').focusout(function() {
      if (+$(this).val() && !isNaN($(this).val())) {
          var txt = $(this).val();
          var txtLast = txt[txt.length-1];
                    
          if ((txtLast==2 || txtLast==3 || txtLast==4) && txt!=12 && txt!=13 && txt!=14) {
              txt += ' человека';
          } else {
              txt += ' человек';
          }
          $(this).val(txt);
      }  
    });
    
    $('a.dropM').click(function() {
        $('#time').val($(this).text());
        $('ul.dropMenu').toggleClass('invis').siblings('span.butIcon').toggleClass('active');
    });
    
    
    $(window).resize(function(){
  
       createNavBar(); 
});
 
    function createNavBar() {
    var wid = parseInt($('#linkBody').width());
   // $('.fluidRow').css({width: wid + "px", marginLeft: -wid/2+ "px"});    
   if(wid<991) {
            $('#containerMenu>nav>div.container').removeClass().addClass('container-fluid').css('padding-right','0').find('div.navTop').css('background-color','#fff');
            $('nav.navbar-static-top').removeClass('navbar-static-top').addClass('navbar-fixed-top');
            $('#ulNav').addClass('navbar-fixed-top');
        } else {
            $('#containerMenu>nav>div.container-fluid').removeClass().addClass('container').css('padding-right','15px');
            if ($('nav.navbar-fixed-top').hasClass('navbar-fixed-top')) {
                $('nav.navbar-fixed-top').removeClass('navbar-fixed-top').addClass('navbar-static-top');
                $('#ulNav').removeClass('navbar-fixed-top');
            }
        }
    
    $('#containerMenu').css('background-color','transparent').children('nav').css({width: wid + "px", marginLeft: -wid/2+ "px", left: '50%'});
    $('.rowThird hr').css('top','18px');
}   
    
    createNavBar();    
   
    
    
    $(function () { 
    $("[data-toggle='tooltip']").tooltip(); 
  });  
    
    $('body').scrollspy({ target: '#navbarMain' });   
    
});
	
	
	
                
});