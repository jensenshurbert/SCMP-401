var solarXML;
// var numberofelements=0;
// var sym;
// var num;
// var wgt;
// var matchToFind;
var totalwatts = 0;

var operation="now";

var dataList = [];


//called at the beginning to get the XML document and load the dropdown list
function getXML(document) {
    solarXML = document;
        
    var siteInfo = [];    
    $(solarXML).find('site').each(function(){
	var name = $(this).find("name").text();
	$(this).find("bank").each(function(){
	var watts = $(this).find("qWattsMin1").text();
	totalwatts += parseInt(watts);
	});
	siteInfo.push(name);
	siteInfo.push(parseInt(totalwatts));
	totalwatts = 0;
	dataList.push(siteInfo);
	siteInfo = [];
	
    });
    console.log(dataList);
    makeChart();
}

	       
		    					  
function getConnection() {
 $.ajax({
		url: '/cgi-bin/shurbertj_solarConnection.cgi?operation='+operation,
		dataType: 'text xml',
		success: getXML,
		error: function(){alert("Error: Something went wrong");}
    });
    }


$(document).ready(function(){

 	$(document).ajaxStart(function () {
	$("#loading").show();
    }).ajaxStop(function () {
	$("#loading").hide();
    });

	getConnection();
 	//initial things
 	

 	
    });


function makeChart() {
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Current Solar Panel Energy'
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
            text: 'Energy (Watts/Volts)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Current Energy: <b>{point.y:.1f} watts/votls</b>'
    },
    series: [{
        name: 'Watts',
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
