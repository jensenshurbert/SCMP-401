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
