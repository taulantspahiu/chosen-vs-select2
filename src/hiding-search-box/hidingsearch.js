$(document).ready(function(){
  //Chosen
  $(".hideBoxChosen").chosen({
      placeholder_text_single: "Are you an adult?", //placeholder
    disable_search_threshold: 4
	});
  //Select2
  $(".hideBoxSelect2").select2({
		placeholder: "Are you an adult?", //placeholder
    minimumResultsForSearch: 4
	});
})
