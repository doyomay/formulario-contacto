$(function(){
	function validar(){
		var obj = {};
	    var pass = true;

	   $('input, #ciudad, input[name="sexo"]:radio').each(function() {
	    obj[$(this).attr('name')] = $(this).val();
	    $(this).removeClass('animated shake u-error');
	    if (($(this).val() === '' || $(this).val()== 0) && (!$(this).hasClass('norequired'))) {
	        $(this).addClass('animated shake u-error');
	        pass = false;
	        console.log(obj);
	        return false;
	    	}
	    });
	    return pass; 
    };

    $('#enviar').click(function(){
    	if(validar()){
    		$('.Formulario').addClass('zoomOutRight');
    	}
    })
});