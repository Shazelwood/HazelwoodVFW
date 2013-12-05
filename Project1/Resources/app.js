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


require ("Require");

title.add(titleName);
mainWindow.add(title);
mainWindow.open();