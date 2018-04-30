var solarXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;
var totalwatts = 0;

var operation="week";


var dataListSum = [];
var bankArray = [];
var dayArray = [];
var siteArray = [];



function getXML(document) {
    solarXML = document;
    var dataArray = [];
	var bankNum = [];
	var bank = 0;
	var numberOfSites = 0;
    //var siteInfoSum = [];  
    var containerHTML= "";
    
    $(solarXML).find('site').each(function(){
    	numberOfSites += 1;
		var containerName = "container" + numberOfSites;
		containerHTML += makeContainer(containerName);
		

    }); 
    
    	$("#weekContainers").html(containerHTML);
    	console.log(containerHTML);

     		var containerNumber = 0;

     
    $(solarXML).find('site').each(function(){
    	dataListSum = [];
		var name = $(this).find("name").text();
		siteArray = [];
		siteArray.push(name);
		containerNumber += 1;
		var container = [];
		container = "container"+containerNumber;
		
		$(this).find("bank").each(function(){
			bank += 1;
			bankNum.push(parseInt(bank));
			dataArray = [];
			
			$(this).find("day").each(function(){
				var dayofweek = $(this).find("dayofweek").text();
				
				$(this).find("qWattsMin1").each(function(){
					var wattsorvolts = $(this).text();
					totalwatts += parseInt(wattsorvolts);
				});
				
				dataArray.push(parseInt(totalwatts));
				
				//siteInfoSum.push(parseInt(totalwatts));
				//console.log(siteInfoSum);
				totalwatts = 0;
				dayArray.push(dayofweek);

			
			});
			dayArray = [];
			
			
				var siteTwelveHour = {name: "Bank: " + bankNum, data: dataArray};
				dataArray = [];
				dataListSum.push(siteTwelveHour);
				bankArray.push("Bank " + bankNum);
				bankNum = [];
		});
		bank = 0;
		//console.log(bankArray);
    	console.log(dataListSum);
    	console.log(container);
    	console.log(siteArray);
    	makeChartSummary(container, siteArray, dataListSum);
	});
	////console.log(dataListSum);


    //console.log(dayArray);
}

//append html code to create div 

//in other javascript we need to have an array with an object for it - look at W3 Schools example, add an empty array around it bc that is just the inside
//create another html and js file for summary page 
//make sure to add it to the Makefile and change reference at bottom of html to get to the correct js
//first need to change cpp XML structure for 12 hour summary 

//Notes from Office Hours in 4/25
//in f(XML)
//g=HTML(beginning)
//for each site
//	for each bank{
// 		summing
//		}
//		g+=HTML with data
//	}
// g+ = end HTML

//this generates html in js

//still need to sum the banks
	       
		    					  
function getConnection() {
	getXML(getTestData());
	//console.log(getTestData());
	
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


function makeChartSummary(container, siteArray, dataListSum) {
Highcharts.chart(container, {
    chart: {
        type: 'column'
    },
    title: {
        text: siteArray
    },
    xAxis: {
        categories: dayArray
    },
    xAxis: {
    	title: {
    		text: 'Day of Week'
    	}
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Watts'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: dataListSum
});}



function getTestData() {
	return ("<sites><site><name>St. Andrews Primary</name><maxWatts>1200.000000</maxWatts><numBanks>2</numBanks><bank><day><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.6364</qWattsMin1><hour>8</hour><qWattsMin1>58.2759</qWattsMin1><hour>9</hour><qWattsMin1>189.5926</qWattsMin1><hour>10</hour><qWattsMin1>305.7188</qWattsMin1><hour>11</hour><qWattsMin1>305.6552</qWattsMin1><hour>12</hour><qWattsMin1>340.5000</qWattsMin1><hour>13</hour><qWattsMin1>360.2647</qWattsMin1><hour>14</hour><qWattsMin1>307.9118</qWattsMin1><hour>15</hour><qWattsMin1>360.0513</qWattsMin1><hour>16</hour><qWattsMin1>318.5000</qWattsMin1><hour>17</hour><qWattsMin1>241.0323</qWattsMin1><hour>18</hour><qWattsMin1>109.2593</qWattsMin1><hour>19</hour><qWattsMin1>16.9677</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>7</hour><qWattsMin1>0.4872</qWattsMin1><hour>8</hour><qWattsMin1>19.8750</qWattsMin1><hour>9</hour><qWattsMin1>95.9412</qWattsMin1><hour>10</hour><qWattsMin1>202.8571</qWattsMin1><hour>11</hour><qWattsMin1>353.4615</qWattsMin1><hour>12</hour><qWattsMin1>309.8824</qWattsMin1><hour>13</hour><qWattsMin1>337.3333</qWattsMin1><hour>14</hour><qWattsMin1>272.5143</qWattsMin1><hour>15</hour><qWattsMin1>339.5135</qWattsMin1><hour>16</hour><qWattsMin1>302.0313</qWattsMin1><hour>17</hour><qWattsMin1>232.7188</qWattsMin1><hour>18</hour><qWattsMin1>105.6410</qWattsMin1><hour>19</hour><qWattsMin1>16.6739</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>7</hour><qWattsMin1>0.2258</qWattsMin1><hour>8</hour><qWattsMin1>25.8649</qWattsMin1><hour>9</hour><qWattsMin1>96.0769</qWattsMin1><hour>10</hour><qWattsMin1>197.1471</qWattsMin1><hour>11</hour><qWattsMin1>381.2333</qWattsMin1><hour>12</hour><qWattsMin1>325.1429</qWattsMin1><hour>13</hour><qWattsMin1>266.8261</qWattsMin1><hour>14</hour><qWattsMin1>299.2222</qWattsMin1><hour>15</hour><qWattsMin1>314.0526</qWattsMin1><hour>16</hour><qWattsMin1>306.5667</qWattsMin1><hour>17</hour><qWattsMin1>237.1034</qWattsMin1><hour>18</hour><qWattsMin1>109.6786</qWattsMin1><hour>19</hour><qWattsMin1>12.1852</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>7</hour><qWattsMin1>2.4583</qWattsMin1><hour>8</hour><qWattsMin1>25.7273</qWattsMin1><hour>9</hour><qWattsMin1>157.2188</qWattsMin1><hour>10</hour><qWattsMin1>297.9565</qWattsMin1><hour>11</hour><qWattsMin1>355.4500</qWattsMin1><hour>12</hour><qWattsMin1>343.8261</qWattsMin1><hour>13</hour><qWattsMin1>319.3478</qWattsMin1><hour>14</hour><qWattsMin1>320.5652</qWattsMin1><hour>15</hour><qWattsMin1>328.4815</qWattsMin1><hour>16</hour><qWattsMin1>287.2593</qWattsMin1><hour>17</hour><qWattsMin1>235.9200</qWattsMin1><hour>18</hour><qWattsMin1>97.3667</qWattsMin1><hour>19</hour><qWattsMin1>13.1951</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>7</hour><qWattsMin1>4.3333</qWattsMin1><hour>8</hour><qWattsMin1>68.9630</qWattsMin1><hour>9</hour><qWattsMin1>214.4074</qWattsMin1><hour>10</hour><qWattsMin1>320.9643</qWattsMin1><hour>11</hour><qWattsMin1>358.2500</qWattsMin1><hour>12</hour><qWattsMin1>340.7188</qWattsMin1><hour>13</hour><qWattsMin1>316.9048</qWattsMin1><hour>14</hour><qWattsMin1>309.4359</qWattsMin1><hour>15</hour><qWattsMin1>294.0000</qWattsMin1><hour>16</hour><qWattsMin1>266.9310</qWattsMin1><hour>17</hour><qWattsMin1>190.5588</qWattsMin1><hour>18</hour><qWattsMin1>52.5882</qWattsMin1><hour>19</hour><qWattsMin1>13.6087</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>7</hour><qWattsMin1>2.6667</qWattsMin1><hour>8</hour><qWattsMin1>31.1071</qWattsMin1><hour>9</hour><qWattsMin1>140.0000</qWattsMin1></day></bank><bank><day><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.1250</qWattsMin1><hour>8</hour><qWattsMin1>30.5926</qWattsMin1><hour>9</hour><qWattsMin1>89.6000</qWattsMin1><hour>10</hour><qWattsMin1>170.2647</qWattsMin1><hour>11</hour><qWattsMin1>180.5926</qWattsMin1><hour>12</hour><qWattsMin1>205.6667</qWattsMin1><hour>13</hour><qWattsMin1>227.4118</qWattsMin1><hour>14</hour><qWattsMin1>178.9310</qWattsMin1><hour>15</hour><qWattsMin1>232.6154</qWattsMin1><hour>16</hour><qWattsMin1>184.2353</qWattsMin1><hour>17</hour><qWattsMin1>122.9706</qWattsMin1><hour>18</hour><qWattsMin1>50.8261</qWattsMin1><hour>19</hour><qWattsMin1>6.7813</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>7</hour><qWattsMin1>0.1818</qWattsMin1><hour>8</hour><qWattsMin1>8.9714</qWattsMin1><hour>9</hour><qWattsMin1>44.2051</qWattsMin1><hour>10</hour><qWattsMin1>99.1500</qWattsMin1><hour>11</hour><qWattsMin1>195.6296</qWattsMin1><hour>12</hour><qWattsMin1>181.0526</qWattsMin1><hour>13</hour><qWattsMin1>200.0488</qWattsMin1><hour>14</hour><qWattsMin1>178.6286</qWattsMin1><hour>15</hour><qWattsMin1>211.0286</qWattsMin1><hour>16</hour><qWattsMin1>181.7273</qWattsMin1><hour>17</hour><qWattsMin1>118.3939</qWattsMin1><hour>18</hour><qWattsMin1>47.8205</qWattsMin1><hour>19</hour><qWattsMin1>7.8723</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>12.3529</qWattsMin1><hour>9</hour><qWattsMin1>41.0690</qWattsMin1><hour>10</hour><qWattsMin1>95.0667</qWattsMin1><hour>11</hour><qWattsMin1>225.7188</qWattsMin1><hour>12</hour><qWattsMin1>207.5714</qWattsMin1><hour>13</hour><qWattsMin1>178.6538</qWattsMin1><hour>14</hour><qWattsMin1>195.3871</qWattsMin1><hour>15</hour><qWattsMin1>194.4375</qWattsMin1><hour>16</hour><qWattsMin1>178.5517</qWattsMin1><hour>17</hour><qWattsMin1>121.4412</qWattsMin1><hour>18</hour><qWattsMin1>47.1071</qWattsMin1><hour>19</hour><qWattsMin1>5.2400</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>7</hour><qWattsMin1>0.7097</qWattsMin1><hour>8</hour><qWattsMin1>12.4706</qWattsMin1><hour>9</hour><qWattsMin1>68.0606</qWattsMin1><hour>10</hour><qWattsMin1>165.6667</qWattsMin1><hour>11</hour><qWattsMin1>208.0435</qWattsMin1><hour>12</hour><qWattsMin1>209.3214</qWattsMin1><hour>13</hour><qWattsMin1>193.1481</qWattsMin1><hour>14</hour><qWattsMin1>204.2188</qWattsMin1><hour>15</hour><qWattsMin1>197.8182</qWattsMin1><hour>16</hour><qWattsMin1>161.7692</qWattsMin1><hour>17</hour><qWattsMin1>118.0833</qWattsMin1><hour>18</hour><qWattsMin1>45.9231</qWattsMin1><hour>19</hour><qWattsMin1>7.3333</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>7</hour><qWattsMin1>2.1923</qWattsMin1><hour>8</hour><qWattsMin1>36.4138</qWattsMin1><hour>9</hour><qWattsMin1>90.0690</qWattsMin1><hour>10</hour><qWattsMin1>178.0769</qWattsMin1><hour>11</hour><qWattsMin1>210.6538</qWattsMin1><hour>12</hour><qWattsMin1>206.2571</qWattsMin1><hour>13</hour><qWattsMin1>199.7500</qWattsMin1><hour>14</hour><qWattsMin1>187.9512</qWattsMin1><hour>15</hour><qWattsMin1>182.1515</qWattsMin1><hour>16</hour><qWattsMin1>157.5333</qWattsMin1><hour>17</hour><qWattsMin1>96.1875</qWattsMin1><hour>18</hour><qWattsMin1>27.3667</qWattsMin1><hour>19</hour><qWattsMin1>7.9565</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>7</hour><qWattsMin1>0.7813</qWattsMin1><hour>8</hour><qWattsMin1>16.6667</qWattsMin1><hour>9</hour><qWattsMin1>59.6250</qWattsMin1></day></bank></site><site><name>San Antonio Primary</name><maxWatts>1200.000000</maxWatts><numBanks>1</numBanks><bank><day><dayofweek>1</dayofweek><hour>19</hour><qWattsMin1>21.1429</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>12</hour><qWattsMin1>326.5357</qWattsMin1><hour>13</hour><qWattsMin1>343.7619</qWattsMin1><hour>14</hour><qWattsMin1>556.2895</qWattsMin1><hour>15</hour><qWattsMin1>721.0513</qWattsMin1><hour>16</hour><qWattsMin1>487.3939</qWattsMin1><hour>17</hour><qWattsMin1>392.1522</qWattsMin1><hour>18</hour><qWattsMin1>157.9744</qWattsMin1><hour>19</hour><qWattsMin1>29.2353</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>11</hour><qWattsMin1>718.8182</qWattsMin1><hour>12</hour><qWattsMin1>692.0233</qWattsMin1><hour>13</hour><qWattsMin1>532.5778</qWattsMin1><hour>14</hour><qWattsMin1>562.3673</qWattsMin1><hour>15</hour><qWattsMin1>482.7708</qWattsMin1><hour>16</hour><qWattsMin1>498.3191</qWattsMin1><hour>17</hour><qWattsMin1>382.4222</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>10</hour><qWattsMin1>532.8929</qWattsMin1><hour>11</hour><qWattsMin1>672.3962</qWattsMin1><hour>12</hour><qWattsMin1>512.6296</qWattsMin1><hour>13</hour><qWattsMin1>651.3036</qWattsMin1><hour>14</hour><qWattsMin1>768.4694</qWattsMin1><hour>15</hour><qWattsMin1>731.0000</qWattsMin1><hour>16</hour><qWattsMin1>525.8980</qWattsMin1><hour>17</hour><qWattsMin1>393.5000</qWattsMin1><hour>18</hour><qWattsMin1>235.2500</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>10</hour><qWattsMin1>701.0833</qWattsMin1><hour>11</hour><qWattsMin1>762.0179</qWattsMin1><hour>12</hour><qWattsMin1>792.1552</qWattsMin1><hour>13</hour><qWattsMin1>734.3333</qWattsMin1><hour>14</hour><qWattsMin1>732.7407</qWattsMin1><hour>15</hour><qWattsMin1>680.4800</qWattsMin1><hour>16</hour><qWattsMin1>599.5577</qWattsMin1><hour>17</hour><qWattsMin1>359.8000</qWattsMin1><hour>18</hour><qWattsMin1>120.0816</qWattsMin1><hour>19</hour><qWattsMin1>27.0244</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>10</hour><qWattsMin1>548.8125</qWattsMin1><hour>11</hour><qWattsMin1>656.6571</qWattsMin1><hour>12</hour><qWattsMin1>795.8684</qWattsMin1><hour>13</hour><qWattsMin1>746.9434</qWattsMin1><hour>14</hour><qWattsMin1>706.8378</qWattsMin1><hour>18</hour><qWattsMin1>142.1778</qWattsMin1><hour>19</hour><qWattsMin1>23.9583</qWattsMin1></day><day><dayofweek>7</dayofweek><hour>11</hour><qWattsMin1>46.7941</qWattsMin1><hour>12</hour><qWattsMin1>51.2917</qWattsMin1><hour>13</hour><qWattsMin1>95.6346</qWattsMin1><hour>14</hour><qWattsMin1>143.0426</qWattsMin1><hour>15</hour><qWattsMin1>35.4630</qWattsMin1><hour>16</hour><qWattsMin1>273.4898</qWattsMin1><hour>17</hour><qWattsMin1>371.4865</qWattsMin1><hour>18</hour><qWattsMin1>142.6757</qWattsMin1><hour>19</hour><qWattsMin1>26.5000</qWattsMin1></day></bank></site></sites>");
	//return ("<sites><site><name>Log Cabins</name><maxWatts>2000.000000</maxWatts><numBanks>2</numBanks><bank><day><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0508</qWattsMin1><hour>8</hour><qWattsMin1>50.7368</qWattsMin1><hour>9</hour><qWattsMin1>85.3621</qWattsMin1><hour>10</hour><qWattsMin1>271.5614</qWattsMin1><hour>11</hour><qWattsMin1>349.6607</qWattsMin1><hour>12</hour><qWattsMin1>497.0500</qWattsMin1><hour>13</hour><qWattsMin1>458.3214</qWattsMin1><hour>14</hour><qWattsMin1>511.5517</qWattsMin1><hour>15</hour><qWattsMin1>484.1404</qWattsMin1><hour>16</hour><qWattsMin1>373.0328</qWattsMin1><hour>17</hour><qWattsMin1>145.3478</qWattsMin1><hour>18</hour><qWattsMin1>19.8644</qWattsMin1><hour>19</hour><qWattsMin1>2.8276</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>7</hour><qWattsMin1>0.2034</qWattsMin1><hour>8</hour><qWattsMin1>47.3889</qWattsMin1><hour>9</hour><qWattsMin1>189.7818</qWattsMin1><hour>10</hour><qWattsMin1>373.6500</qWattsMin1><hour>11</hour><qWattsMin1>531.7500</qWattsMin1><hour>17</hour><qWattsMin1>370.2453</qWattsMin1><hour>18</hour><qWattsMin1>188.8793</qWattsMin1><hour>19</hour><qWattsMin1>55.7797</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>7</hour><qWattsMin1>1.2542</qWattsMin1><hour>8</hour><qWattsMin1>28.7500</qWattsMin1><hour>9</hour><qWattsMin1>105.1273</qWattsMin1><hour>10</hour><qWattsMin1>338.2308</qWattsMin1><hour>11</hour><qWattsMin1>553.2542</qWattsMin1><hour>12</hour><qWattsMin1>571.3333</qWattsMin1><hour>13</hour><qWattsMin1>574.6897</qWattsMin1><hour>14</hour><qWattsMin1>543.4182</qWattsMin1><hour>15</hour><qWattsMin1>536.2759</qWattsMin1><hour>16</hour><qWattsMin1>503.4211</qWattsMin1><hour>17</hour><qWattsMin1>386.1897</qWattsMin1><hour>18</hour><qWattsMin1>217.6207</qWattsMin1><hour>19</hour><qWattsMin1>43.3684</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>7</hour><qWattsMin1>0.9828</qWattsMin1><hour>8</hour><qWattsMin1>52.5789</qWattsMin1><hour>9</hour><qWattsMin1>217.4561</qWattsMin1><hour>10</hour><qWattsMin1>345.7759</qWattsMin1><hour>11</hour><qWattsMin1>474.9322</qWattsMin1><hour>12</hour><qWattsMin1>552.9483</qWattsMin1><hour>13</hour><qWattsMin1>538.7963</qWattsMin1><hour>14</hour><qWattsMin1>438.4068</qWattsMin1><hour>15</hour><qWattsMin1>469.4576</qWattsMin1><hour>16</hour><qWattsMin1>450.2167</qWattsMin1><hour>17</hour><qWattsMin1>388.4464</qWattsMin1><hour>18</hour><qWattsMin1>81.5172</qWattsMin1><hour>19</hour><qWattsMin1>28.0192</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>7</hour><qWattsMin1>0.7018</qWattsMin1><hour>8</hour><qWattsMin1>44.6964</qWattsMin1><hour>9</hour><qWattsMin1>164.8475</qWattsMin1><hour>10</hour><qWattsMin1>309.9667</qWattsMin1><hour>11</hour><qWattsMin1>469.8929</qWattsMin1><hour>12</hour><qWattsMin1>557.2881</qWattsMin1><hour>13</hour><qWattsMin1>492.3393</qWattsMin1><hour>14</hour><qWattsMin1>463.7143</qWattsMin1><hour>15</hour><qWattsMin1>548.4464</qWattsMin1><hour>16</hour><qWattsMin1>503.4576</qWattsMin1><hour>17</hour><qWattsMin1>364.5345</qWattsMin1><hour>18</hour><qWattsMin1>146.2727</qWattsMin1><hour>19</hour><qWattsMin1>39.9474</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>7</hour><qWattsMin1>0.5172</qWattsMin1><hour>8</hour><qWattsMin1>46.8704</qWattsMin1><hour>9</hour><qWattsMin1>137.0179</qWattsMin1><hour>10</hour><qWattsMin1>294.9655</qWattsMin1><hour>11</hour><qWattsMin1>372.3276</qWattsMin1><hour>12</hour><qWattsMin1>469.8571</qWattsMin1><hour>13</hour><qWattsMin1>510.8214</qWattsMin1><hour>14</hour><qWattsMin1>370.3684</qWattsMin1><hour>15</hour><qWattsMin1>445.9828</qWattsMin1><hour>16</hour><qWattsMin1>392.5667</qWattsMin1><hour>17</hour><qWattsMin1>339.8983</qWattsMin1><hour>18</hour><qWattsMin1>155.0847</qWattsMin1><hour>19</hour><qWattsMin1>29.5862</qWattsMin1></day><day><dayofweek>7</dayofweek><hour>7</hour><qWattsMin1>0.8772</qWattsMin1><hour>8</hour><qWattsMin1>35.4386</qWattsMin1><hour>9</hour><qWattsMin1>104.7966</qWattsMin1><hour>10</hour><qWattsMin1>261.2241</qWattsMin1><hour>11</hour><qWattsMin1>496.3000</qWattsMin1><hour>12</hour><qWattsMin1>573.4915</qWattsMin1><hour>13</hour><qWattsMin1>530.1186</qWattsMin1><hour>14</hour><qWattsMin1>546.4828</qWattsMin1><hour>15</hour><qWattsMin1>520.9310</qWattsMin1><hour>16</hour><qWattsMin1>462.2281</qWattsMin1><hour>17</hour><qWattsMin1>352.5000</qWattsMin1><hour>18</hour><qWattsMin1>89.7857</qWattsMin1><hour>19</hour><qWattsMin1>28.2414</qWattsMin1></day></bank><bank><day><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0690</qWattsMin1><hour>8</hour><qWattsMin1>33.6271</qWattsMin1><hour>9</hour><qWattsMin1>54.4237</qWattsMin1><hour>10</hour><qWattsMin1>182.0508</qWattsMin1><hour>11</hour><qWattsMin1>241.6897</qWattsMin1><hour>12</hour><qWattsMin1>391.0862</qWattsMin1><hour>13</hour><qWattsMin1>358.3448</qWattsMin1><hour>14</hour><qWattsMin1>447.4237</qWattsMin1><hour>15</hour><qWattsMin1>393.9273</qWattsMin1><hour>16</hour><qWattsMin1>290.7241</qWattsMin1><hour>17</hour><qWattsMin1>109.8537</qWattsMin1><hour>18</hour><qWattsMin1>15.4426</qWattsMin1><hour>19</hour><qWattsMin1>1.9123</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>7</hour><qWattsMin1>0.1034</qWattsMin1><hour>8</hour><qWattsMin1>34.8305</qWattsMin1><hour>9</hour><qWattsMin1>119.7018</qWattsMin1><hour>10</hour><qWattsMin1>219.1930</qWattsMin1><hour>11</hour><qWattsMin1>377.8571</qWattsMin1><hour>17</hour><qWattsMin1>389.1731</qWattsMin1><hour>18</hour><qWattsMin1>176.6667</qWattsMin1><hour>19</hour><qWattsMin1>45.4237</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>7</hour><qWattsMin1>0.7895</qWattsMin1><hour>8</hour><qWattsMin1>21.5614</qWattsMin1><hour>9</hour><qWattsMin1>61.5172</qWattsMin1><hour>10</hour><qWattsMin1>155.0192</qWattsMin1><hour>11</hour><qWattsMin1>399.4035</qWattsMin1><hour>12</hour><qWattsMin1>495.3000</qWattsMin1><hour>13</hour><qWattsMin1>495.4915</qWattsMin1><hour>14</hour><qWattsMin1>466.7895</qWattsMin1><hour>15</hour><qWattsMin1>494.0000</qWattsMin1><hour>16</hour><qWattsMin1>444.0678</qWattsMin1><hour>17</hour><qWattsMin1>397.0678</qWattsMin1><hour>18</hour><qWattsMin1>217.4310</qWattsMin1><hour>19</hour><qWattsMin1>33.8621</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>7</hour><qWattsMin1>0.6610</qWattsMin1><hour>8</hour><qWattsMin1>37.6842</qWattsMin1><hour>9</hour><qWattsMin1>142.5932</qWattsMin1><hour>10</hour><qWattsMin1>244.1356</qWattsMin1><hour>11</hour><qWattsMin1>358.9661</qWattsMin1><hour>12</hour><qWattsMin1>485.3684</qWattsMin1><hour>13</hour><qWattsMin1>497.8421</qWattsMin1><hour>14</hour><qWattsMin1>347.1833</qWattsMin1><hour>15</hour><qWattsMin1>421.7193</qWattsMin1><hour>16</hour><qWattsMin1>429.7544</qWattsMin1><hour>17</hour><qWattsMin1>466.1930</qWattsMin1><hour>18</hour><qWattsMin1>158.6833</qWattsMin1><hour>19</hour><qWattsMin1>23.4821</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>7</hour><qWattsMin1>0.4483</qWattsMin1><hour>8</hour><qWattsMin1>32.4138</qWattsMin1><hour>9</hour><qWattsMin1>115.9483</qWattsMin1><hour>10</hour><qWattsMin1>210.2807</qWattsMin1><hour>11</hour><qWattsMin1>263.5000</qWattsMin1><hour>12</hour><qWattsMin1>498.0508</qWattsMin1><hour>13</hour><qWattsMin1>424.0175</qWattsMin1><hour>14</hour><qWattsMin1>353.7586</qWattsMin1><hour>15</hour><qWattsMin1>489.7586</qWattsMin1><hour>16</hour><qWattsMin1>506.0169</qWattsMin1><hour>17</hour><qWattsMin1>445.1833</qWattsMin1><hour>18</hour><qWattsMin1>192.8070</qWattsMin1><hour>19</hour><qWattsMin1>28.6610</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>7</hour><qWattsMin1>0.4107</qWattsMin1><hour>8</hour><qWattsMin1>31.2500</qWattsMin1><hour>9</hour><qWattsMin1>91.3793</qWattsMin1><hour>10</hour><qWattsMin1>190.9831</qWattsMin1><hour>11</hour><qWattsMin1>286.8947</qWattsMin1><hour>12</hour><qWattsMin1>400.5862</qWattsMin1><hour>13</hour><qWattsMin1>462.6842</qWattsMin1><hour>14</hour><qWattsMin1>309.0847</qWattsMin1><hour>15</hour><qWattsMin1>411.0000</qWattsMin1><hour>16</hour><qWattsMin1>357.4167</qWattsMin1><hour>17</hour><qWattsMin1>390.6140</qWattsMin1><hour>18</hour><qWattsMin1>223.2881</qWattsMin1><hour>19</hour><qWattsMin1>27.5593</qWattsMin1></day><day><dayofweek>7</dayofweek><hour>7</hour><qWattsMin1>0.7167</qWattsMin1><hour>8</hour><qWattsMin1>26.8644</qWattsMin1><hour>9</hour><qWattsMin1>72.3051</qWattsMin1><hour>10</hour><qWattsMin1>194.5763</qWattsMin1><hour>11</hour><qWattsMin1>381.8814</qWattsMin1><hour>12</hour><qWattsMin1>527.7966</qWattsMin1><hour>13</hour><qWattsMin1>466.8644</qWattsMin1><hour>14</hour><qWattsMin1>502.2373</qWattsMin1><hour>15</hour><qWattsMin1>489.6552</qWattsMin1><hour>16</hour><qWattsMin1>431.1525</qWattsMin1><hour>17</hour><qWattsMin1>439.9831</qWattsMin1><hour>18</hour><qWattsMin1>134.6552</qWattsMin1><hour>19</hour><qWattsMin1>26.0339</qWattsMin1></day></bank></site><site><name>St. Andrews Primary</name><maxWatts>1200.000000</maxWatts><numBanks>2</numBanks><bank><day><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.1786</qWattsMin1><hour>8</hour><qWattsMin1>35.2069</qWattsMin1><hour>9</hour><qWattsMin1>45.0000</qWattsMin1><hour>10</hour><qWattsMin1>184.0833</qWattsMin1><hour>11</hour><qWattsMin1>208.6471</qWattsMin1><hour>12</hour><qWattsMin1>294.7931</qWattsMin1><hour>13</hour><qWattsMin1>339.1852</qWattsMin1><hour>14</hour><qWattsMin1>407.8261</qWattsMin1><hour>15</hour><qWattsMin1>314.8235</qWattsMin1><hour>16</hour><qWattsMin1>174.3333</qWattsMin1><hour>17</hour><qWattsMin1>53.9286</qWattsMin1><hour>18</hour><qWattsMin1>11.8649</qWattsMin1><hour>19</hour><qWattsMin1>0.3000</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>20.9091</qWattsMin1><hour>9</hour><qWattsMin1>151.5333</qWattsMin1><hour>10</hour><qWattsMin1>372.2889</qWattsMin1><hour>11</hour><qWattsMin1>315.8421</qWattsMin1><hour>12</hour><qWattsMin1>270.3077</qWattsMin1><hour>17</hour><qWattsMin1>246.7115</qWattsMin1><hour>18</hour><qWattsMin1>119.1176</qWattsMin1><hour>19</hour><qWattsMin1>30.9412</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>7</hour><qWattsMin1>1.0000</qWattsMin1><hour>8</hour><qWattsMin1>69.7632</qWattsMin1><hour>9</hour><qWattsMin1>221.5370</qWattsMin1><hour>10</hour><qWattsMin1>370.0517</qWattsMin1><hour>11</hour><qWattsMin1>388.0185</qWattsMin1><hour>12</hour><qWattsMin1>384.5660</qWattsMin1><hour>13</hour><qWattsMin1>388.4643</qWattsMin1><hour>14</hour><qWattsMin1>355.1333</qWattsMin1><hour>15</hour><qWattsMin1>359.4074</qWattsMin1><hour>16</hour><qWattsMin1>276.8571</qWattsMin1><hour>17</hour><qWattsMin1>269.4545</qWattsMin1><hour>18</hour><qWattsMin1>133.6415</qWattsMin1><hour>19</hour><qWattsMin1>21.6000</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>7</hour><qWattsMin1>0.6316</qWattsMin1><hour>8</hour><qWattsMin1>25.7857</qWattsMin1><hour>9</hour><qWattsMin1>121.3953</qWattsMin1><hour>10</hour><qWattsMin1>220.4310</qWattsMin1><hour>11</hour><qWattsMin1>295.1429</qWattsMin1><hour>12</hour><qWattsMin1>366.5862</qWattsMin1><hour>13</hour><qWattsMin1>349.1321</qWattsMin1><hour>14</hour><qWattsMin1>292.5818</qWattsMin1><hour>15</hour><qWattsMin1>324.2414</qWattsMin1><hour>16</hour><qWattsMin1>284.6316</qWattsMin1><hour>17</hour><qWattsMin1>238.5636</qWattsMin1><hour>18</hour><qWattsMin1>118.5614</qWattsMin1><hour>19</hour><qWattsMin1>17.0385</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>7</hour><qWattsMin1>0.0833</qWattsMin1><hour>8</hour><qWattsMin1>10.5556</qWattsMin1><hour>9</hour><qWattsMin1>58.8158</qWattsMin1><hour>10</hour><qWattsMin1>274.2333</qWattsMin1><hour>11</hour><qWattsMin1>331.1667</qWattsMin1><hour>12</hour><qWattsMin1>264.6364</qWattsMin1><hour>13</hour><qWattsMin1>279.1351</qWattsMin1><hour>14</hour><qWattsMin1>293.8621</qWattsMin1><hour>15</hour><qWattsMin1>341.1892</qWattsMin1><hour>16</hour><qWattsMin1>301.3000</qWattsMin1><hour>17</hour><qWattsMin1>265.3226</qWattsMin1><hour>18</hour><qWattsMin1>93.6563</qWattsMin1><hour>19</hour><qWattsMin1>22.2500</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>7</hour><qWattsMin1>0.8000</qWattsMin1><hour>8</hour><qWattsMin1>28.5882</qWattsMin1><hour>9</hour><qWattsMin1>72.8372</qWattsMin1><hour>10</hour><qWattsMin1>249.6970</qWattsMin1><hour>11</hour><qWattsMin1>220.0606</qWattsMin1><hour>12</hour><qWattsMin1>276.0909</qWattsMin1><hour>13</hour><qWattsMin1>317.2813</qWattsMin1><hour>14</hour><qWattsMin1>303.5556</qWattsMin1><hour>15</hour><qWattsMin1>333.5313</qWattsMin1><hour>16</hour><qWattsMin1>280.5714</qWattsMin1><hour>17</hour><qWattsMin1>244.7576</qWattsMin1><hour>18</hour><qWattsMin1>154.3158</qWattsMin1><hour>19</hour><qWattsMin1>13.2353</qWattsMin1></day><day><dayofweek>7</dayofweek><hour>7</hour><qWattsMin1>0.4000</qWattsMin1><hour>8</hour><qWattsMin1>16.7143</qWattsMin1><hour>9</hour><qWattsMin1>39.0357</qWattsMin1><hour>10</hour><qWattsMin1>158.1563</qWattsMin1><hour>11</hour><qWattsMin1>323.1000</qWattsMin1><hour>12</hour><qWattsMin1>339.9643</qWattsMin1><hour>13</hour><qWattsMin1>407.4091</qWattsMin1><hour>14</hour><qWattsMin1>387.6786</qWattsMin1><hour>15</hour><qWattsMin1>388.5135</qWattsMin1><hour>16</hour><qWattsMin1>307.8750</qWattsMin1><hour>17</hour><qWattsMin1>253.4474</qWattsMin1><hour>18</hour><qWattsMin1>116.7297</qWattsMin1><hour>19</hour><qWattsMin1>16.7692</qWattsMin1></day></bank><bank><day><dayofweek>1</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>18.2813</qWattsMin1><hour>9</hour><qWattsMin1>24.0000</qWattsMin1><hour>10</hour><qWattsMin1>80.0645</qWattsMin1><hour>11</hour><qWattsMin1>106.7667</qWattsMin1><hour>12</hour><qWattsMin1>152.6571</qWattsMin1><hour>13</hour><qWattsMin1>192.6296</qWattsMin1><hour>14</hour><qWattsMin1>217.8636</qWattsMin1><hour>15</hour><qWattsMin1>164.0000</qWattsMin1><hour>16</hour><qWattsMin1>80.0370</qWattsMin1><hour>17</hour><qWattsMin1>24.7222</qWattsMin1><hour>18</hour><qWattsMin1>4.8125</qWattsMin1><hour>19</hour><qWattsMin1>0.0313</qWattsMin1></day><day><dayofweek>2</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>14.5000</qWattsMin1><hour>9</hour><qWattsMin1>67.0000</qWattsMin1><hour>10</hour><qWattsMin1>204.2553</qWattsMin1><hour>11</hour><qWattsMin1>162.4146</qWattsMin1><hour>12</hour><qWattsMin1>150.6667</qWattsMin1><hour>17</hour><qWattsMin1>120.9400</qWattsMin1><hour>18</hour><qWattsMin1>52.0000</qWattsMin1><hour>19</hour><qWattsMin1>15.5588</qWattsMin1></day><day><dayofweek>3</dayofweek><hour>7</hour><qWattsMin1>0.0385</qWattsMin1><hour>8</hour><qWattsMin1>33.0833</qWattsMin1><hour>9</hour><qWattsMin1>95.2115</qWattsMin1><hour>10</hour><qWattsMin1>205.3158</qWattsMin1><hour>11</hour><qWattsMin1>228.0377</qWattsMin1><hour>12</hour><qWattsMin1>223.8235</qWattsMin1><hour>13</hour><qWattsMin1>237.5714</qWattsMin1><hour>14</hour><qWattsMin1>217.7391</qWattsMin1><hour>15</hour><qWattsMin1>218.4630</qWattsMin1><hour>16</hour><qWattsMin1>153.4423</qWattsMin1><hour>17</hour><qWattsMin1>137.8182</qWattsMin1><hour>18</hour><qWattsMin1>57.9623</qWattsMin1><hour>19</hour><qWattsMin1>10.2456</qWattsMin1></day><day><dayofweek>4</dayofweek><hour>7</hour><qWattsMin1>0.1429</qWattsMin1><hour>8</hour><qWattsMin1>12.8393</qWattsMin1><hour>9</hour><qWattsMin1>54.2667</qWattsMin1><hour>10</hour><qWattsMin1>98.3793</qWattsMin1><hour>11</hour><qWattsMin1>158.9649</qWattsMin1><hour>12</hour><qWattsMin1>222.1964</qWattsMin1><hour>13</hour><qWattsMin1>221.2321</qWattsMin1><hour>14</hour><qWattsMin1>169.9643</qWattsMin1><hour>15</hour><qWattsMin1>192.0000</qWattsMin1><hour>16</hour><qWattsMin1>160.5517</qWattsMin1><hour>17</hour><qWattsMin1>127.1207</qWattsMin1><hour>18</hour><qWattsMin1>52.5556</qWattsMin1><hour>19</hour><qWattsMin1>8.1961</qWattsMin1></day><day><dayofweek>5</dayofweek><hour>7</hour><qWattsMin1>0.0000</qWattsMin1><hour>8</hour><qWattsMin1>3.7632</qWattsMin1><hour>9</hour><qWattsMin1>30.6579</qWattsMin1><hour>10</hour><qWattsMin1>141.7419</qWattsMin1><hour>11</hour><qWattsMin1>182.8537</qWattsMin1><hour>12</hour><qWattsMin1>117.5909</qWattsMin1><hour>13</hour><qWattsMin1>138.6579</qWattsMin1><hour>14</hour><qWattsMin1>167.6774</qWattsMin1><hour>15</hour><qWattsMin1>204.8889</qWattsMin1><hour>16</hour><qWattsMin1>175.7879</qWattsMin1><hour>17</hour><qWattsMin1>135.2759</qWattsMin1><hour>18</hour><qWattsMin1>40.0741</qWattsMin1><hour>19</hour><qWattsMin1>11.7234</qWattsMin1></day><day><dayofweek>6</dayofweek><hour>7</hour><qWattsMin1>0.0811</qWattsMin1><hour>8</hour><qWattsMin1>15.3143</qWattsMin1><hour>9</hour><qWattsMin1>33.0476</qWattsMin1><hour>10</hour><qWattsMin1>137.7813</qWattsMin1><hour>11</hour><qWattsMin1>115.9412</qWattsMin1><hour>12</hour><qWattsMin1>169.6207</qWattsMin1><hour>13</hour><qWattsMin1>210.5882</qWattsMin1><hour>14</hour><qWattsMin1>169.4545</qWattsMin1><hour>15</hour><qWattsMin1>214.6563</qWattsMin1><hour>16</hour><qWattsMin1>182.3704</qWattsMin1><hour>17</hour><qWattsMin1>118.7931</qWattsMin1><hour>18</hour><qWattsMin1>69.0333</qWattsMin1><hour>19</hour><qWattsMin1>5.5556</qWattsMin1></day><day><dayofweek>7</dayofweek><hour>7</hour><qWattsMin1>0.0294</qWattsMin1><hour>8</hour><qWattsMin1>7.8462</qWattsMin1><hour>9</hour><qWattsMin1>19.5517</qWattsMin1><hour>10</hour><qWattsMin1>68.5667</qWattsMin1><hour>11</hour><qWattsMin1>169.2500</qWattsMin1><hour>12</hour><qWattsMin1>205.5862</qWattsMin1><hour>13</hour><qWattsMin1>256.5385</qWattsMin1><hour>14</hour><qWattsMin1>250.3667</qWattsMin1><hour>15</hour><qWattsMin1>243.1667</qWattsMin1><hour>16</hour><qWattsMin1>182.8889</qWattsMin1><hour>17</hour><qWattsMin1>131.3421</qWattsMin1><hour>18</hour><qWattsMin1>52.3226</qWattsMin1><hour>19</hour><qWattsMin1>7.6667</qWattsMin1></day></bank></site></sites>");
}

function makeContainer(container){
	return ("<div id="+container+" style='min-width: 310px; height: 400px; margin: 0 auto'></div>");
}


//called at the beginning to get the XML document and load the dropdown list
// function getXML(document) {
//     solarXML = document;
//     var dataArray = [];
// 	var nameArray = [];
//         
//     var siteInfoSum = [];   
//     $(solarXML).find('site').each(function(){
// 		var name = $(this).find("name").text();
// 		nameArray = name;
// 		$(this).find("bank").each(function(){
// 		$(this).find("day").each(function(){
// 			var dayofweek = $(this).find("dayofweek").text();
// 			$(this).find("qWattsMin1").each(function(){
// 			var watts = $(this).text();
// 			totalwatts += parseInt(watts);
// 			//console.log("Data:"+watts);
// 			//dataArray.push(parseInt(wattsorvolts));
// 		});
// 		siteInfoSum.push(dayofweek);
// 		siteInfoSum.push(parseInt(totalwatts));
// 		//console.log(siteInfoSum);
// 		totalwatts = 0;
// 		dataListSum.push(siteInfoSum);
// 		siteInfoSum = [];
// 		//console.log(dataListSum);
// 		//dataListSum = [];
// 		});
// 		});
// // 		var siteTwelveHour = {name: eachday, data: dataArray};
// // 			dataListSum.push(siteTwelveHour);
// 
// 	console.log(dataListSum);
//     //makeChartWeek();
//     nameArray = [];
// 	});
// 
// }
    