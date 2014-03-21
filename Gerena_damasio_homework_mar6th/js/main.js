/*
     Name:Damasio Eli Gerena
     Date:Mar 5 2014
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
// var cSet=document.getElementById("first-canvas");\
// var ctx=document.getContext("2d");


/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


/* --------- begin my code ----------- */
window.onload=function(){
	var cSet1=document.getElementById("Fcanvas");
	var cSet2=document.getElementById("Scanvas");
	var cSet3=document.getElementById("Tcanvas");
	var cSet4=document.getElementById("FourCanvas");
	var cSet5=document.getElementById("FiveCanvas");
	var cSet6=document.getElementById("SixCanvas");
	var cSet7=document.getElementById("SevenCanvas");
	var canCheck=function(){
		if(Modernizr.canvas){
			console.log("hello");
			var ctx=cSet1.getContext("2d");
			ctx.font='25pt Georgia';
			ctx.fillText('Canvas is supported.',100,100);
		}else{

		};
		console.log(Modernizr);
	};


	cSet1.width=600;
	cSet1.height=cSet1.width;
	cSet2.width=cSet1.height;
	cSet2.height=cSet2.width;
	cSet3.width=cSet1.height;
	cSet3.height=cSet3.width;
	cSet4.width=cSet1.height;
	cSet4.height=cSet4.width;
	cSet5.width=cSet1.height;
	cSet5.height=cSet5.width;
	cSet6.width=cSet1.height;
	cSet6.height=cSet6.width;
	cSet7.width=cSet1.height;
	cSet7.height=cSet7.width;
	//rectangle
	var canOne=function(){
		if(cSet1&&cSet1.getContext){
			console.log("hello");
			var ctx=cSet1.getContext("2d");
			if(ctx){
				ctx.strokeStyle='black';
				ctx.lineWidth=5;
				ctx.strokeRect(0,0,50,100);

				ctx.fillStyle='rgb(10,10,200';
				ctx.fillRect(0,0,50,100);
				//draw here 
			};
		};
	};
	//circle and arcs
	var canTwo=function(){
		if(cSet2&&cSet2.getContext){
			console.log("hello");
			var ctx=cSet2.getContext("2d");
			if(ctx){
				ctx.fillStyle='rgba(155,0,0,0.5)';
				ctx.beginPath();
				ctx.arc(100,100,20,0,(360/180)*Math.PI,true )
				ctx.fill();
				ctx.strokeStyle='black';
				ctx.beginPath();
				ctx.arc(100,100,30,0,(360/180)*Math.PI,true)
				ctx.stroke();
				//draw here 
			};
		};
	};
	//paths
	var canTre=function(){
		if(cSet3&&cSet3.getContext){
			console.log("hello");
			var ctx=cSet3.getContext("2d");
			for (var i = 0; i<10; i++) {		
				var lineWidths=function(){
					ctx.beginPath();
					ctx.lineWidth=i;
					ctx.moveTo(25,25+i*15);
					ctx.lineTo(475,25+i*15);
					ctx.stroke();
					console.log('first');
				};
				var lineFun=function(){
					ctx.strokeStyle='rgba(0,40,0,0.8)';
					ctx.lineWidth=1;
					ctx.beginPath();
					ctx.moveTo(50,25);
					ctx.lineTo(50,175);
					ctx.moveTo(450,25);
					ctx.lineTo(450,175);
					ctx.stroke();
					console.log('second');
				};
				//line caps
				var lineCaps=function(){
					//butt
					ctx.lineWidth=15;
					ctx.strokeStyle='black';
					ctx.lineCap='butt';
					ctx.beginPath();
					ctx.moveTo(250,200);
					ctx.lineTo(300,250);
					ctx.stroke();
					//round
					ctx.lineWidth=15;
					ctx.strokeStyle='red';
					ctx.lineCap='round';
					ctx.beginPath();
					ctx.moveTo(300,250);
					ctx.lineTo(350,250);
					ctx.stroke();
					//square
					ctx.lineCap='square';
					ctx.beginPath();
					ctx.moveTo(350,250);
					ctx.lineTo(300,300);
					ctx.stroke();
					console.log('third');
					//line joins
					ctx.lineJoin='round';
					ctx.strokeStyle='green';
					ctx.beginPath();
					ctx.moveTo(300,300);
					ctx.lineTo(350,350);
					ctx.lineTo(250,320);
					ctx.stroke();

					ctx.lineJoin='bevel';
					ctx.strokeStyle='green';
					ctx.beginPath();
					ctx.moveTo(250,320);
					ctx.lineTo(150,350);
					ctx.lineTo(200,310);
					ctx.stroke();

					ctx.lineJoin="miter";
					ctx.miterLimit=10;
					ctx.strokeStyle='gray';
					ctx.fillStyle='red';
					ctx.beginPath();
					ctx.moveTo(200,310);
					ctx.lineTo(150,250);
					ctx.lineTo(200,250);
					ctx.lineTo(250,200);
					ctx.fill();
					ctx.stroke();
				};
			lineWidths();


			};
		lineFun();
		lineCaps();

		};
	};
	//Bezier curves
	var canFor=function(){
		if(cSet4&&cSet4.getContext){
			console.log("hello");
			var ctx=cSet4.getContext("2d");
			var umb=function(){
				ctx.fillStyle='rgba(0,155,0,0.5)';
				ctx.beginPath();
				ctx.arc(300,250,200,0,1*Math.PI,true);
				ctx.fill();
			};
			var umbDivit=function(){
				for(var i=0;i<10;i++){
					ctx.beginPath();
				ctx.fillStyle='rgba(100,15,0,1)';
				ctx.arc(120+i*40,250,20,0,1*Math.PI,true);
				ctx.fill();
				};
			};
			umb();
			umbDivit();
		};
	};
	//text render
	var canFiv=function(){
		if(cSet5&&cSet5.getContext){
			console.log("hello");
			var ctx=cSet5.getContext("2d");
			if(ctx){
				var str="Awesomeness!";
				ctx.font='40pt Georgia';
				ctx.fillStyle='blue';
				ctx.fillText(str,20,40);

			};
		};
	};
	//image draw
	var canSix=function(){
		if(cSet6&&cSet6.getContext){
			console.log("hello");
			var ctx=cSet6.getContext("2d");
			if(ctx){
				var srcImg=document.getElementById('logo');
				ctx.drawImage(srcImg,0,0);
				ctx.drawImage(srcImg,0,0,300,100);
				ctx.drawImage(srcImg,1250,560,150,150,100,50,200,210);
			};
		};
	};
	//combo
	var canSev=function(){
		if(cSet7&&cSet7.getContext){
			console.log("hello");
			var ctx=cSet7.getContext("2d");
			if(ctx){
				var pacman=function(){
					ctx.fillStyle='#ffee00';
					ctx.strokeStyle="black";
					ctx.lineWidth=5;
					ctx.beginPath();
					ctx.arc(100,100,30,0,(360/180)*Math.PI,false);
					ctx.fill();
					ctx.stroke();
					ctx.fillStyle='black';
					ctx.beginPath();
					ctx.arc(110,90,5,0,(360/180)*Math.PI,false);
					ctx.fill();
				};
				var pellet=function(){
					for(var i=0;i<10;i++){
						ctx.fillStyle='#ccc';
						ctx.beginPath();
						ctx.arc(100+i*20,100,5,0,(360/180)*Math.PI,false);
						ctx.fill();
					};
				};
				var ghost=function(){
					var umb=function(){
						ctx.fillStyle='rgb(10,10,200';
						ctx.beginPath();
						ctx.arc(100,250,30,0,1*Math.PI,true);
						ctx.fill();
						ctx.fillStyle='rgb(10,10,200';
						ctx.fillRect(70,250,60,50);
						for(var i=0;i<2;i++){
							ctx.fillStyle='gray';
							ctx.beginPath();
							ctx.arc(95+i*20,250,10,0,(360/180)*Math.PI,false);
							ctx.fill();
							ctx.fillStyle='black';
							ctx.beginPath();
							ctx.arc(100+i*20,250,5,0,(360/180)*Math.PI,false);
							ctx.fill();
							
						};
						for(var i=0;i<3;i++){
							ctx.beginPath();
							ctx.fillStyle='#fff';
							ctx.arc(80+i*20,300,10,0,1*Math.PI,true);
							ctx.fill();
						};

					};
					umb();
				};
				var attempt=function(){
					var str="Attempted to make and move assets to creat a pacman animation.";
					ctx.font='1 0pt Georgia';
					ctx.fillStyle='blue';
					ctx.fillText(str,20,40);
				};
				attempt();
				ghost();
				pellet();
				pacman();
				

			};
		};
	};
	canCheck();
	canOne();
	canTwo();
	canTre();
	canFor();
	canFiv();
	canSix();
	canSev();
};