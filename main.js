let carousel = document.getElementsByClassName("imagecarousel");
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];

var i = 0; 		
var images = [];	
var time = 2000;	

var playing = true;
var pauseButton = document.getElementById('pause');
	 
images[0] = "img1.jpg";
images[1] = "img2.jpg";
images[2] = "img3.jpg";
images[3] = "img4.jpg";
images[4] = "img5.png";

function changeImg(){
	
	
	if (playing==true){
		console.log('playing1');
			if(i < images.length - 1){
		i++; 
		} 
		else { 
			i = 0;
		} 
		document.slide.src = images[i];
	setTimeout(changeImg, time);
	} else {
		i=i;
		console.log('paused1');
		clearTimeout();
	}

}	

window.onload=changeImg;

//Pause automatic slideshow
function pauseSlide(event){ 
	console.log('paused')
	pauseButton.innerText = 'Play';
	playing = false;
}

//Play automatic slideshow
function playSlide(event){
	pauseButton.innerText = 'Pause';
	playing = true;
	changeImg();
}

pauseButton.addEventListener('click', function(){
	if(playing){
		pauseSlide();
	} else {
		playSlide();
	}
}) 

next.addEventListener('click', function() {
      console.log('forward');
      if (i >= images.length-1) {
        i = 0;
        document.slide.src = images[i];
      }else{
        i++;
        document.slide.src= images[i];
      }
    });

prev.addEventListener('click', function() {
      console.log('back');
      if (i <= 0) {
        i = images.length - 1;
        document.slide.src = images[i];
      }else{
        i--;
        document.slide.src= images[i];
      }
    });

    //Keyboard navigation

document.body.addEventListener("keydown", function (e) {
	var code = e.keyCode
	var evt = new Event("click");

	if (code == 39) {
		self.next.dispatchEvent(evt);
	}
	if (code == 37) {
		self.prev.dispatchEvent(evt);
    }
    if (code == 32 && playing === true) {
        pauseSlide();
    } else if (code == 32 && playing === false) {
        playSlide();
}});

