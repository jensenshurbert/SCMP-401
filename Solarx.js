var solarXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;
var operation="now";

var dataList = [];

//console.log("Ready!");


//called at the beginning to get the XML document and load the dropdown list
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
        text: 'World\'s largest cities per 2017'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
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
});}
