var solarXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;
//var operation="cost";

var dataList = [];

//console.log("Ready!");


//called at the beginning to get the XML document and load the dropdown list
function getXML(document) {
    solarXML = document;
    
    //set up xml to HighCharts format
        
    makeChart();
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


function makeChart() {
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Efficiency Optimization by Branch'
    },
    xAxis: {
        categories: [
            'Seattle HQ',
            'San Francisco',
            'Tokyo'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Employees'
        }
    }, {
        title: {
            text: 'Profit (millions)'
        },
        opposite: true
    }],
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Employees',
        color: 'rgba(165,170,217,1)',
        data: [150, 73, 20],
        pointPadding: 0.3,
        pointPlacement: -0.2
    }, {
        name: 'Employees Optimized',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 40],
        pointPadding: 0.4,
        pointPlacement: -0.2
    }, {
        name: 'Profit',
        color: 'rgba(248,161,63,1)',
        data: [183.6, 178.8, 198.5],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' M'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2,
        yAxis: 1
    }, {
        name: 'Profit Optimized',
        color: 'rgba(186,60,61,.9)',
        data: [203.6, 198.8, 208.5],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' M'
        },
        pointPadding: 0.4,
        pointPlacement: 0.2,
        yAxis: 1
    }]
});}