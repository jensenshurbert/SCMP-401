var solarXML;
var operation="user";


//called at the beginning to get the XML document and load the dropdown list
function getXML(document) {
    solarXML = document;
        
//     Format data for visualization or output of data here
	
    });

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


