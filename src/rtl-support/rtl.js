$(document).ready(function(){
	//Chosen
	$(".rtlChosen").chosen({
		placeholder_text_single: "Are you proficent in Persian", //placeholder
	});
	//Select2
	$(".rtlSelect2").select2({
		placeholder: "Are you proficent in Persian",
		dir: "rtl"
	});
})