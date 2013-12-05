var text = Ti.UI.createView({
	backgroundColor: "black",
	borderColor: "white",
	borderRadius: 20,
	borderWidth: 1,
	height: 100,
	right: 5,
	left: 5,
});

var changeText = Ti.UI.createLabel({
	text: "",
	color: "white",
	font: {fontSize: 16, fontFamily: "Helvetica"},
	height: Ti.UI.SIZE,
	left: 15,
	right:15,
	top: 5,
	bottom: 5
});

var prev = Ti.UI.createView({
	backgroundColor: "black",
	borderColor: "white",
	borderWidth: 3,
	height: Ti.UI.SIZE,
	right: 200,
	left: 5,
	bottom: 10

});

var next = Ti.UI.createView({
	backgroundColor: "black",
	borderColor: "white",
	borderWidth: 3,
	height: Ti.UI.SIZE,
	left: 200,
	right: 5,
	bottom: 10

});

var nextText = Ti.UI.createLabel({
	text: "next",
	color: "white",
	font: {fontSize: 20, fontFamily: "Helvetica"},
	height: Ti.UI.SIZE,
	left: 35,
	right:35,
	top: 5,
	bottom: 5
});

var prevText = Ti.UI.createLabel({
	text: "previous",
	color: "white",
	font: {fontSize: 20, fontFamily: "Helvetica"},
	height: Ti.UI.SIZE,
	left: 15,
	right:15,
	top: 5,
	bottom: 5
});



var albums = ["Kaya", "Exodus", "Uprising", "Burnin", "Rastaman Vibration", "Songs of Freedom", "Rasta Revolution", "Grooving Kingston 12"];

var i = 0;

var funcNext = function(x){
	/*for (var i = 0; i<albums.length; i++){
		changeText.text = albums[i];
	}*/
	
	if (i === (albums.length - 1)){
		i = 0;
		changeText.text = albums[i];
	}else {
		i++;
		changeText.text = albums[i];
	}
	
};

var funcPrev = function(prev){
	/*for (var i = 0; i<albums.length; i--){
		changeText.text = albums[i];
	}*/
	
	if (i === 0){
		i = (albums.length - 1);
		i = 0;
		changeText.text = albums[i];
	}else {
		i--;
		changeText.text = albums[i];
	}
};


next.addEventListener("click", funcNext);
prev.addEventListener("click", funcPrev);

text.add(changeText);
mainWindow.add(text);
mainWindow.add(prev);
mainWindow.add(next);
prev.add(prevText);
next.add(nextText);