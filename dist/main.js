$(document).on('ready', function(){


	$('a').on('click', function(e){

console.log(e);
console.log(this.id);
	if(this.id == "1"){$('section').html("BLUE");console.log("boo");}
	if(this.id == "2"){$('section').html("RED");}
	if(this.id == "3"){$('section').html("YELLOW");}




	});







});