var win = Ti.UI.createWindow({
	title:"Main Window",
	backgroundColor: "#adadad"
});
//View where we're going to call the animation.
var view = Ti.UI.createView({
  backgroundColor:'red'
});

var square = Ti.UI.createView({
	backgroundColor:"black",
	height: 50,
	width: 50
});
var invisible = Ti.UI.createAnimation();
invisible.visible = false;
invisible.duration = 1000;
//Animation is created here.
var animation = Ti.UI.createAnimation();
//The Views color changes to white.
animation.backgroundColor = 'white';
//length of the animation
animation.duration = 2000;

//function changes the color
var nextanimation = function() {
  animation.removeEventListener('complete',nextanimation);
  invisible.visible = true;
  animation.backgroundColor = 'blue';
  animation.autoreverse = true;
  square.animate(invisible);
  view.animate(animation);
};

animation.addEventListener('complete',nextanimation);
//animate method
view.animate(animation);
square.animate(invisible);
win.add(view);
win.add(square);
win.open();
