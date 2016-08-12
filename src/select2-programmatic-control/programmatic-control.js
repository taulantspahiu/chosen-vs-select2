$(document).ready(function(){
  	var $progControl = $(".progControlSelect2").select2({
		placeholder: "What technologies do you use most of time"//placeholder
	});
  	$(".iOSSelect2").on("click", function () { $progControl.val(["sw", "oc"]).trigger("change"); });
  	$(".clearSelect2").on("click", function () { $progControl.val(null).trigger("change"); });
})