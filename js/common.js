$(document).ready(function() {
     $('#header .bxslider').bxSlider({
     auto: true,
     pause: 2600

  }
    );
  $('.products .bxslider').bxSlider({
     auto: true,
     pause: 3600

  }
    );
	    var touch = $('#touch-menu');
        var menu = $('.nav');
     
        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 768 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });

        var touchs = $('#products');
        var menus = $('.dropdown');
     
        $(touchs).on('hover', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 1024 && menus.is(':hidden')) {
                menus.removeAttr('style');
            }
        });

});	
$(document).ready(function(){
 





  $(".choise_item" ).mouseenter(function() {
  $(this).find(".choise_item_bottom").animate({
         height:"+=147px",
         },300);

});

$(".choise_item" ).mouseleave(function() {

  $(this).find(".choise_item_bottom").animate({
         height:"-=147px",
         },300);

  
});


var show = true;
    var countbox = ".about_left_bar";
    $(window).on("scroll load resize", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();
        var time=1500;
        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: time
            });

            show = false;

            $(".meter > span").eq(0).animate({
             width:"+=79%"
             },time);   
             $(".meter > span").eq(1).animate({
             width:"+=90%"
             },time);   
             $(".meter > span").eq(2).animate({
             width:"+=69%"
             },time);   
             $(".meter > span").eq(3).animate({
             width:"+=92%"
             },time);   



        }
    });




      // Плавный скролл по якорям
      $('a[href^="#"]').click(function () { 
          elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
       
        $('body').animate( { scrollTop: destination }, 1500 );
        
        
       });
      $(function () {                                      
    $('.nav a').each(function () {             
        var location = window.location.href; 
        var link = this.href;                
        if(location == link) {               
            $(this).addClass('active_menu');  
        }
    });
}); 


/*Підсвітка меню початок*/
var lastId,
  topMenu = $(".nav"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active_menu")
      .end().filter("[href='#" + id + "']").parent().addClass("active_menu");
  }
});
/*Підсвітка меню кінець*/


});