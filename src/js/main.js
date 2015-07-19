requirejs.config({
	paths:{
		jquery: 'jquery-2.1.4.min'
	}
});

requirejs(['jquery'],function($){
	$('#backTo a').on('click',move);
	$(window).on('scroll',checkPosition($(window).height()));
	$('#backTo').on('click',function(){
		alert(1)
	})
	checkPosition($(window).height())
	function move(){
		$('html,body').animate({
			scrollTop:0
		},800)
	}

	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#backTo').fadeIn();
		}
		else{
			$('#backTo').fadeOut()
		}
	}
})
