var currentWin = Ti.UI.currentWindow;
var currentView = Ti.UI.createView({
	opacity: .5,
	backgroundColor: "#5a0000"
});
var windowLabel= Ti.UI.createLabel({
	text: currentWin.text,
	color: "black"
});
var newButton = Ti.UI.createView({
	backgroundColor: "black",
	opacity: .5,
	height: 100,
	width: 100,
	borderRadius: 50,
	bottom: 20
});
var textHolder = Ti.UI.createView({
	borderColor: "red",
	borderRadius: 50,
	height: 100,
	width: 100,
	bottom: 20
});
var text = Ti.UI.createLabel({
	text: "Click Me",
	color: "red",
	font: font = { fontSize: 24, font: "AppleSDGothicNeo-Light" }
});
var imageView = Ti.UI.createView({
	top: 50,
	bottom: 150
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Gallery");
var folderContents = gallery.getDirectoryListing();
var array = [];
var image = Ti.UI.createImageView({
			image: "Gallery/" + folderContents[0]
		});
textHolder.addEventListener("click", function(event) {
        var j = Math.round(Math.random() * (folderContents.length - 1));
        var t = folderContents[j];
                image.image = "Gallery/" + t;
                array.push(t);
                folderContents.splice(j, 1);
                
                if(folderContents.length < 1){
                	folderContents = array.splice(0, array.length);
                };


	});

currentWin.add(currentView);
imageView.add(image);
currentWin.add(newButton);
textHolder.add(text);
currentWin.add(textHolder);
currentWin.add(imageView);
currentWin.add(windowLabel);
