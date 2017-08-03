/**
 * Create By zkk on 2016/12/09
 */
var imgUrl = 'books.png';
var positions = ['0 0', '-250 0', '-500 0', '-750 0'];

var ele = document.getElementById('contain');
var test = document.getElementById('test');

var animation = window.animation;
var target = 0;

var scaleWidthAnimation = animation().enterFrame(function(success, time){
	startMove3(test, target, 'width', 'scaleWidthAnimation');
});

var scaleHeightAnimation = animation().enterFrame(function(success, time){
	startMove3(test, target, 'height', 'scaleHeightAnimation');
});

document.onclick = function() {
	target = 250;
	scaleWidthAnimation.start(20);
	scaleHeightAnimation.start(20);
}

test.onmouseout = function() {
	target = 0;
	scaleWidthAnimation.start(20);
	scaleHeightAnimation.start(20);
}

function startMove3(obj, iTarget, attr, name){
	var value = parseInt(obj.style[attr]);
	var speed = (iTarget - value) / 4;
	speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	if (value == iTarget) {
		animation().dispose(name);
	} else {
		obj.style[attr] = value + speed + 'px';
	}
}

// var repeatAnimation = animation().loadImage([imgUrl]).changeSrc(ele, [imgUrl]).changePosition(ele, 
// 	positions, imgUrl);
// 	repeatAnimation.start(500);

// var test = animation().loadImage([imgUrl]).wait(5000).enterFrame(function(){
// 	//var ele = document.getElementById('contain');
// 	if(ele.style.width == '200px'){
// 		ele.style.width = '500px';
// 	}else{
// 		ele.style.width = '200px';
// 	}
// }).start(1000);

// animation(ele, positions, imgUrl);

// function animation(ele, positions, imgUrl) 
// {
	// ele.style.backgroundImage = 'url(' + imgUrl + ')';
	// ele.style.backgroundRepeat = 'no-repeat';

	// ele.onclick = function(){
	// 	run();
	// }

	// var index = 0;
	// var marginTop = -50;

	// function run() {
	// 	var position = positions[index].split(' ');
	// 	ele.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
	// 	marginTop += 50;
	// 	ele.style.marginTop = marginTop + 'px'; 
	// 	index++;
	// 	if (index >= positions.length) {
	// 		index = 0;
	// 	}
	// 	if (marginTop > window.innerHight - 250){
	// 		window.scrollTop = marginTop;
	// 	}

	// 	//setTimeout(run, 100);
	// }	

	// run();
// }

