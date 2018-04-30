var solarXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;
var operation="12hours";

var dataListSum = [];


//called at the beginning to get the XML document and load the dropdown list
function getXML(document) {
    solarXML = document;
    var dataArray = [];
	var bankNum = [];
	var bank = 0;  
    var siteInfoSum = [];   
    
    $(solarXML).find('site').each(function(){
		var name = $(this).find("name").text();
		$(this).find("bank").each(function(){
		bank += 1;
		bankNum.push(parseInt(bank));
		dataArray = [];
		//console.log("Bank sir!");
			$(this).find("qWattsMin1").each(function(){
			var wattsorvolts = $(this).text();
			//console.log("Data:"+wattsorvolts);
			//var wattsorvolts = this.value;
			dataArray.push(parseInt(wattsorvolts));
		});
			var siteTwelveHour = {name: name + ": Bank " + bankNum, data: dataArray};
			bankNum = [];
			dataListSum.push(siteTwelveHour);
		});
		bank = 0;

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
	getXML(getTestXML());
//  $.ajax({
// 		url: '/cgi-bin/shurbertj_solarConnection.cgi?operation='+operation,
// 		dataType: 'text xml',
// 		success: getXML,
// 		error: function(){alert("Error: Something went wrong");}
//     });
    }


$(document).ready(function(){
	getConnection();
 	//initial things
    });


function makeChartSummary() {

Highcharts.chart('container', {

    title: {
        text: 'Site Solar Data, Yesterday'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Watts'
        }
    },
    
    xAxis: {
    	title: {
    		text: 'Hour'
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
            pointStart: 7
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

function getTestXML(){
	return ("<sites><site><name>LogCabins</name><maxWatts>2000.000000</maxWatts><numBanks>2</numBanks><bank><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0508</qWattsMin1><hour>8</hour><qWattsMin1>50.7368</qWattsMin1><hour>9</hour><qWattsMin1>85.3621</qWattsMin1><hour>10</hour><qWattsMin1>271.5614</qWattsMin1><hour>11</hour><qWattsMin1>349.6607</qWattsMin1><hour>12</hour><qWattsMin1>497.0500</qWattsMin1><hour>13</hour><qWattsMin1>458.3214</qWattsMin1><hour>14</hour><qWattsMin1>511.5517</qWattsMin1><hour>15</hour><qWattsMin1>484.1404</qWattsMin1><hour>16</hour><qWattsMin1>373.0328</qWattsMin1><hour>17</hour><qWattsMin1>145.3478</qWattsMin1><hour>18</hour><qWattsMin1>19.8644</qWattsMin1><hour>19</hour><qWattsMin1>2.8276</qWattsMin1></bank><bank><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0690</qWattsMin1><hour>8</hour><qWattsMin1>33.6271</qWattsMin1><hour>9</hour><qWattsMin1>54.4237</qWattsMin1><hour>10</hour><qWattsMin1>182.0508</qWattsMin1><hour>11</hour><qWattsMin1>241.6897</qWattsMin1><hour>12</hour><qWattsMin1>391.0862</qWattsMin1><hour>13</hour><qWattsMin1>358.3448</qWattsMin1><hour>14</hour><qWattsMin1>447.4237</qWattsMin1><hour>15</hour><qWattsMin1>393.9273</qWattsMin1><hour>16</hour><qWattsMin1>290.7241</qWattsMin1><hour>17</hour><qWattsMin1>109.8537</qWattsMin1><hour>18</hour><qWattsMin1>15.4426</qWattsMin1><hour>19</hour><qWattsMin1>1.9123</qWattsMin1></bank></site><site><name>St. Andrews Primary</name><maxWatts>1200.000000</maxWatts><numBanks>2</numBanks><bank><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.1786</qWattsMin1><hour>8</hour><qWattsMin1>35.2069</qWattsMin1><hour>9</hour><qWattsMin1>45.0000</qWattsMin1><hour>10</hour><qWattsMin1>184.0833</qWattsMin1><hour>11</hour><qWattsMin1>208.6471</qWattsMin1><hour>12</hour><qWattsMin1>294.7931</qWattsMin1><hour>13</hour><qWattsMin1>339.1852</qWattsMin1><hour>14</hour><qWattsMin1>407.8261</qWattsMin1><hour>15</hour><qWattsMin1>314.8235</qWattsMin1><hour>16</hour><qWattsMin1>174.3333</qWattsMin1><hour>17</hour><qWattsMin1>53.9286</qWattsMin1><hour>18</hour><qWattsMin1>11.8649</qWattsMin1><hour>19</hour><qWattsMin1>0.3000</qWattsMin1></bank><bank><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>18.2813</qWattsMin1><hour>9</hour><qWattsMin1>24.0000</qWattsMin1><hour>10</hour><qWattsMin1>80.0645</qWattsMin1><hour>11</hour><qWattsMin1>106.7667</qWattsMin1><hour>12</hour><qWattsMin1>152.6571</qWattsMin1><hour>13</hour><qWattsMin1>192.6296</qWattsMin1><hour>14</hour><qWattsMin1>217.8636</qWattsMin1><hour>15</hour><qWattsMin1>164.0000</qWattsMin1><hour>16</hour><qWattsMin1>80.0370</qWattsMin1><hour>17</hour><qWattsMin1>24.7222</qWattsMin1><hour>18</hour><qWattsMin1>4.8125</qWattsMin1><hour>19</hour><qWattsMin1>0.0313</qWattsMin1></bank></site><site><name>Toledo Christian Academy</name><maxWatts>800.000000</maxWatts><numBanks>1</numBanks><bank><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>0.0000</qWattsMin1><hour>9</hour><qWattsMin1>0.0000</qWattsMin1><hour>10</hour><qWattsMin1>0.0000</qWattsMin1><hour>11</hour><qWattsMin1>0.0000</qWattsMin1><hour>12</hour><qWattsMin1>0.0000</qWattsMin1><hour>13</hour><qWattsMin1>0.0000</qWattsMin1><hour>14</hour><qWattsMin1>0.0000</qWattsMin1><hour>15</hour><qWattsMin1>0.0000</qWattsMin1><hour>16</hour><qWattsMin1>0.0000</qWattsMin1><hour>17</hour><qWattsMin1>0.0000</qWattsMin1><hour>18</hour><qWattsMin1>0.0000</qWattsMin1><hour>19</hour><qWattsMin1>0.0000</qWattsMin1></bank></site></sites>");
}