$("ul").on("click", "li", (function(){
	$(this).toggleClass("completed");
}));

//Click on X to delete Todo
$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
}));

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//create a new li add to ul
		$("ul").append("<li><span>X</span> "+ todoText +"</li>")
	}
});