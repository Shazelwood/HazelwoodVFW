//require("BillionairesJSON");
var mainWindow = Ti.UI.createWindow({
	title: "Billionaires"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window:  mainWindow
	
});


//Data
var table = Titanium.UI.createTableView({
	
	
});

var billSect = Ti.UI.createTableViewSection({
	headerTitle: "Top 5 Billionaires",
	footerTitle: "List to buy"
	
});
//set TableViewSection to the table
// setData can only accept array data types

var tableSections = [billSect];

var fileName = 'Billionaires.json';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, fileName);


if (file.exists()) {
  var json = file.read();
  var jsonObject = JSON.parse(json);
  	f.write(JSON.stringify(resources));

    name = jsonObject.billionaires[0].name; 
    country = jsonObject.billionaires[0].country;
}

console.log(file);



var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "white",
		title: this.title
		});
	var detailLabel = Ti.UI.createLabel({
		text: this.desc
		
	});
	detailWindow.add(detailLabel);
	navWindow.openWindow(detailWindow, {animate: true});
};



//create TableViewRows
/*for ( var i = 0, j = myJSONObject.billionaires.length; i < j ; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: myJSONObject.billionaires[i].name,
		desc: myJSONObject.billionaires[i].country,
		hasChild: true
		});
		
	theRow.addEventListener("click", getDetail);
	billSect.add(theRow);
}*/


table.setData(tableSections);

mainWindow.add(table);
navWindow.open();
