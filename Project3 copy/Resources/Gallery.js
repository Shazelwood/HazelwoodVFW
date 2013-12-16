var galleryWindow = Ti.UI.createWindow({
	backgroundColor: "#F2F2F2",
	
});
var openGallery = Ti.UI.createView({
	backgroundColor: "#F2F2F2",
	borderColor: "white",
	borderRadius: 20,
	borderWidth: 1,
	height: 100,
	right: 5,
	left: 5
});
var textGal = Ti.UI.createLabel({
	text: "Open Gallery",
	color: "red"
	
});

openGallery.addEventListener("click", function(){
	var navWindow = Ti.UI.iOS.createNavigationWindow({
	backgroundColor: "red",
	window: galleryWindow
});
	
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Money");
var folderContents = gallery.getDirectoryListing();

var numberOfViews = folderContents.length;

var viewContainer = Ti.UI.createScrollView({
	top: 65,
	layout: "horizontal",
	width: Ti.UI.FILL,
	contentWidth: 315
	});

for(var i = 0; i < numberOfViews; i++){
	newView = Ti.UI.createView({
		backgroundColor: "#333",
		width: 100,
		height: 100,
		top: 5,
		left: 5,
	});
	newView.addEventListener("click", function(){
		var fullGal = Ti.UI.createWindow({
			backgroundColor: "white"
		});
		navWindow.openWindow(fullGal, {animate: true});
	});

	viewContainer.add(newView);

}


navWindow.add(viewContainer);
navWindow.open();
});
openGallery.add(textGal);
mainWindow.add(openGallery);

/*for(i = 0, j = folderContents.length; i<j; i++){
	var myImage = Ti.UI.createImageView({
		image: "Money/" + folderContents[i],
		height: 100
	});
	mainWindow.add(myImage);
	
}*/


/*var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "horizontal"
});

var numberOfViews = 10;

for(var i = 0; i < numberOfViews; i++){
	//How many pixels space/ how many views per row.
	var positionValue = 10/3;
	var newView = Ti.UI.createView({
	backgroundColor: "#333",
	width: 150,
	height: 150,
	top: positionValue,
	left: positionValue,
	right: positionValue,
	bottom: positionValue
});
win.add(newView);
		
}

win.open();*/

/*var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",
	layout: "horizontal"
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Money");
var folderContents = gallery.getDirectoryListing();

for(i = 0, j = folderContents.length; i<j; i++){
	var myImage = Ti.UI.createImageView({
		image: "Money/" + folderContents[i],
		height: 100
	});
	mainWindow.add(myImage);
	
}

mainWindow.add(myImage);
mainWindow.open();*/

/*var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2"
});

var numberOfViews = 50;
var viewContainer = Ti.UI.createScrollView({
	layout: "horizontal",
	width: 400,
	contentWidth: 500
	});

for(var i = 0; i < numberOfViews; i++){
	//How many pixels space/ how many views per row.
	var positionValue = 10/3;
	var newView = Ti.UI.createView({
	backgroundColor: "#333",
	width: 100,
	height: 100,
	top: 5,
	left: 5,
	right: 5,
	bottom: 5
});
viewContainer.add(newView);
}

mainWindow.add(viewContainer);
mainWindow.open();*/

/*var pictures = [
	"Money/amancio.jpg",
	"Money/bill.jpg",
	"Money/carlos.jpg",
	"Money/larry.jpg"		
];
var counter = 0,
status,
change;

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "f2f2f2"
});

var theImage = Ti.UI.createImageView({
	image: pictures[0]
});

var changeImage = function(){
	if(counter === pictures.length - 1){
		counter = 0;
		
	}else{
		counter++;
		
	}
	theImage.image = pictures[counter];
	
};

var start = function(){
	change = setInterval(changeImage, 50);
	status = "start";
};

var stop = function(){
	clearInterval(change);
	status = "stop";
};

start();
mainWindow.addEventListener("click", function(){
	if(status === "stop"){
		start();
	}else{
		stop();
	}
	
});
mainWindow.add(theImage);
mainWindow.open();*/

