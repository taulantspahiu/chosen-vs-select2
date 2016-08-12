$(document).ready(function(){
  	$(".tokenizationSelect2").select2({
		placeholder: "Your favourite car", //placeholder
		tags: true,
		tokenSeparators: ['/',',',';'," "] 
	});
})