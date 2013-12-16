var mainWindow = Ti.UI.createWindow({
	title: "Billionaire Gallery",
	backgroundColor: "black"
});

Ti.include("/Gallery.js");
mainWindow.open();
