/* init.js */
// document.addEventListener("load", ready);
var img = new Image();
	img.src = "img/seating-plan.jpg";
var seat;
var W = 30;
window.onload= function(){

		plan = [ 18, 20, 20, 22, 22, 24, 24, 26, 26, 26, 26, 26, 26, 20, 26, 26, 28, 28, 28, 29, 29, 29, 29, 29, 22];
		seat = new Array(25);
		plan.forEach( function(len, index, arr){
				seat[index] = new Array(len);
				for (i=0; i< (seat[index]).length; i++)
				{
					seat[index][i]= 0;
				};
		});
		drawTickets();
		
	function drawTickets()
	{
		result = '';
		for (i= seat.length-1; i >= 0; i--)
		{
			for (j = seat[i].length -1; j >= 0; j--)
			{
				let num = (i+1).toString()+(j+1).toString();
				if (seat[i][j] > 0){
					result = result.toString() + '<div id="tkt-'+(j+1)+'" class="checkbox"><input type="checkbox" id="'+num+'" hidden checked><label for="'+num+'">'+(j+1).toString()+'</label></div>\n';
				}else{
					result = result.toString() + '<div class="checkbox"><input type="checkbox" id="'+num+'" hidden><label for="'+num+'">'+(j+1).toString()+'</label></div>\n';
				}
			}
			
			div = document.createElement('div');
			div.className = "row row-"+(i+1).toString();
			div.style = 'width:'+ (seat[i].length * W)+'px';
			div.innerHTML = (result);
			//
			document.getElementById('seat').appendChild(div);
			result = '';
		}	
			mkStyle();
		
	}
	
	function mkStyle()
	{
		var rows = document.getElementById('seat').getElementsByClassName('row');
		
		 let x = 0, y = 0,  a=0, b = 50 , t=0;;
		 for (i = rows.length - 1; i >= 0; i--)
		 {
			var cells = rows[i].getElementsByClassName('checkbox');
			for (num = j = cells.length - 1, t=0; j >=0; j--)
			{
				t = 3.14 / num * (j+1);
				a = W * num;
				// x = Math.abs(a/2 - a/2  * Math.cos(t));
				x = W * j;
				y =  b * Math.sin(t);
				y = (y < 0)? 0 : y;
				console.log (' t =' +t + ' x= '+ x+ ' y= '+y);
				// y = 1 / 4 * Math.sqrt( b * ( a - Math.pow(x, 2)));
				cells[j].style='bottom:'+y+'px; left: '+x+'px';	
			}
		 }
	}
}