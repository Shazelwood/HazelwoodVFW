/*var myJSONObject = { 
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
};*/
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window:  mainWindow
});

var myData = {
	"billionaires": {
		"headerTitle": "Billionaires",
		"footerTitle": "Old Money",
		"rowData": [
			{title: "Carlos Slim Helu", country: "Mexico", money: "$73 Billion", business: "Telecom", image:"/money/carlos.jpg" },
			{title: "Bill Gates", country: "U.S.", money: "$67 Billion", business: "Microsoft", image:"/money/bill.jpg" },
			{title: "Amancio Ortega", country: "Spain", money: "$57 Billion", business: "Zara", image:"/money/amancio.jpg" },
			{title: "Warren Buffet", country: "U.S.", money: "$53.5 Billion", business: "Berkshire Hathaway", image: "/money/warren.jpg"},
			{title: "Larry Ellison", country: "U.S.", money: "$43 Billion", business: "Oracle", image:"/money/larry.jpg" },
		]
	},
	"Hip Hop millionaires": {
		"headerTitle": "Millionaires",
		"footerTitle": "Young Money",
		"rowData": [
			{title: "Diddy", country: "U.S.", money: "$50 Million", business: "Producer", image:"/money/diddy.jpg" },
			{title: "Jay Z", country: "U.S.", money: "$43 Million", business: "Producer/Rapper", image: "/money/jayz.jpg"},
			{title: "Dr. Dre", country: "U.S.", money: "$40 Million", business: "Producer", image: "/money/drdre.jpg"},
			{title: "Nicki Minaj", country: "U.S.", money: "$29 Million", business: "Rapper/Singer", image:"/money/nicki.jpg" },
			{title: "Birdman", country: "U.S.", money: "$21 Million", business: "CEO/Rapper", image:"/money/birdman.jpg"},
		]
	},
	
};

var table = Titanium.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
	
});

/*var billSect = Ti.UI.createTableViewSection({
	headerTitle: "Top 5 Billionaires",
	footerTitle: "Top 5 Billionaires"
	
});*/
//set TableViewSection to the table
// setData can only accept array data types

//var tableSections = [billSect];



//win.add(pic);
	


var theSections = [];
//create TableViewRows
for(var n in myData){
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle: myData[n].headerTitle,
		footerTitle: myData[n].footerTitle
	});
	for ( var i = 0, j = myData[n].rowData.length; i < j ; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: myData[n].rowData[i].title,
		country: myData[n].rowData[i].country,
		money: myData[n].rowData[i].money,
		business: myData[n].rowData[i].business,
		image: myData[n].rowData[i].image,
		hasChild: true
	});
	
	
	tableSection.add(theRow);
	//theRow.addEventListener("click", getDetail);
	};
	theSections.push(tableSection);
	
}
//source property holds the properties of the Row. 
table.addEventListener("click", function(event){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "e0d1bf",
		barColor: "e9a555",
		title: event.source.title
		});
	//var win = Ti.UI.createView();
	var pic =  Ti.UI.createImageView({
		height: 200,
		top: 20,
  		image: event.source.image
 });
  	var detailLabel = Ti.UI.createLabel({
		text: event.source.title +" from " + event.source.country +  " made his/her money from " + event.source.business + ". Their networth is worth " + event.source.money +"",
		font: {fontSize: 18, fontFamily: "Arial"},
		top: 250
	});
	detailWindow.add(pic);
	detailWindow.add(detailLabel);
	navWindow.openWindow(detailWindow, {animate: true});

});

table.setData(theSections);

mainWindow.add(table);
navWindow.open();

