/* init.js */
// document.addEventListener("load", ready);
var img = new Image();
	img.src = "img/seating-plan.jpg";
window.onload= function(){
	
	var context = document.getElementById("zal").getContext("2d");
	// var img = new Image();
		// img.src = "/img/seating-plan.jpg";
		img.load = function(){
			context.drawImage(img, 0, 0, 600, 800);
		}
		img.load();

	
	
	
	

	// zal = Array(
		// prohod: Array(),
		// parter: Array(),
		// belietazh: Array()
	// );
	
	console.log( zal );
	
	//alert( zal);
	
	/* */
	var box1 = new Array( 
		new Array(13),
		new Array(20),
		new Array(20),
		new Array(22),
		new Array(22),
		new Array(24),
		new Array(24),
		new Array(26),
		new Array(26),
		new Array(26),
		new Array(26),
		new Array(26),
		new Array(26)
		)
	
}