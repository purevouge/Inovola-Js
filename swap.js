function swap(){
	//Write your code here
	jQuery.each($("table tr"), function() { 
		$(this).children(":eq(2)").after($(this).children(":eq(1)"));
	});
}
