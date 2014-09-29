$(document).ready(function(){
// set up 16 by 16 grid
var clearGrid = function() {
	$("#container").children().each(function(){
        	$(this).remove();
    	});
};

$('#new_grid').on('click', function() {
	console.log('entered newGrid');
	clearGrid();
	var size = prompt("Enter grid size:");
	for (i=1; i<=size; i++) {
		$("#container").append("<div class=\"row\"></div>");
  	}
  	$("#container").children().each(function() {
	for (i=1; i<=size; i++) {
      		$(this).append("<div class=\"box\"></div>");
  	}
});

$('.row').css('height', 600/size);
$('.box').css('width', 600/size);
$(".box").on('mouseover',
	function(){ console.log("in"); $(this).toggleClass('color');} 
);
});



});
