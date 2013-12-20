var currentWin = Ti.UI.currentWindow;


var myData = {
	"Hip Hop/R&B": {
		"headerTitle": "Hip Hop/R&B",
		"footerTitle": "Hip hop/R&B on the BillBoards",
		"rowData": [
			{artist: "Eminem ft. Rihanna", song: "The Monster", spot: "1", image: "Pictures/Rap/eminem.jpg", viewsTest: 8866941},
			{artist: "Drake ft. Majid Jordan", song: "Hold on, We're Going Home'", spot: "2",image: "Pictures/Rap/drake.jpg", viewsTest:31163421},
			{artist: "Macklemore & Ryan Lewis ft ScHoolboy Q & Hollis", song: "White Walls", spot: "3",image: "Pictures/Rap/mack.png", viewsTest:13834769},
			{artist: "Mike Will Made-it ft. Miley Cyrus, Wiz Khalifa & Juicy J",song:"23",spot:"4",image: "Pictures/Rap/mike.jpg", viewsTest:128805372},
			{artist: "Jay Z ft. Justin Timberlake", song:"Holy Grail", spot:"5",image: "Pictures/Rap/jay-z.jpg", viewsTest:57984621},
		]
	},
	"Country": {
		"headerTitle": "Country",
		"footerTitle": "Country on the Billboards",
		"rowData": [
			{artist: "Florida Georgia Line ", song:"Stay", spot:"1",image: "Pictures/Country/floridageorgialine.jpg", viewsTest:5708904},
			{artist: "Luke Bryan", song:"Drink A Beer", spot:"2",image: "Pictures/Country/luke.jpg", viewsTest:2324161},
			{artist: "Eli Young Band", song:"Drunk Last Night", spot:"3",image: "Pictures/Country/eliband.jpg", viewsTest:2014988},
			{artist: "Keith Urban And Miranda Lambert", song:"We Were Us", spot:"4",image: "Pictures/Country/keith.jpg", viewsTest:1146273},
			{artist: "Parmalee", song:"Carilna", spot:"5",image: "Pictures/Country/parmalee.jpg", viewsTest:1551169},
		]
	},
	"Pop": {
		"headerTitle": "Pop",
		"footerTitle": "Pop on the Billboards",
		"rowData": [
			{artist: "Eminem ft. Rihanna", song:"The Monster", spot:"1",image: "Pictures/Pop/em.jpg",viewsTest: 8866941},
			{artist: "Imagine Dragons", song:"Demons", spot:"2",image: "Pictures/Pop/imaginedragons.jpg",viewsTest:34405179},
			{artist: "OneRepublic", song:"Counting Stars", spot:"3",image: "Pictures/Pop/one.png",viewsTest:93683557},
			{artist: "Avicii", song:"Wake Me UP", spot:"4",image: "Pictures/Pop/avicii.jpg",viewsTest:346319658},
			{artist: "Miley Cyrus", song:"Wrecking Ball", spot:"5",image: "Pictures/Pop/miley.jpg",viewsTest:414968313},
		]
	},
	"Rock": {
		"headerTitle": "Rock",
		"footerTitle": "Rock on the Billboards",
		"rowData": [
			{artist: "Lorde", song:"Royals", spot:"1",image: "Pictures/Rock/lorde.jpg",viewsTest:115491613},
			{artist: "Imagine Dragons", song:"Demons", spot:"2",image: "Pictures/Rock/imaginedragons.jpg",viewsTest:34405179},
			{artist: "Passenger", song:"Let Her Go", spot:"3",image: "Pictures/Rock/passenger.png",viewsTest:154995373},
			{artist: "The Neighborhood", song:"Sweater Weather", spot:"4",image: "Pictures/Rock/neighbourhood.jpg",viewsTest:14021579},
			{artist: "Imagine Dragons", song:"Radioactive", spot:"5",image: "Pictures/Rock/imaginedragons2.png",viewsTest:110700555},
		]
	},
};
var table = Titanium.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
	
});

	


var theSections = [];

for(var n in myData){
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle: myData[n].headerTitle,
		footerTitle: myData[n].footerTitle
	});
	
	for ( var i = 0, j = myData[n].rowData.length; i < j ; i++){
		
		var theRow = Ti.UI.createTableViewRow({
			title: myData[n].rowData[i].spot + ". " + myData[n].rowData[i].artist,
			image: myData[n].rowData[i].image,
			views: myData[n].rowData[i].viewsTest,
			hasChild: true
		});
		
		
		tableSection.add(theRow);
	
	};
	
	theSections.push(tableSection);
	
};

table.addEventListener("click", function(event){
	var detailWindow = Ti.UI.createWindow({
		//backgroundColor: "e0d1bf",
		title: event.source.title
	});
	var currentView = Ti.UI.createView({
		opacity: .5,
		backgroundColor: "#00045a"
	});
		
	var pic =  Ti.UI.createImageView({
		height: 200,
		top: 20,
  		image: event.source.image
	});
 		
  	var record = Ti.UI.createImageView({
		title: "Video viewsTest",
		bottom: 10,
		left: 150,
		height: 150,
		width: 150,
		borderRadius: 75
		
	});
	
	var number = Ti.UI.createLabel({
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		text: "Number of video views on YouTube: " + event.source.views,
		font: {fontSize: 20, font: "arial"},
		color: "#97e5ff"
	});
	
	var numberView = Ti.UI.createView({
		width: 120,
		left: 10,
		height: Ti.UI.SIZE,
		borderColor: "#97e5ff",
		borderWidth: 2,
		bottom: 45,
		right: record.right + 10
	});
	
	numberView.add(number);	

	if(event.source.views<=1000000)
	{
		record.image = "http://www.whocollection.com/OddsAndSodsBPI1.jpg";
	}
	else if(event.source.views>=1000000 && event.source.views<10000000 ){
		record.image = "http://www.nextlevelgoldandplatinumrecords.com/gold_record.jpg";
	}
	else if(event.source.views>=10000000 && event.source.views<50000000){
		record.image = "http://www.garygo.tv/wp-content/uploads/2012/02/platinum_record.png";
		record.borderRadius = 70;
		record.width = null;
	}
	else if(event.source.views>=50000000 && event.source.views<100000000){
		record.image = "http://upload.wikimedia.org/wikipedia/commons/8/84/GoldeneLP.jpg";
	}
	else if(event.source.views>=100000000 && event.source.views<500000000){
		record.image = "http://cdn.luxatic.com/wp-content/uploads/2013/05/the-great-gatsby-gold-platinum-limited-edition-metallized-record-set-01-570x570.jpg";
	}
	detailWindow.add(currentView);
	detailWindow.add(numberView);
	detailWindow.add(record);
	detailWindow.add(pic);
	
	currentWin.nav.openWindow(detailWindow, {animate: true});
});
table.setData(theSections);
currentWin.add(table);