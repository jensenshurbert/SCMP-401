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
        
    var siteInfoSum = [];    
    $(solarXML).find('site').each(function(){
	var name = $(this).find("name").text();
	var watts = $(this).find("maxWatts").text();
	siteInfoSum.push(name);
	siteInfoSum.push(parseInt(watts));
	dataListSum.push(siteInfoSum);
	siteInfoSum = [];
	
    });
    console.log(dataListSum);
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
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
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

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

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