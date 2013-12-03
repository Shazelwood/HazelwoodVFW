Ti.UI.setBackgroundColor("green");

var mainWindow = Titanium.UI.createWindow({
	title: "My first window",
	backgroundColor: "#ff0000",
	backgroundImage: "Bob.jpg",
	id: "window1"
});

var title = Ti.UI.createView({
	//backgroundColor: [ { color: 'red', offset: 0.0}, { color: 'blue', offset: 0.25 }, { color: 'red', offset: 1.0 } ],
	backgroundColor: "black",
	borderRadius: 10,
	height: 50,
	top: 20,
	right: 5,
	left: 5
});
var titleName = Ti.UI.createLabel({
	color: "white",
	text: "Bob Marley's Albums."
	
});

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

title.add(titleName);
prev.add(prevText);
next.add(nextText);
text.add(changeText);
mainWindow.add(text);
mainWindow.add(prev);
mainWindow.add(next);
mainWindow.add(title);
mainWindow.open();