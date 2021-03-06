# Week 2 Notebook
### 1/29/18-2/4/18
#### Advisor: Jim Skon
Spoke with Jim Skon about the Belize Solar Panel data he has been collecting with the goal of creating a better website for data visualization. Decided to collaborate with Kara Braun and Matt Carney on the project. Below is some research and tenative plans for the course of the project.

##### Requirements: 
* Analysis - summary, cost, power output, efficiency
* Time Scales - now, day, week, month, long-term, YTD, seasonal
* Site/location based data
* Visualizations - map, data
* Background - Belize Solar Project, location, climate, pictures
* User Interface - refresh to same page, update home page
* Performance - database sub-tabling, minimize clicking

##### Background:
###### Solar Energy:
* Traditional energy resources are becoming less viable
* Energy from the sun is converted into thermal or electrical energy
* Solar is clean and abundant
* Panels are typically placed on roofs or in direct line with sunlight 
###### Belize:
* Eastern Coast of Central America
* Tropical climate - two seasons (hot and dry)
* Avg. temperature 84 degrees F
###### Belize Solar Project:
* Jim Skon and group of Kenyon Students
* Volunteer to install solar panels on primary schools in the area
  * Schools gained access to new computer labs so they need more power
* Grid-tie Solar Power Systems
###### Current Website Research
* Show refresh of summary page
  * very slow, graphs not labeled, comparing data from different times with different scales
* Specific site
  * Static page with no interactive visualizations, real-time data not really in real time, generally, more information can be gathered by adding or changing the current visualizations
* Graphs - only shows data from one day
##### Our plan
###### Overview
Create/upgrade a website that analyses the data in an efficient way. Our website will allow user interaction with the data and provide clear and informative data visualizations.
###### Data Retrival and Management
* As of right now, this will be Kara's component
###### Data Analysis
* Matt's section
###### Data Visualizations
* I will be the lead person for this section of the project
* Goal - display the findings of our analyses in a clear and interactive way
* What makes good visualizations
  * Clear context that is measured against clear goals
  * Simple and digestible
  * Choose the right visual for the purpose
  * Keep users engaged
* Types of visualizations
  * Line charts
  * Bar charts
  * Scatter plots 
  * Bubble charts 
  * Pie charts
  * Etc.
* Connect visualizations with locations on map
* Tableau Software
  * Data visualization tool that allows you to input your own data
  * Can be used to compare your data based on different constraints
  * Interactive element with the users 
  
#### Up Next
This next week, we will finalize the list of project requirements and meet with Jim Skon to get time estimates for each section of the project in order to divide the work. This will allow us to begin our individual components of the project. I also plan to talk to Skon about Tableau to make sure it will be appropriate for his dataset. 


# Week 3 Notebook
### 2/5/18-2/11/18

#### Overview
This week, most of my efforst were in researching Tableau and HighChart, and deciding which visualizations to include in the final project. After some thought, I decided to download Tableau and try to make a visualization. I also created a mockup of what will be included in each page of the website. A layout description and walkthrough of Tableau is below. 

#### Layout
Created list of personal requirements for the layout of the website and data visualizations
1. Improve homepage - brief project description, example visualization
2. Include project description page - description, history, pictures
3. Include importance and background of solar - Location description, possible weather, diagram of panel connections and how it works.
4. Power produced from solar panels page - user interaction with changing time and/or locations
5. Cost analysis page - stacked bars, user interaction with location
6. Performance decay page - stacked bars, user interaction with location

#### Tableau
Need to be able to import a data set and provide the appropriate visualization. The goal of this exercise was to see if Tableau is an appropriate choice for the data visualizations we want. 

The data set that I used was the csv file from August 2016, which is an example data set on his project site. This gave data on the specific locations, where the data was split into 4 columns (location, watts vs. volts, amount of watts or volts, time stamp). Tableau has a quick and easy way to import a data set - Connect, to a file, text file, select file on local machine. Once the data set is connected, select the Sheet 1 tab on the bottom of the page. This will take you to the page where you can create your data visualizations. From here, you can drag dimensions and/or measures to the columns/rows input bars. 

The current data set isn't labeled so I still have to figure out how to create appropriate labels for the graphs. From this exercise, I created two different types of visualizations. One that is one line graph where hours (24) is on the x-axis and volts is on the y-axis. The user can overlay their mouse along the visualization where they are told the location, exact hour and number of volts corresponding to that line. The lines are also different colors to indicate the different locations. Tableau also generated a legend where the user could tell which color corresponds to which location without having to interact with the graph. Another visualization that I created is very similar to the first but I was able to split it up into different graphs depending on the location. 

# Week 4 Notebook
### 2/12/18-2/18/18

#### Overview
This week, I recieved website code from Professor Skon and experimented more with Tableau. Skon gave me access to the html and js files for the project. 

#### Setting up website to personal computer 
After recieving the html and js files and reviewing them, the next step was to get the website working on my personal computer since I don't have access to his log in information. My goal was to be able to get the website running on my computer through the Kenyon cs server, which I have access to through another course. 

In order to access code, I viewed the page source on the current website in order to get the code for html and js. Then, through BBEdit, I created new personal files called Solar.html, Solarx.js, Solar.css and my Makefile. Through my Linux terminal, I created a new project (SolarProject) then saved my new files to that location. I added the current code to the html and js files, and created my Makefile. In order for the Makefile to push my files to the cs server, I created a new directory (mkdir) on the server and used my Makefile to allow me to view the html on Chrome. 

After this, it seems like I have files missing that I currently don't have access to since the html is very minimal and doesn't look much like the original website. 

#### Current Code 
Here are sections of the code for the current html file. I've excluded all of the actual layout information and just kept the dependencies. 
```
<!DOCTYPE html>
<meta http-equiv="refresh" content="3000" >
<html>
    <head>
        <meta charset="UTF-8">
            <title>Belize Solar Summary</title>
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                <script src="/solar/RGraph/libraries/RGraph.common.core.js"></script>
		<script src="/solar/RGraph/libraries/RGraph.common.dynamic.js"></script>
		<script src="/solar/RGraph/libraries/RGraph.common.tooltips.js"></script>
                <script src="/solar/RGraph/libraries/RGraph.gauge.js"></script>
		<script src="/solar/RGraph/libraries/RGraph.bar.js"></script>
		<script src="/solar/RGraph/libraries/RGraph.line.js"></script>
		<script src="/solar/RGraph/libraries/RGraph.hprogress.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
		<link rel="stylesheet" href="/solar/lib/bootstrap-datepicker.min.css">
		<script src="/solar/lib/bootstrap-datepicker.min.js"></script>
		
  <body>
  //Professor Skon's code here
                
   <script src="Solarx.js"></script>
    </body>
</html>
```
The current javascript file is as follows. 
```javascript
var summaryActive = true;
var gauge = [];
var line = [];
var bar;
var onegauge;
var updateGauges = null;
var updateGraphs = null;
var updateSite = null;
var BELIZEPOWERCOST = 0.38;
var days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
var timeOffset = -1; //Time Shift from server
var sites;
var ONE_HOUR = 60 * 60 * 1000; /* ms */
$('#datepickergraph').datepicker({
    endDate: new Date(),
});
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() -1 );
$('#datepickergraph').datepicker("setDate", yesterday);


summarytable = function (powers, volts, daySum, week) {

  var table = "";
    table += "<table class='table'><tbody>";
    if (powers.length == 1) {
	table += "<thead><tr><th>Statistics</th><th></th></tr></thead>";
        table += "<tr><td>Watts</td><td>"+powers[0]+"</td></tr>";
	table += "<tr><td>Volts</td><td>"+volts[0]+"</td></tr>";
	table += "<tr><td>KW Today</td><td>"+(daySum[0]/1000).toFixed(2)+"</td></tr>";
	table +=" <tr><td>KW Week</td><td>"+(sumArray(week)).toFixed(2)+"</td></tr>";
    } else {
	table += "<thead><tr><th></th><th>Bank 1</th><th>Bank 2</th><th>Sum</th></tr></thead>";
        table += "<tr><td>Watts</td><td>"+powers[0]+"</td><td>"+powers[1]+"</td><td>"+(parseInt(powers[0])+parseInt(powers[1]))+"</td></tr>";
        table += "<tr><td>Volts</td><td>"+volts[0]+"</td><td>"+volts[1]+"</td><td>"+(parseInt(volts[0])+parseInt(volts[1]))+"</td></tr>";
	table +=" <tr><td>KW Today</td><td>"+(daySum[0]/1000).toFixed(2)+"</td><td>"+(daySum[1]/1000).toFixed(2)+"</td><td>"+((daySum[0]+daySum[1])/1000).toFixed(2)+"</td></tr>";
	table +=" <tr><td>KW Week</td><td colspan='3'><center>"+(sumArray(week)).toFixed(2)+"</center></td></tr>";
	

  }
    table += "</tbody></table>";
    return table;

}

sumArray = function(a) {
    var total = 0;
    $.each(a,function() {
	total += parseFloat(this);
    });
    return total;
}

addElementIfNotExist = function(a,i) {
    while (a.length < i+1) {
	a.push(0);
    }
}

startsitedisplay = function(site) {

   clearInterval(updateGauges);
    clearInterval(updateSite);
    updateGauges = null;
    updateSite = null;

   updateSite = setInterval ( function(){ sitedisplay(site);}, 60000 );
    sitedisplay(site);

}

sitedisplay = function (site) {

   $('#Summary').collapse("hide");
    $('#Site').collapse("show");
    $('#Site2').collapse("show");
    $('#minuteGraphs').collapse("hide");
    summaryActive = false;
    clearInterval(updateGraphs);
    updateGraphs = null;


   $.ajax({
	url: "Solar.php",
	type: "POST",
	dataType: "json",
	data: {
	    "action": "getSite",
	    "site": site
        },
	cache: false,
	success: function (response) {
	    $('#sitename').html("<h1>"+response["name"]+"</h1>");
	    //console.log(JSON.stringify(response));
	    var timestamps = $.map(response["timestamps"], function(el) { return el });
	    var max = response["max"];
	    var powers = $.map(response["powers"], function(el) { return el });
	    var volts = $.map(response["volts"], function(el) { return el });
	    var power = powers.reduce(function(pv, cv) { return parseInt(pv) + parseInt(cv); }, 0);	          
	    RGraph.Clear(document.getElementById("gauge"));
	    onegauge = new RGraph.Gauge({
		id: "gauge",
		min: 0,
		max: max,
		value: power,
		options: {
                    backgroundColor: 'white',
                    textColor: 'black',
                    labelsCount: 6,
                    tickmarksBig: 6,
                    tickmarksBigColor: 'black',
                    tickmarksSmall: 24,
                    tickmarksSmallColor: 'black',
                    needleType: 'line',
                    needleTail: true,
                    needleColors: ['black'],
                    centerpinRadius: 10,
                    centerpinColor: 'black',
                    redColor: 'rgba(0,0,0,0)',
                    yellowColor: 'rgba(0,0,0,0)',
                    titleTop: 'Watts',
                    titleTopSize: '12',
                    titleTopColor: 'black',
                    titleBottom: 'Active Power',
                    titleBottomSize: '10',
                    titleBottomColor: 'black',
                    shadow: false
		}
            }).draw();
            $("#gts").empty();
            $("#gts").append("<center><p>"+timestamps[0]+"</p></center>");
	    
	    
 var banks = parseInt(response["banks"]);
	    var hours = $.map(response["hours"], function(el) { return parseInt(el)+timeOffset });
	    var bankhour = [];
	    var daySum = [];
	    var houraverage = [];
	    var hourlab = [];
	    var week = [0.0,0.0,0.0,0.0,0.0,0.0,0.0];
	    for (var b=0; b<banks ; b++ ) {	
		var weekbank = $.map(response["week"][b], function(el) { return el });
		for (var i = 0; i < 7 ; i++) {
		    week[i] += weekbank[i];
		}
		bankhour = ($.map(response["average"][b], function(el) { return el }));
		daySum.push(sumArray(bankhour));
		for (var i=0, j=0; i<hours.length; i++) {
		    if (hours[i] >= 6 && hours[i] <=19) {
			addElementIfNotExist(bankhour,i);
			addElementIfNotExist(hourlab,j);
			hourlab[j]=hours[i];
			addElementIfNotExist(houraverage,j);
			houraverage[j] += parseFloat(bankhour[i]);
			j++;
		    }
		}
	    }
	    RGraph.Clear(document.getElementById("hourlyGraph"));
            bar = new RGraph.Bar({
                id: 'hourlyGraph',
                data: houraverage,
                options: {
                    gutterRight: 45,
                    gutterLeft: 45,
                    gutterTop: 35,
                    gutterBottom: 35,
                    shadow: false,
                    strokestyle: 'rgba(0,0,0,0)',
                    grouping: 'grouped',
		    labelsAbove: houraverage,
                    hmargin: 7,
                    hmarginGrouped: 3,
                    colors: ['green','black'],
                    keyPosition: 'gutter',
                    backgroundGridVlines: false,
                    backgroundGridBorder: false,
                    textColor: 'black',
                    labels: hourlab
                    //key: ['Bank 1', 'Bank 2']
                }
            }).draw();

$('#datatable').html(summarytable(powers, volts, daySum, week));
	    week[6] = (daySum[0]+(daySum[1]?daySum[1]:0))/1000;  // Fix total for today
	    var d = new Date();
	    var n = d.getDay()

 RGraph.Clear(document.getElementById("weekgraph"));
            bar = new RGraph.Bar({
                id: 'weekgraph',
                data: week,
                options: {
                    gutterRight: 35,
                    gutterLeft: 45,
                    gutterTop: 35,
                    gutterBottom: 35,
                    shadow: false,
                    strokestyle: 'rgba(0,0,0,0)',
                    grouping: 'grouped',
		    labelsAbove: week,
                    hmargin: 7,
                    hmarginGrouped: 3,
                    colors: ['green','black'],
                    keyPosition: 'gutter',
                    backgroundGridVlines: false,
                    backgroundGridBorder: false,
                    textColor: 'black',
                    labels: days.slice(n,n+7)
                }
            }).draw();
	}
    });
}


summary = function (sites) {
    // Display Gauges
    $.each(sites, function(site, data) {
	var total = 0;
	var powers = [];

//var powers = data.powers;
	//console.log("Gauges:"+JSON.stringify(powers));
	var timestamps = [];
	var today = new Date();
	var infoid = "info"+(site+1);
	$.each(data.timestamps, function(index, date) {
		Date.parse(date.replace(/-/g,"/"));
		var timestampdate = new Date(date);
		if (today - timestampdate > ONE_HOUR) {
			data.powers[index] = "0";
			$("#"+infoid).html("<span class='small'>Bank "+(index+1)+" Offline since: "+ date+"<br />");
			timestamps.push(0);
	    } else {
	    	timestamps.push(data.powers[index]+" Watts, "+date);
	    }
    });
	// total powers
	$.each(data.powers, function(index, quant) {
	    total += parseInt(quant);
	    powers.push(parseInt(quant));
	});
    //console.log("TS:"+JSON.stringify(timestamps));
	var name = data["name"];
	var tid = "t"+(site+1);
	$("#"+tid).html("<center>"+name+"<br /><span class='small'>"+total+" Watts</span></center>");
	var id = "g"+(site+1);
	var max = data["max"];
	gauge[site] = new RGraph.HProgress({
	    id: id,
	    min: 0,
	    max: max,
	    value: powers,
	    options: {
		textAccessible: true,
		margin: 2,
		bevel: true,
		tooltips: timestamps,
		colors: ['purple','Plum'],
		backgroundColor: 'white'
	    }
	}).grow();
    });
    summaryActive = true;
    updateGauges = setInterval ( updateGauges, 10000 );
}

updateGauges = function() {
    if (summaryActive) {
	$.ajax({
	    url: "Solar.php",
	    type: "POST",
	    dataType: "json",
	    data: {
		"action": "getSummary"
            },
	    cache: false,
	    success: function (response) {
		$.each(response, function(site, data) {
			var total = 0;
			var timestamps = [];
			var powers = [];
			var today = new Date();
			var infoid = "info"+(site+1);
			$.each(data.timestamps, function(index, date) {
				Date.parse(date.replace(/-/g,"/"));
				var timestampdate = new Date(date);
				if (today - timestampdate > ONE_HOUR) {
					data.powers[index] = "0";
					//console.log("Gauges2:"+site+":"+total+":"+JSON.stringify(powers));

$("#"+infoid).html("<span class='small'>Bank "+(index+1)+" Offline since: "+ date+"<br />");
					timestamps.push("0");
	    		} else {
	    			timestamps.push(data.powers[index]+" Watts, "+date);
	    		}
    		});
			$.each(data.powers, function(index, quant) {
	    		total += parseInt(quant);
	    		powers.push(parseInt(quant));
			});
			var name = data["name"];
			var tid = "t"+(site+1);
			$("#"+tid).html("<center>"+name+"<br /><span class='small'>"+total+" Watts</span></center>");

//console.log("Gauges2:"+site+":"+total+":"+JSON.stringify(powers));
		    gauge[site].value=powers;
		    gauge[site].colors=['purple','Plum'];
			gauge[site].tooltips=timestamps;
		    gauge[site].draw();
		    var tsid = "ts"+(site+1);
		    //$("#"+tsid).empty();
		    //$.each(data.timestamps, function(index, date) {
			//	$("#"+tsid).append("<center><p>"+powers[index]+"W  "+date+"</p></center>");
		    //});
		    
 //console.log("update:"+site+":"+power);
	});

 }
	});
    } else {
    }
}

var millisecInDay = 86400000;
graphsetdate = function() {
    var today = new Date();
    var selected = $('#datepickergraph').datepicker("getDate");
    days = Math.floor((today - selected)/millisecInDay);
    //console.log("time:"+today+":"+selected+":"+days);
    sitegraphsstart(days);
}
sitegraphsstart = function(days) {
    $('#minuteGraphs').collapse("show");
    $('#Summary').collapse("hide");
    $('#Site').collapse("hide");
    $('#Site2').collapse("hide");
    clearInterval(updateSite);
    clearInterval(updateGauges);
    var theDate = new Date();
    var totalPower = 0;
    theDate.setDate(theDate.getDate()-days);
    for (s=0 ; s < sites ; s++) {

$.ajax({
	    url: "Solar.php",
	    type: "POST",
	    dataType: "json",
	    data: {
		"action": "getMinutePower",
		"site": s,
		"days": days
            },
	    cache: false,
	    success: function (response) {
	    var powerSum = 0;
			response['watts'].map(function(item){
    		powerSum += item;
		});
		var totalSamples = response['watts'].length;
		powerHour = powerSum/60;
		//console.log("minutes:"+JSON.stringify(response['watts']));
		var minutepower = $.map(response['watts'], function(el) { return el });
		var id = 'lg'+(parseInt(response['site'])+1);
		var pid = 'pow'+(parseInt(response['site'])+1);
		var power = document.getElementById(pid);
		powerHour = Math.round(powerHour/100)/10;
		totalPower += powerHour;
		var dollars = powerHour * BELIZEPOWERCOST;
		$('#'+pid).html('<center><font face="verdana" color="blue" size="2">'+powerHour	+'KwH  $'+dollars.toFixed(2)+'</font><center>');
		var canvas = document.getElementById(id);
		var context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		line[0] = new RGraph.Line({
		    id: id,
		    data: minutepower,
		    options: {
			labels: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
			gutterLeft: 40,
			gutterRight: 35,
			gutterBottom: 35,
			gutterTop: 35,
			title: response['name'],
			backgroundGridColor: '#aaa',
			backgroundGridDashed: true,
			colors: ['green'],
			textAccessible: true,
			scaleZerostart: true,
			labelsOffsety: 5
		    }
		}).draw();
 	   var dollars = totalPower * BELIZEPOWERCOST;
 	   var total = ': <center><font  color="blue">'+totalPower.toFixed(1) +' KwH  , $'+dollars.toFixed(2)+'</font>';
 	   console.log("Power:"+total);
		$('#graphDate').html("<h3><center>Power for "+theDate.toString().substring(0,15)+total+" <button data-toggle='modal' data-target='#pickdate' class='btn btn-xs btn-primary' type='submit'>Change Date</button></center></h3>");    
	    }
	});
	
    }

   if (updateGraphs != null) {
//	updateGraphs = setInterval ( sitegraphsstart, 60000 );
    }

}

window.onload = function () {
    $('#minuteGraphs').collapse("hide");
    $('#Summary').collapse("show");
    $('#Site').collapse("hide");
    $('#Site2').collapse("hide");
    clearInterval(updateSite);
    clearInterval(updateGraphs);
    updateGraphs = null;

   $.ajax({
	url: "Solar.php",
	type: "POST",
	dataType: "json",
	data: {
	    "action": "getSummary"
        },
	cache: false,
	success: function (response) {
	    // Display Site Menu
	    $.each(response, function(site, data) {
	        var $menu = $("#sitelist");
	        $menu.append("<li role='menuitem' onclick='startsitedisplay("+site+")'>"+data["name"]+"</li>");
		sites = site+1;
	    });
	    
summary(response);
	}
    });
}
```

#### Moving Forward
Meet with Professor Skon to discuss any other files I may need and to review current code and Tableau advancements. 


# Week 5 Notebook
### 2/19/18-2/25/18

#### Overview
This week, I was able to gain access to the database, set up the current website correctly running on the CS server, and make changes to the html layout of the website.

####  Putting Bootstrapping and RGraph libraries in my personal project file
Last week, my main issue was that my version of the website layout wasn't registering. It appeared that the bootstrapping wasn't being applied. I met with Professor Skon and he mentioned that he was refering to a local version of his bootstrap instead of off the internet. Through FileZilla, he logged into his account and copied the Bootstrapping file into my project folder. I then could do the following line of code to apply bootstrapping to my site. 
```
<link rel="stylesheet" href="lib/bootstrap-datepicker.min.css">
<script src="lib/bootstrap-datepicker.min.js"></script>
```
This allowed my website to have the correct style for the navigation bar, but the rest of the website material still wasn't there. This was because my website wasn't connected to the database correctly. Since the final database connection won't be applied until Kara and Matt have done some more work, I chose to connect the current database with the current PHP file in order to view the current layout. The goal with this is so I can make changes to the current website layout as it currently stands. In order to get the graphs and data visualizations on my site, I had to put the RGraphs folder that Professor Skon had on his local project file into my own. This was done with FileZilla aswell, and then I was able to use the following code. 
```
<script src="RGraph/libraries/RGraph.common.core.js"></script>
<script src="RGraph/libraries/RGraph.common.dynamic.js"></script>
<script src="RGraph/libraries/RGraph.common.tooltips.js"></script>
<script src="RGraph/libraries/RGraph.gauge.js"></script>
<script src="RGraph/libraries/RGraph.bar.js"></script>
<script src="RGraph/libraries/RGraph.line.js"></script>
<script src="RGraph/libraries/RGraph.hprogress.js"></script>
```
After this, my website was able to appear the same as Professor Skons, with the correct navigation bar, and each page had the same data visualizations. 

#### Running a static version of the database as a localhost
An issue that I ran into was how slow my website was since it had to fetch the data from the cs3 server everytime the website needed new or updated data. This caused my changes to the website to take an extremely long time to load in order to check. Since Kara and Matt are working on the database and analysis, at this point, the website layout isn't affected by whether the data is live or not. Therefore, Professor Skon gave me access to static version of the database that is on my local computer. This is accessed through my PHP file with the following: servername, username, password, and dbname. Here are the changes I made in the PHP file in order to access it. 
```
   $servername = "localhost";
   $username = "******";
   $password = "******";
   $dbname = "LIM-SERV";
```
Now the data doesn't have to be fetched from the cs3 server, the loading time isnt as long. This allows me to check my changes to the website layout in a quicker way since everytime a user changes a page on the website, the data had to be fetched. 

#### Alterations to the HTML file
A major issue of the current website is that each page doesn't have its own html file. This means that no matter where a user is, when the user wishes to refresh the page, they are redirected back to the home summary page. Currently, the website is running off of one html file. My first additions were to add new html files for each page of the website. After doing that, I added the following code to my Makefile in order to be able to access the files on the CS server.
```
PutHTML:
	cp Solar.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Home.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Project.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Importance.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Locations.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Graphs.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solar.css /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solarx.js /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solar.php /var/www/html/class/softdev/$(USER)/SolarProject/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/SolarProject/
```
Now I can access any of these pages and click through them in the navigation bar. At this moment, I have blank pages for Home, Project, and Importance. The current issue is that the Graphs and Locations pages are still running from the same Solar html page. My next goal is to move the code around to where Graphs and Locations are running from their own html pages. 


#### Connection with Tableau
In order to connect a visualization from Tableau to my website, there are a few steps to take. The overall process is to put the visualization on Tableau Public, then get the embedded code and put it in the html code. First step is to make sure that we have a Tableau Public account, since we have an account for Tableau Desktop, this isn't an issue. This is where you can see all data visualizations that you have done and published to Tableau Public. In order to publicize the visualization, on the desktop version of Tableau, go to Server, then Public Workbook. If you get an error message, create a data extract by clicking off of live data to an extract. In order to do this, change connection to extract, edit, save as aggregate to local machine. Then try to publish workbook again. This publicizes your workbook onto Tableau Public. From here, get the embedded code from the share icon below the visualization. Copy and paste it into the correct place in the html file. 

After these steps, your data visualization showed up on my website! 

#### Next Steps
1. Complete website restructuring into unique html files for each page. 
2. Research live data connection with website for Tableau. 
3. Start filling in Home, Our Work, and Importance pages. 

# Week 6 Notebook
### 2/26/18-3/18/18

#### Overview
This past week (including Spring Break) there was a lot that was needed to be changed about the project. For one, I figured out that Tableau could not be used for live data, which lead me to change my focus. My goal for this week was to create a C++ file that would output dummp solar XML data. I did this in order to make sure that I could understand the conneciton between my HTML&JS files with the C++ file that Kara will be making in order to allow the live solar data to reach the website. I will be walking through how I achieved this, including some decisions I made along the way. 

#### JSON vs. XML
Immediately prior to my last presentation, I decided that I would be creating the C++ file to write dummy JSON data. Professor Skon and I agreed that this would be an acceptable way to display the data. After speaking with my team at the end of the week, we decided that XML will be better since all three of us are familiar with using it, and the current data is displayed as long strings that Kara would know how to easily parse them into XML. 

#### Dummy C++ File
The first step of my goal was the create my dummy C++ file. For clarification, I refer to it as "dummy" because this will not be the file that will be used in our final project, but rather act as a placeholder since our project's C++ file is not complete. For this, I chose to include specific information in the XML for each location (site name, banks, # of panels for that bank, current power for that bank). I used the following code to achieve this.
```
cout << "Content-Type: text/plain\n\n";
  cout << "<?xml version=\"1.0\"?>";
  cout << "<sites>";
  cout << "<site><name>St. Andrews</name><bank><panels>4</panels>";
  cout << "<currentpower>324</currentpower></bank>";
  cout << "<bank><currentpower>322</currentpower></bank></site>";
  cout << "<site><name>Kings College</name><bank><currentpower>553</currentpower></bank>";
  cout << "</site>";
  cout << "</sites>";
  ```
  As you can see, my dummy XML incudes two sites (St. Andrews and Kings College). Under St. Andrews, the XML data includes data for each of its 2 banks. From the first bank, the number of panels is included, as well as the current power from this bank. This XML format allows users to request specific types of data. For example, if someone wanted to gather all data from one site, they could do that. They could also look up a sites current power, etc. This code is shown in solarConnection.cpp.
  
#### Test HTML
Instead of connecting the XML to one of my existing HTMl files, I decided to create a test HTML file to show this data. It has the same initial code (nav bar from website), but currently has nothing in the body of the HTMl file. I will include a way to view the data on the website later, but for now, the connection will be shown through the console. 

#### JavaScript
After last week, I discovered that I will not be able to recycle any of Professor Skon's current javascript code. Therefore, I striped all of the existing code. From this, my first step was to get the connection between the XML and javascrip, so I created two functions. 
```
function getConnection() {
 $.ajax({
		url: '/cgi-bin/shurbertj_solarConnection.cgi',
		dataType: 'text xml',
		success: getXML,
		error: function(){alert("Error: Something went wrong");}
    });
    }


$(document).ready(function(){
	getConnection();
    });
```
This code allows me to call my getConnection function when the document is first opened. Within my getConnection function, I use an ajax call to get the XML data from the solarConnection.cgi, which is set to a dataType of XML. Upon successfully opening the cgi file, it calles my getMXL function (described below), and if it fails then an error message occurs on the website. 

Once the solarConnection file is connected, I wrote a getXML function that retrieves information from the XML data. In this specific example, I was able to search and console.log the name of each site. In the figure, I will make the connection to where the user can ask for specific data, but for now, the code needs to be changed in the javascript in order to get specific data. 
```
function getXML(document) {
    solarXML = document;
    
    $(solarXML).find('site').each(function(){
	var name = $(this).find("name").text();
	console.log(name);
    });
}
```
#### Moving Forward
My next goal is to make the data display on my website and allow users to select which type of data they wish to see. 

# Week 7 Notebook
### 3/19/18-3/25/18

#### Overview
This was a slow week in terms of coding. I was able to meeting with Professor Skon at the beginning of the week to get access to Highcharts. A lot of research and playing around with Highcharts was done. I was also able to get access to Kara's current cpp file (only functions that are relevant to me at this point) to see how our connection will work. We are planning to meet early this week to get her code running on my computer. 

#### Highcharts
After gaining access to Highcharts, I was able to copy all Highcharts examples to my local computer and my repository in my Solar Project folder. I was also able to pick a specific example "bubble.html" and put it in my Repository. After looking at bubble.html more in depth, it appears that with Highcharts, I will be using a Highcharts javascript file as well as my own. Once I pick an example visualization that I want to use, I will start with their current html file and make alterations to make it more tailored to our data. As of right now, I am waiting to do this stage until I have connection to the live data. 

For the examples I have looked at, here is the code that will allow me to connect to their java script file. 
```
<script src="/Highcharts/code/highcharts.js"></script>
<script src="/Highcharts/code/highcharts-more.js"></script>
<script src="/Highcharts/code/modules/exporting.js"></script>
```
Specifically, for the bubble.html example, here is how the layout works for the visualization. As you can see, the code is broken into chart, legend, title, subtitle, xAxis, yAxi, tooltip, plot options and series(data). Simple changes will be able to be made to many of these sections to tailor to my data. It appears that the connection with our data will be in the series(data) section. In this example, the data is not live, and is just written out in the html file, which will be different once our connection is live.  
```
Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Sugar and fat intake per country'
    },

    subtitle: {
        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Daily fat intake'
        },
        labels: {
            format: '{value} gr'
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 65,
            label: {
                rotation: 0,
                y: 15,
                style: {
                    fontStyle: 'italic'
                },
                text: 'Safe fat intake 65g/day'
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Daily sugar intake'
        },
        labels: {
            format: '{value} gr'
        },
        maxPadding: 0.2,
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 50,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: 'Safe sugar intake 50g/day',
                x: -10
            },
            zIndex: 3
        }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
            '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
            '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
            { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
            { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
            { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
            { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
            { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
            { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
            { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
            { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
            { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
            { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
            { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
            { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
            { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
            { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
        ]
    }]

});
```

#### Next Steps
Early this week, I am meeting with Kara to get her cpp file working on my computer as well as connect me to the live database. I am also meeting with Professor Skon to connect other examples to my data. This week, I also want to start inputting the background information on the Belize project. 


# Week 8 Notebook
### 3/26/18-4/1/18

#### Overview
This week I have met with Professor Skon and Kara to discuss movement forward. After speaking with Kara, I was able to format my dummy cpp file into the same XML format we will be using. I created functions within my dummy cpp file for the latest and lastWeek functions (although the last week is formatted as a 12 hour summary right now). Kara will be making a fourth function for the 12 hour data, but it is formatted the same as the lastWeek. 

#### XML Format 
As of right now, each C++ function has a slightly different XML format. I currently have the latest function data formatted like this within a getNow function. 
```
void getNow(){
    cout << "<?xml version=\"1.0\"?>";
  cout << "<sites>";
  cout << "<site><name>St. Andrews</name><maxWatts>12</maxWatts><numBanks>2</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 01:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 02:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "<site><name>Kings College</name><maxWatts>14</maxWatts><numBanks>2</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 04:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "<site><name>Log Cabins</name><maxWatts>4</maxWatts><numBanks>1</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "</sites>";}
```
I also have a get12Hours function that has the XML data for the last 12 hours. This formatting is not done yet as I have to meet with Kara again to clarify something. It should have a similar layout, but just have more times available. 

#### Highcharts
So far, I have created a bar chart to display the current power for all locations. This was done by first choosing a demo highcharts example. If you edit the code in Jfiddle, you can have access to their html and js code. First step is to copy and paste that code into your own files. At this point, you should have their exact data visualization running on your own html file. An important thing to realize is that they are currently manually inputting their data in the js file, but our data is coming from a cpp file. Because of this, I used the following code in my js file to get the xml code from my cpp file and format it correctly. Note that makeChart() is the function that creates the data visualization.
```
function getXML(document) {
    solarXML = document;
        
    var siteInfo = [];    
    $(solarXML).find('site').each(function(){
	var name = $(this).find("name").text();
	var watts = $(this).find("maxWatts").text();
	siteInfo.push(name);
	siteInfo.push(parseInt(watts));
	dataList.push(siteInfo);
	siteInfo = [];
	//console.log(name + watts);
	
    });
    //dataList = [['w',34], ['r',56]];
    console.log(dataList);
    makeChart();
}
```
Within makeChart(), this we then can apply our dataList array to our visualization with the following code. 
```
series: [{
        name: 'Population',
        data: dataList,

        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
```
It is important to see that the only changes that were made were getting rid of their manually inputed data, and replace it with our dataList array that is formatted the same way. The format is arrays within a larger array.

#### Changing Website Layout
Now that I have a Summary data visualization, I want to put that on my Home page along with a short description of the project. Because of this, I decided to update the layout of the website to the following pages: Home, Our Work, Importance, Current, Last Week and History. As of right now, I plan to include data visualizations on the Home, Current, Last Week and History pages. I might add another to Importance if our group decides to include data on the cost payoff. 

#### Moving Forward
I will complete the above steps in the same way for the other functions and choose the best Highcharts visualizations for each. I will also decide which visualizations will need users to press buttons for certain data to appear. Once Kara finalizes her cpp code, we will work together to get her code running on my computer so I can have access to the actual data. 


# Week 8 Notebook
### 4/2/18-4/8/18

#### Overview
This week I was able to fill in alot of the extra information on the website other than the data visualizations. This includes gathering the information which I wanted to include in the Home, Our Work and Importance pages (pictures from students who went on the trip in the past, articles they've written, etc). I also spoke with Kara and will be meeting with her early this week to get her code working on my computer. 

#### Inputting Pictures 
My first task was to include photos into the website. A lot of my photos were given to me in a google drive format. From there I was able to download them onto my computer and keep them in the downloads folder. Including photos are fairly easy once they are in the correct place. After looking at other examples, I knew that I had to move the photo out of my downloads folder and into the SolarProject directory. This is achieved by inputting the following code into the terminal once you've changed the directories to get to where the photo is currently placed. 
```
mv IMG_5475.jpg ~/SolarProject 
```
Once the photo is in the projects directory, the photo can be included in the website with the following code in the correct html files. 
```
<img alt="IMG_5475.jpg" height="150" src="SolarProject/solarPics/IMG_4373.JPG" width="200" />
```
As of right now, I have included images that I currently plan to have on each page. I have placed each one it its own div so arrangement of my page will be easier once I include bootstrapping into the webpage. 

#### Layout
I have also planned out the approximate layouts of each page on graph paper. I began implementing this in the code first by including basic information and placing seperate objects in seperate divs. I am wanting each page to at least include a similar theme or layout if possible so there is a similar feeling to the whole website. There isn't a step-by-step guide as to how I did this, so I will not be including it in my notebook, but rather in the code from the project once I get to a solid enough status to push my code. 

#### Moving Forward
As I continue to add additional information into the website, the biggest next step is merging my code with Kara's to get my visualizations working with the live data in a way the final result will. 

# Week 9 Notebook
### 4/9/18-4/15/18

#### Overview
This week I got access to Kara's cpp and h files. I have been working on integrating them into my current data visualizations, which proved to be a little more complicated than I predicted. I also chose additional HighCharts visualizations for our cost analysis, Last week, and the history visualizations. I encorporated these demos into the relevant pages, but am waiting to get them working with actual data until I get the connection with the database working. 

#### HighCharts
Before speaking with Matt, I decided to add the fixe placement columns HighCharts demo to my Importance page. As of right now, it just outputs the demo with their code which was hard-coded since I do not have the connection with the database finalized. I also decided that I will be using similar visualizations to my last 12 hours for qByID.

#### Files added from Kara
From Kara, I now can work with the following files which she created: sites.cpp, sites.h, site.cpp, site.h. She also gave access to her test cpp file which I didn't use and used my own instead, but took aspects of it. 

#### Transitioning from Dummy XML to sites.cpp and site.cpp
I have completed this step for the current data visualization. Instead of calling my getnow function, I call her functions and create my own xml format as shown below. 
```
  if (Op == "now"){
  //getNow();
  string currentXMLString;
  currentXMLString = "<sites>";
  
  for (int i=0; i < testsites.numSites() - 1; i++){
  	currentXMLString += testsites.latest(i,"qWattsMin1");
  }
  currentXMLString += "</sites>";
  cout << currentXMLString << endl;  
  }
  ```
  Since my js was already created to take in xml in this format, my visualization was automatically updated with live data. Professor Skon and I did encounter a slight problem though. This process takes a very long time on the cs server and we may have to find another way to do this. This visualization can be seen on the Current page on the website. 

#### Moving Forward
I will meet with Kara and Professor Skon to discuss the speed of the cs server and which functions I still need her to write for me. I also want to meet with Matt to talk about how he wishes his cost analysis will appear on the website. In addition, I need to repeat the above steps for all other visualizations to connect them to the live database. 

# Week 10 Notebook
### 4/16/18-4/22/18

#### Overview
This week was spent mostly in meetings with Professor Skon and Kara, and organizing the layout of the website. I was able to meet with Professor Skon to discuss some problems I was having with the LastWeek function, which was written by Kara. We decided that it would be much more beneficial if the XML was formatted slightly differently, so I met with Kara the next day. She was able to make some of these changes in order for me to proceed with my section of the project. 

#### Needed XML format
For the LastWeek function, in order to create the visualizations that I need, the XML had to be formatted in a specific way in order for me to make progress. Below is the old funciton. 
```
string sites::lastWeek(int sitenum,string wattsOrVolts){
    string results="";
    sql::Driver* driver = sql::mysql::get_driver_instance();
    std::auto_ptr<sql::Connection> con(driver->connect(url, user, pass));
    con->setSchema(database);
    std::auto_ptr<sql::Statement> stmt(con->createStatement());

    results=("<site><name>"+allSites[sitenum].getSiteName()+"</name><maxWatts>"+to_string(al\
lSites[sitenum].getMaxWatts())+"</maxWatts><numBanks>"+to_string(allSites[sitenum].getNumBan\
ks())+"</numBanks>");
    for(int i=0;i<allSites[sitenum].getNumBanks();i++){
      results+="<bank>";
      stmt->execute("SELECT DAYOFWEEK(TimeStamp) AS DAY,HOUR(TimeStamp) as HOUR,AVG(Response\
) AS AVG FROM `Answers` WHERE IID = '"+allSites[sitenum].getBankIDs(i)+"' AND QID = '" + wat\
tsOrVolts +"' AND YEARWEEK (TimeStamp) = YEARWEEK( current_date -interval 1 week ) GROUP BY \
DAY, HOUR;");
      std::auto_ptr< sql::ResultSet> res;

      string lastDate="";
      string currentDate="";

      do{
        res.reset(stmt->getResultSet());
        while(res->next()){
          currentDate=res->getString("DAY");
          if(lastDate!=currentDate){
            results+=("<dayofweek>"+currentDate+"</dayofweek>");
          }
          lastDate=currentDate;
          results+=("<hour>"+res->getString("HOUR")+"</hour>");
          results+=("<"+wattsOrVolts+">"+res->getString("AVG")+"</"+wattsOrVolts+">");
        }
      }while(stmt->getMoreResults());
      results+="</bank>";
    }
    results+="</site>";

    return results;
}
```
There is nothing technically wrong with this function, however, the format of the XML does not allow me to sum the watts for each day since I cannot loop through the day. Below is the current output of XML.
```
<site>
  <name>St. Andrews Primary</name>
  <maxWatts>1200.000000</maxWatts>
  <numBanks>2</numBanks>
  <bank>
    <dayofweek>1</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.1786</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>35.2069</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>45.0000</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>184.0833</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>208.6471</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>294.7931</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>339.1852</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>407.8261</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>314.8235</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>174.3333</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>53.9286</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>11.8649</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>0.3000</qWattsMin1>
    <dayofweek>2</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>20.9091</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>151.5333</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>372.2889</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>315.8421</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>270.3077</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>246.7115</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>119.1176</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>30.9412</qWattsMin1>
    <dayofweek>3</dayofweek>
    <hour>7</hour>
    <qWattsMin1>1.0000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>69.7632</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>221.5370</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>370.0517</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>388.0185</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>384.5660</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>388.4643</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>355.1333</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>359.4074</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>276.8571</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>269.4545</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>133.6415</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>21.6000</qWattsMin1>
    <dayofweek>4</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.6316</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>25.7857</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>121.3953</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>220.4310</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>295.1429</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>366.5862</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>349.1321</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>292.5818</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>324.2414</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>284.6316</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>238.5636</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>118.5614</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>17.0385</qWattsMin1>
    <dayofweek>5</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0833</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>10.5556</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>58.8158</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>274.2333</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>331.1667</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>264.6364</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>279.1351</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>293.8621</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>341.1892</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>301.3000</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>265.3226</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>93.6563</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>22.2500</qWattsMin1>
    <dayofweek>6</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.8000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>28.5882</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>72.8372</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>249.6970</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>220.0606</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>276.0909</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>317.2813</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>303.5556</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>333.5313</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>280.5714</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>244.7576</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>154.3158</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>13.2353</qWattsMin1>
    <dayofweek>7</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.4000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>16.7143</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>39.0357</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>158.1563</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>323.1000</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>339.9643</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>407.4091</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>387.6786</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>388.5135</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>307.8750</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>253.4474</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>116.7297</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>16.7692</qWattsMin1>
  </bank>
  <bank>
    <dayofweek>1</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>18.2813</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>24.0000</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>80.0645</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>106.7667</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>152.6571</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>192.6296</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>217.8636</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>164.0000</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>80.0370</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>24.7222</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>4.8125</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>0.0313</qWattsMin1>
    <dayofweek>2</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>14.5000</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>67.0000</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>204.2553</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>162.4146</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>150.6667</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>120.9400</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>52.0000</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>15.5588</qWattsMin1>
    <dayofweek>3</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0385</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>33.0833</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>95.2115</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>205.3158</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>228.0377</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>223.8235</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>237.5714</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>217.7391</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>218.4630</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>153.4423</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>137.8182</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>57.9623</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>10.2456</qWattsMin1>
    <dayofweek>4</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.1429</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>12.8393</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>54.2667</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>98.3793</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>158.9649</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>222.1964</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>221.2321</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>169.9643</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>192.0000</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>160.5517</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>127.1207</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>52.5556</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>8.1961</qWattsMin1>
    <dayofweek>5</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0000</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>3.7632</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>30.6579</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>141.7419</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>182.8537</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>117.5909</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>138.6579</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>167.6774</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>204.8889</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>175.7879</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>135.2759</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>40.0741</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>11.7234</qWattsMin1>
    <dayofweek>6</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0811</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>15.3143</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>33.0476</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>137.7813</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>115.9412</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>169.6207</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>210.5882</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>169.4545</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>214.6563</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>182.3704</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>118.7931</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>69.0333</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>5.5556</qWattsMin1>
    <dayofweek>7</dayofweek>
    <hour>7</hour>
    <qWattsMin1>0.0294</qWattsMin1>
    <hour>8</hour>
    <qWattsMin1>7.8462</qWattsMin1>
    <hour>9</hour>
    <qWattsMin1>19.5517</qWattsMin1>
    <hour>10</hour>
    <qWattsMin1>68.5667</qWattsMin1>
    <hour>11</hour>
    <qWattsMin1>169.2500</qWattsMin1>
    <hour>12</hour>
    <qWattsMin1>205.5862</qWattsMin1>
    <hour>13</hour>
    <qWattsMin1>256.5385</qWattsMin1>
    <hour>14</hour>
    <qWattsMin1>250.3667</qWattsMin1>
    <hour>15</hour>
    <qWattsMin1>243.1667</qWattsMin1>
    <hour>16</hour>
    <qWattsMin1>182.8889</qWattsMin1>
    <hour>17</hour>
    <qWattsMin1>131.3421</qWattsMin1>
    <hour>18</hour>
    <qWattsMin1>52.3226</qWattsMin1>
    <hour>19</hour>
    <qWattsMin1>7.6667</qWattsMin1>
  </bank>
</site>
```
Note that the above XML is only the data for one site. My problem with this was that I could loop through a bank, but I couldnt loop through a day within that bank. After speaking with Kara, she made the following changes to the LastWeek function. 
```
string sites::lastWeek(int sitenum,string wattsOrVolts){
    string results="";
    sql::Driver* driver = sql::mysql::get_driver_instance();
    std::auto_ptr<sql::Connection> con(driver->connect(url, user, pass));
    con->setSchema(database);
    std::auto_ptr<sql::Statement> stmt(con->createStatement());

    results=("<site><name>"+allSites[sitenum].getSiteName()+"</name><maxWatts>"+to_string(allSites[sitenum].getMaxWatts())+"</maxWatts><numBanks>"+to_string(allSites[sitenum].getNumBanks()\
)+"</numBanks>");
    for(int i=0;i<allSites[sitenum].getNumBanks();i++){
      results+="<bank>";
      stmt->execute("SELECT DAYOFWEEK(TimeStamp) AS DAY,HOUR(TimeStamp) as HOUR,AVG(Response) AS AVG FROM `Answers` WHERE IID = '"+allSites[sitenum].getBankIDs(i)+"' AND QID = '" + wattsOr\
Volts +"' AND YEARWEEK (TimeStamp) = YEARWEEK( current_date -interval 1 week ) GROUP BY DAY, HOUR;");
      std::auto_ptr< sql::ResultSet> res;

      string lastDate="";
      string currentDate="";

      do{
        res.reset(stmt->getResultSet());
        while(res->next()){
          currentDate=res->getString("DAY");
          if(lastDate!=currentDate){
            if(currentDate=="1")
              results+=("<day><dayofweek>"+currentDate+"</dayofweek>");
            else
              results+=("</day><day><dayofweek>"+currentDate+"</dayofweek>");
          }
          lastDate=currentDate;
          results+=("<hour>"+res->getString("HOUR")+"</hour>");
          results+=("<"+wattsOrVolts+">"+res->getString("AVG")+"</"+wattsOrVolts+">");
        }
      }while(stmt->getMoreResults());
      results+="</day></bank>";
    }
    results+="</site>";

    return results;
}
```
This results in the following XML for one site.
```
<site>
  <name>St. Andrews Primary</name>
  <maxWatts>1200.000000</maxWatts>
  <numBanks>2</numBanks>
  <bank>
    <day>
      <dayofweek>1</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.1786</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>35.2069</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>45.0000</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>184.0833</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>208.6471</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>294.7931</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>339.1852</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>407.8261</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>314.8235</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>174.3333</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>53.9286</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>11.8649</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>0.3000</qWattsMin1>
    </day>
    <day>
      <dayofweek>2</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>20.9091</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>151.5333</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>372.2889</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>315.8421</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>270.3077</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>246.7115</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>119.1176</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>30.9412</qWattsMin1>
    </day>
    <day>
      <dayofweek>3</dayofweek>
      <hour>7</hour>
      <qWattsMin1>1.0000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>69.7632</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>221.5370</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>370.0517</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>388.0185</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>384.5660</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>388.4643</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>355.1333</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>359.4074</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>276.8571</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>269.4545</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>133.6415</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>21.6000</qWattsMin1>
    </day>
    <day>
      <dayofweek>4</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.6316</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>25.7857</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>121.3953</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>220.4310</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>295.1429</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>366.5862</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>349.1321</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>292.5818</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>324.2414</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>284.6316</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>238.5636</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>118.5614</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>17.0385</qWattsMin1>
    </day>
    <day>
      <dayofweek>5</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0833</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>10.5556</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>58.8158</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>274.2333</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>331.1667</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>264.6364</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>279.1351</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>293.8621</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>341.1892</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>301.3000</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>265.3226</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>93.6563</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>22.2500</qWattsMin1>
    </day>
    <day>
      <dayofweek>6</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.8000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>28.5882</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>72.8372</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>249.6970</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>220.0606</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>276.0909</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>317.2813</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>303.5556</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>333.5313</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>280.5714</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>244.7576</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>154.3158</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>13.2353</qWattsMin1>
    </day>
    <day>
      <dayofweek>7</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.4000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>16.7143</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>39.0357</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>158.1563</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>323.1000</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>339.9643</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>407.4091</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>387.6786</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>388.5135</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>307.8750</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>253.4474</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>116.7297</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>16.7692</qWattsMin1>
    </day>
  </bank>
  <bank>
    <day>
      <dayofweek>1</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>18.2813</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>24.0000</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>80.0645</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>106.7667</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>152.6571</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>192.6296</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>217.8636</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>164.0000</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>80.0370</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>24.7222</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>4.8125</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>0.0313</qWattsMin1>
    </day>
    <day>
      <dayofweek>2</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>14.5000</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>67.0000</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>204.2553</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>162.4146</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>150.6667</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>120.9400</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>52.0000</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>15.5588</qWattsMin1>
    </day>
    <day>
      <dayofweek>3</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0385</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>33.0833</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>95.2115</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>205.3158</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>228.0377</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>223.8235</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>237.5714</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>217.7391</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>218.4630</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>153.4423</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>137.8182</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>57.9623</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>10.2456</qWattsMin1>
    </day>
    <day>
      <dayofweek>4</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.1429</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>12.8393</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>54.2667</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>98.3793</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>158.9649</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>222.1964</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>221.2321</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>169.9643</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>192.0000</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>160.5517</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>127.1207</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>52.5556</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>8.1961</qWattsMin1>
    </day>
    <day>
      <dayofweek>5</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0000</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>3.7632</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>30.6579</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>141.7419</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>182.8537</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>117.5909</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>138.6579</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>167.6774</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>204.8889</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>175.7879</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>135.2759</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>40.0741</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>11.7234</qWattsMin1>
    </day>
    <day>
      <dayofweek>6</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0811</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>15.3143</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>33.0476</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>137.7813</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>115.9412</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>169.6207</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>210.5882</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>169.4545</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>214.6563</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>182.3704</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>118.7931</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>69.0333</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>5.5556</qWattsMin1>
    </day>
    <day>
      <dayofweek>7</dayofweek>
      <hour>7</hour>
      <qWattsMin1>0.0294</qWattsMin1>
      <hour>8</hour>
      <qWattsMin1>7.8462</qWattsMin1>
      <hour>9</hour>
      <qWattsMin1>19.5517</qWattsMin1>
      <hour>10</hour>
      <qWattsMin1>68.5667</qWattsMin1>
      <hour>11</hour>
      <qWattsMin1>169.2500</qWattsMin1>
      <hour>12</hour>
      <qWattsMin1>205.5862</qWattsMin1>
      <hour>13</hour>
      <qWattsMin1>256.5385</qWattsMin1>
      <hour>14</hour>
      <qWattsMin1>250.3667</qWattsMin1>
      <hour>15</hour>
      <qWattsMin1>243.1667</qWattsMin1>
      <hour>16</hour>
      <qWattsMin1>182.8889</qWattsMin1>
      <hour>17</hour>
      <qWattsMin1>131.3421</qWattsMin1>
      <hour>18</hour>
      <qWattsMin1>52.3226</qWattsMin1>
      <hour>19</hour>
      <qWattsMin1>7.6667</qWattsMin1>
    </day>
  </bank>
</site>
```
Although this change may seem small, adding the <day> tags separate the days in order for me to loop through them, while still keeping the <dayofweek> tag to see which day the data is corresponding to.
	
#### Website Format
This week, I wanted to make some significant progress in the overall look of the website. For the first part of the week I focused on making my own adjustments to the nav bar and background, etc. Although I learned alot through this process, it was taking up more of my time than I wanted, therefore, I found a template online of a website that I plan to incorporate out website into. First I went to https://www.html5webtemplates.co.uk/templates.html

This webiste has alot of html templates for anyone to download and use. After looking through some, I knew I wanted to keep it simple and go with Symplestyle Banner. I was able to put this template on each page of the current website, with the Home page being slightly different. Using this template will allow me to focus more time on the visualizations which was the bulk of my project to begin with. I still need to add additional information to some of the more informational pages. 

#### Moving forward
Now that I got the edits on Kara's LastWeek function, I can make improvements on the last week visualization. I will also add the additional information to the Home, Our Work and Importance pages. Also, after speaking with Kara, I don't think I will have time to create data visualizations for the qByID function. Previously, I spoke with Professor Skon about including a page where students could get access to the raw data, and I think that I will use the last page as a source of data for the students instead of creating a data visualization.


# Week 11 Notebook
### 4/23/18-4/29/18

#### Overview
This week I was able to make significant progress on data visualizations. I did notice that keeping the live connection with the database caused debugging to take too long, therefore, for the Home and Last Week Pages, I took snapshots of data from a couple of sites and used those to create the visualizations. 

#### Types of Highcharts Visualizations
For the Home page, I decided to keep the basic line chart, creating a different line for each bank. This way, there is a way for the user to view the differences between the two banks instead of summing them. 

For the Current page, I decided to make a basic bar chart where I summed the amount of watts in each bank to get the total amount of current wattage. Moving forward, I might seperate this into a stacked bar chart. 

For the Last Week page, I created a stacked bar chart for each site. At first I wanted to sum the wattage for each hour, but I decided against it because the XML format wasn't done in a way for that to be as easy as other summations I did. 

#### Creating HTML in JavaScript
For the Last week page, I have as many visualizations as I do sites. Because of this, I needed to make sure that the database controls how many visualizations are created, therefore, I created the html slightly differently than the others. For example, the current visualization has a div within the html which the visualization is pushed to. 
```
        <div id="container" style="min-width: 300px; height: 400px; margin: 0 auto"></div>
```
The idea behind the Last Week page would be to have 13 of these generated (one for each live site). I was able to achieve this through my JavaScript. 

First I created the function below. 
```
function makeContainer(container){
	return ("<div id="+container+" style='min-width: 310px; height: 400px; margin: 0 auto'></div>");
}
``` 
This is called in a loop so that each time a new site is gone through, a new div is created. 

I also changed my makeChartSummary function to pass in three different variables. 
```
function makeChartSummary(container, siteArray, dataListSum)
```
Each div has a container number correlating to it (ex. container3), is built a siteArray (which is the name of the site), and a dataListSum (which is the XML formatted in a way that HighCharts will then push to a visualization). 

#### Moving Forward
Now that I have the visualizations working, I need to reconnect the website to the live data. I also plan to use the History page as a way for students to attain raw data, so I need to meet with Professor Skon about the best way to do this. Other than that, I will either leave the rest of the website to Professor Skon to fill in with information he wants people to see, or I will gather information from his other websites and include them in mine. 


# Final Week Notebook
### 4/30/18-5/6/18

#### Overview
This week I finalized my code in preparation for Professor Skon to take over the project. This includes adding comments, removing extra debugging code, and organizing existing code. I met with Professor Skon to discuss the progress that needs to still be made on the project, so we are both on the same page. 
