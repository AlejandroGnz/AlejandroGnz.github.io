$(document).ready(function(){
  var status=false;
  console.log("asdasd");
  $('#btn-con').on('click',function(){
    if (status == true) {
			$(this).text('Contactar');
			$('body').css({
				"overflow": "auto"
			});
			status = false;
      $('.toggleb').slideToggle();
		} else {
      $('.toggleb').slideToggle();
			$(this).text("Cerrar");
			$('body').css({
				"overflow": "hidden"
			});
			status = true;
		}

  });
});
