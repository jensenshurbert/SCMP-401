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
