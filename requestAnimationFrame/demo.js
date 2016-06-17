// JavaScript Document

window.onload=function(){
	
		var i = 10;
		var j = 10;
		var color = ['url(boy-walk1.png)','url(boy-walk2.png)','url(boy-walk3.png)','url(boy-walk4.png)']
		var k = 0;
		
		function ani(){
			$('#slide').css('left',i + 'px');
				i++;
			$('#stop').css({background:color[k]});
			k++;
			if(k>=3){k=0;}
				 idr = requestAnimationFrame(ani);
			}
			ani();
		$('#stop').click(function(){
			cancelAnimationFrame(idr);
			});
	}