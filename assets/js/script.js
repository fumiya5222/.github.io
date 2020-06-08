$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

});

// find elements
$("#staticform").submit(function(event) {
	event.preventDefault();
	$.ajax({
	  url: 'https://api.staticforms.xyz/submit', // url where to submit the request
	  type: "POST", // type of action POST || GET
	  dataType: 'json', // data type
	  data: $("#staticform").serialize(), // post data || get data
	  success: function(result) {
		// you can see the result from the console
		// tab of the developer tools
		alert(JSON.parse(result));
	  },
	  error: function(xhr, resp, text) {
		alert(xhr, resp, text);
	  }
	})
  });
