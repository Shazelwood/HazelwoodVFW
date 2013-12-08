var myJSONObject = { 
	"RTS": {
		"billionaires" : [
			{
				"name": "Carlos Slim Helu",
				"country": "Mexico",
				"money":"$73 Billion",
				"business": "Telecom"
			},
			{
				"name": "Bill Gates",
				"country": "U.S.",
				"money":"$67 Billion",
				"business":"Microsoft"
			},
			{
				"name":"Amancio Ortega",
				"country": "Spain",
				"money":"$57 Billion",
				"business":"Zara"
			},
			{
				"name": "Warren Buffet",
				"country": "U.S.",
				"money": "$53.5 Billion",
				"business":"Berkshire Hathaway"
			},
			{
				"name":"Larry Ellison",
				"country": "U.S.",
				"money":"$43 Billion",
				"business":"Oracle"
			}
		]
	}
};

var table = Titanium.UI.createTableView({
	
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window:  mainWindow
});

var billSect = Ti.UI.createTableViewSection({
	headerTitle: "Top 5 Billionaires",
	footerTitle: "Top 5 Billionaires"
	
});
//set TableViewSection to the table
// setData can only accept array data types

var tableSections = [billSect];


var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "white",
		title: this.title
		});
	var detailLabel = Ti.UI.createLabel({
		text: this.title +" from " + this.country +  " made his money from " + this.business + ". Their networth is worth " + this.money +""
		
	});
	detailWindow.add(detailLabel);
	navWindow.openWindow(detailWindow, {animate: true});
};



//create TableViewRows
for ( var i = 0, j = myJSONObject.RTS.billionaires.length; i < j ; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: myJSONObject.RTS.billionaires[i].name,
		country: myJSONObject.RTS.billionaires[i].country,
		money: myJSONObject.RTS.billionaires[i].money,
		business: myJSONObject.RTS.billionaires[i].business,
		hasChild: true
		});
		
	theRow.addEventListener("click", getDetail);
	billSect.add(theRow);
}


table.setData(tableSections);

mainWindow.add(table);
navWindow.open();
