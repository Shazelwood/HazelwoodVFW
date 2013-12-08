var mainWindow = Ti.UI.createWindow({
	title: "Grocery List"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window:  mainWindow
	
});


//Data
var fruits = [{title: "apples", description: "$0.59"}, {title: "pears", description: "$0.32"}, {title: "peaches", description: "$0.42"} ];
var veggies = [{title: "carrots"} , {title: "corn"}, {title: "potatoes"}];


var table = Titanium.UI.createTableView({
	
	
});

var fruitSection = Ti.UI.createTableViewSection({
	headerTitle: "Fruits",
	footerTitle: "List to buy"
	
});

var veggieSection = Ti.UI.createTableViewSection({
	headerTitle: "Veggie",
	footerTitle: "List to buy"
	
});
//set TableViewSection to the table
// setData can only accept array data types

var tableSections = [fruitSection, veggieSection];




var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: this.title
		});
	var detailLabel = Ti.UI.createLabel({
		text: this.desc
		
	});
	detailWindow.add(detailLabel);
	navWindow.openWindow(detailWindow, {animate: true});
};
//create TableViewRows
for ( var i = 0, j = fruits.length; i < j ; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: fruits[i].title,
		desc: fruits[i].description,
		hasChild: true
		});
		
	theRow.addEventListener("click", getDetail);
	fruitSection.add(theRow);
}

for ( var i = 0, j = veggies.length; i < j ; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: veggies[i].title,
		desc: fruits[i].title,
		hasChild: true
		});
		
	theRow.addEventListener("click", getDetail);
	veggieSection.add(theRow);
}


table.setData(tableSections);

mainWindow.add(table);
navWindow.open();
