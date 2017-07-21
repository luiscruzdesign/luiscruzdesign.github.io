// requestAnimFrame2: a browser API for getting smooth animations
window.requestAnimFrame2 = (function(){
  return  window.requestAnimationFrame2       || 
		  window.webkitRequestAnimationFrame2 || 
		  window.mozRequestAnimationFrame2    || 
		  window.oRequestAnimationFrame2      || 
		  window.msRequestAnimationFrame2     ||  
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

// Initializing the canvas2
// I am using native JS here, but you can use jQuery, 
// Mootools or anything you want
var canvas2 = document.getElementById("canvas-header");
// Initialize the context of the canvas2
var ctx2 = canvas2.getContext("2d");

// Set the canvas2 width and height to occupy full window
var W2 = window.innerWidth, H2 = '190';
canvas2.width = W2;
canvas2.height = H2;

// Some variables for later use
var particleCount2 = 70,
	particles2 = [],
	minDist2 = 50,
	dist2;

// Function to paint the canvas2 black
function paintcanvas2() {
	// Set the fill color to black
	ctx2.fillStyle = "#f2f3f3";
	
	// This will create a rectangle of white color from the 
	// top left (0,0) to the bottom right corner (W,H)
	ctx2.fillRect(0,0,W2,H2);
}

// Now the idea is to create some particles2 that will attract
// each other when they come close. We will set a minimum
// dist2ance2 for it and also draw2 a line when they come
// close to each other.

// The attraction can be done by increasing their velocity as 
// they reach closer to each other

// Let's make a function that will act as a class for
// our particles2.

function Particle2() {
	// Position them randomly on the canvas2
	// Math.random() generates a random value between 0
	// and 1 so we will need to multiply that with the
	// canvas2 width and height.
	this.x = Math.random() * W2;
	this.y = Math.random() * H2;
	
	
	// We would also need some velocity for the particles2
	// so that they can move freely across the space

	
	this.vx = -1 + Math.random() * 0.9;
	this.vy = -1 + Math.random() * 0.9;

	// Now the radius of the particles2. I want all of 
	// them to be equal in size so no Math.random() here..
	this.radius = 3;
	
	// This is the method that will draw2 the Particle2 on the
	// canvas2. It is using the basic fillStyle, then we start
	// the path and after we use the `arc` function to 
	// draw2 our circle. The `arc` function accepts four
	// parameters in which first two depicts the position
	// of the center point of our arc as x and y coordinates.
	// The third value is for radius, then start angle, 
	// end angle and finally a boolean value which decides
	// whether the arc is to be draw2n in counter clockwise or 
	// in a clockwise direction. False for clockwise.
	this.draw2 = function() {
		ctx2.fillStyle = "rgba(0,0,0,.1)";
		ctx2.beginPath();
		ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx2.fill();
	}
}

// Time to push the particles2 into an array
for(var i = 0; i < particleCount2; i++) {
	particles2.push(new Particle2());
}

// Function to draw2 everything on the canvas2 that we'll use when 
// animating the whole scene.
function draw2() {
	
	// Call the paintcanvas2 function here so that our canvas2
	// will get re-painted in each next frame
	paintcanvas2();
	
	// Call the function that will draw2 the balls using a loop
	for (var i = 0; i < particles2.length; i++) {
		p = particles2[i];
		p.draw2();
	}
	
	//Finally call the update2 function
	update2();
}

// Give every particle some life
function update2() {
	
	// In this function, we are first going to update2 every
	// particle's position according to their velocities
	for (var i = 0; i < particles2.length; i++) {
		p = particles2[i];
		
		// Change the velocities
		p.x += p.vx*0.2;
		p.y += p.vy*0.2;
			
		// We don't want to make the particles2 leave the
		// area, so just change their position when they
		// touch the walls of the window
		if(p.x + p.radius > W) 
			p.x = p.radius;
		
		else if(p.x - p.radius < 0) {
			p.x = W - p.radius;
		}
		
		if(p.y + p.radius > H) 
			p.y = p.radius;
		
		else if(p.y - p.radius < 0) {
			p.y = H - p.radius;
		}
		
		// Now we need to make them attract each other
		// so first, we'll check the dist2ance2 between
		// them and compare it to the minDist2 we have
		// already set
		
		// We will need another loop so that each
		// particle can be compared to every other particle
		// except itself
		for(var j = i + 1; j < particles2.length; j++) {
			p2 = particles2[j];
			dist2ance2(p, p2);
		}
	
	}
}

// Distance calculator between two particles2
function dist2ance2(p1, p2) {
	var dist2,
		dx = p1.x - p2.x,
		dy = p1.y - p2.y;
	
	dist2 = Math.sqrt(dx*dx + dy*dy);
			
	// Draw the line when dist2ance2 is smaller
	// then the minimum dist2ance2
	if(dist2 <= minDist2) {
		
		// Draw the line
		ctx2.beginPath();
		ctx2.strokeStyle = "rgba(0,0,0,.1)";
		ctx2.moveTo(p1.x, p1.y);
		ctx2.lineTo(p2.x, p2.y);
		ctx2.stroke();
		ctx2.closePath();
		
		// Some acceleration for the partcles 
		// depending upon their dist2ance2
		var ax = dx/50000,
			ay = dy/50000;
		
		// Apply the acceleration on the particles2
		p1.vx -= ax;
		p1.vy -= ay;
		
		p2.vx += ax;
		p2.vy += ay;
	}
}

// Start the main animation loop using requestAnimFrame2
function animloop2() {
	draw2();
	requestAnimFrame2(animloop2);
}

animloop2();