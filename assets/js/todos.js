// Check of specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Add a new todo
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
	}
});

//Toggle plus
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});