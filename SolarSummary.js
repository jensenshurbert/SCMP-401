var solarXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;
var operation="12hours";

var dataListSum = [];

//console.log("Ready!");


//called at the beginning to get the XML document and load the dropdown list
function getXML(document) {
    solarXML = document;
    	var dataArray = [];

        
    var siteInfoSum = [];   
    $(solarXML).find('site').each(function(){
		var name = $(this).find("name").text();
		console.log("Site:"+name);
		$(this).find("bank").each(function(){
		dataArray = [];
		console.log("Bank sir!");
			$(this).find("wattsorvolts").each(function(){
			var wattsorvolts = $(this).text();
			console.log("Data:"+wattsorvolts);
			//var wattsorvolts = this.value;
			dataArray.push(parseInt(wattsorvolts));
		});
		});
		var siteTwelveHour = {site: name, data: dataArray};
			dataListSum.push(siteTwelveHour);


	});
	console.log(dataListSum);

	
	// siteInfoSum.push(name);
// 	siteInfoSum.push(parseInt(watts));
// 	dataListSum.push(siteInfoSum);
// 	siteInfoSum = [];
	
    //});
    //console.log(dataListSum);
    makeChartSummary();
}

//in other javascript we need to have an array with an object for it - look at W3 Schools example, add an empty array around it bc that is just the inside
//create another html and js file for summary page 
//make sure to add it to the Makefile and change reference at bottom of html to get to the correct js
//first need to change cpp XML structure for 12 hour summary 
	       
		    					  
function getConnection() {
 $.ajax({
		url: '/cgi-bin/shurbertj_solarConnection.cgi?operation='+operation,
		dataType: 'text xml',
		success: getXML,
		error: function(){alert("Error: Something went wrong");}
    });
    }


$(document).ready(function(){
	getConnection();
 	//initial things
    });


function makeChartSummary() {

Highcharts.chart('container', {

    title: {
        text: 'Site Solar Data, Last 12 hours'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Energy (watts/volts)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: dataListSum,

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});}