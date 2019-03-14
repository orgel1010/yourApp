(function($){
	// .jisoo() 라는 동작 정의하기
	$.fn.myplugin=function(options){
		//default 값 정의하기
		var settings=$.extend({
			msg:"안녕! 나는 jisoo야!",
			width:"300px",
			height:"100px",
			color: "red",
			backgroundColor: "skyblue"
		}, options);

		this //여기서 this는 $("div")
			.text(settings.msg)
			.css("width", settings.width)
			.css("height", settings.height)
			.css("border", "10px dashed blue")
			.click(function(){
			$(this).animate({marginLeft:"+=200px"});
		});
		// chain 형태로 동작 가능하게 하기 
		return this;
	};

})(jQuery);