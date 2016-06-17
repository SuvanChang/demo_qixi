// JavaScript Document
$(function(){
	$('div.bg1').delay(4000).animate({left:'-100%',top:'0px'},15000);
	$('div.bg2').delay(4000).animate({left:'0%',top:'0px'},14980,function(){
		//$('body').css({background:'#C7AD5F'});
			$('div.bg2').css({backgroundImage:'url(imag/QixiB-bright.png)',backgroundSize:'contain'}).animate({left:'-100%',},15000);
			$('div.bg3').animate({left:'0',top:'0px'},14980,function(){
				$('body').css({background:'#0593DE'})
				clearInterval(man.timer);
				man.timer  = setInterval(function(){man.rotate()},300);
				woman.timer  = setInterval(function(){woman.rotate()},300);
				$('div.flower').delay(3000).animate({opacity:0.9},1000).animate({top:'110%'},30000);			
				});
		});
		$('div.bird').delay(14000).animate({left:'-10%'},10000,function(){
					clearTimeout(bird.timer);
			})
		$('div.man').animate({left:'36%'},6000,function(){
				$('div.man').delay(23000).animate({top:'230px'},3000)
			});
	
	var ustr = 'url(imag/bird1.png)';
	var mstr ='url(imag/boy-walk1.png)';
	var mrstr = ['url(imag/boy-rotate1.png)','url(imag/boy-rotate2.png)','url(imag/boy-rotate3.png)','url(imag/boy-rotate4.png)','url(imag/boy-rotate5.png)','url(imag/boy-rotate6.png)'];
	var wrstr = ['url(imag/girl-rotate1.png)','url(imag/girl-rotate2.png)','url(imag/girl-rotate3.png)','url(imag/girl-rotate4.png)','url(imag/girl-rotate5.png)','url(imag/girl-rotate6.png)'];
	var ro = 0;
	var rowo = 0;
	bird = {
		timer:null,
		fly:function(){
			$('div.bird').css({backgroundImage:ustr});
			if(ustr == 'url(imag/bird1.png)'){ustr = 'url(imag/bird2.png)'}
				else if(ustr == 'url(imag/bird2.png)'){ustr = 'url(imag/bird3.png)'}
				else if(ustr == 'url(imag/bird3.png)'){ustr = 'url(imag/bird1.png)'}
			},
		}
	man = {
		timer:null,
		walk:function(){
			$('div.man').css({backgroundImage:mstr});
			if(mstr == 'url(imag/boy-walk1.png)'){mstr = 'url(imag/boy-walk2.png)'}
				else if(mstr == 'url(imag/boy-walk2.png)'){mstr = 'url(imag/boy-walk3.png)'}
				else if(mstr == 'url(imag/boy-walk3.png)'){mstr = 'url(imag/boy-walk4.png)'}
				else if(mstr == 'url(imag/boy-walk4.png)'){mstr ='url(imag/boy-walk1.png)'}
			},
		rotate:function(){
			$('div.man').css({backgroundImage:mrstr[ro]});
			ro++;
			if(ro>5){clearInterval(man.timer);ro=0;}
			},
		}
	woman = {
		timer:null,
		rotate:function(){
			$('div.woman').css({backgroundImage:wrstr[rowo]});
			rowo++;
			if(rowo>5){clearInterval(woman.timer);rowo=0;}
			},
		}
	bird.timer = setInterval(function(){bird.fly()},200);	
	man.timer  = setInterval(function(){man.walk()},200);

var flostr = ['url(imag/snowflake1.png)','url(imag/snowflake2.png)','url(imag/snowflake3.png)','url(imag/snowflake4.png)','url(imag/snowflake5.png)','url(imag/snowflake6.png)'];
var fl = 0;
var flo = [];

	for(var i = 0;i<100;i++){
			var ele = document.createElement('div');
			ele.style.width = 41+'px';
			ele.style.height= 41 +'px';
			ele.style.background = 'url(imag/snowflake1.png)';
			ele.style.position = 'absolute';
			ele.style.left = Math.round(Math.random()*100) +'%';
			ele.style.top = Math.round(Math.random()*80)-30 +'%';
			ele.style.opacity = 0;
			ele.style.zIndex = 20;
			ele.className = 'flower';
			flo.push(ele);
		}	
	

		var ep=document.getElementsByClassName('bg3')[0];
		for(var i = 0; i< flo.length;i++){
				ep.appendChild(flo[i]);		
			}
		flower={
				timer:null,
				piao:function(){
					
					for(var i=0;i<flo.length;i++){
						fl = Math.round(Math.random()*5);
						var strf = '.flower:eq('+i+')';
						$(strf).css({backgroundImage:flostr[fl]});
							}
					},
			}
		flower.timer  = setInterval(function(){flower.piao()},3000)
	})


