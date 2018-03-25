var solarXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;


//called at the beginning to get the XML document and load the dropdown list
function getXML(document) {
    solarXML = document;
    
    $(solarXML).find('site').each(function(){
	var name = $(this).find("name").text();
	console.log(name);
    });
}
	       
		    					  
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
 	//initial things
    });

