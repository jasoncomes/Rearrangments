/**
 * @name Moving Fields
 * @desc JS for the animation and reoder of the form fields.
 */
var typewatch = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  }
})();

$('input').keyup(function () {
  typewatch(function () {

  	var options = $('input[type="text"]');
	var arr = options.map(function(_, o) { return { id: o.id , v: o.value }; }).get();
	arr.sort(function(o1, o2) {
		var data1 = o1.v.toLowerCase().trim();
		var data2 = o2.v.toLowerCase().trim();
		if(data1=='') { data1 = 'zzzzzzz'; }
		if(data2=='') { data2 = 'zzzzzzz'; }
		return data1 > data2 ? 1 : data1 < data2 ? -1 : 0 ;
	});

	$.each( arr, function( key, value ) {
		var order = key+1;
		$('input#'+value.id).parent('.field').attr("id", 'order_'+order);
	});

  }, 500);
});




/**
 * @name Readmore
 * @desc Global click events for the slide out instructions panel.
 */
$('#openReadmore').on('click', function(){
	$('.readme').css('left', '0%');
})
$('#close').on('click', function(){
	$('.readme').css('left', '-100%');
})