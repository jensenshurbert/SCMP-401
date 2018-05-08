//Jensen Shurbert
//solarConnection.cpp
//Spring 2018

#include <iostream>
// Stuff for AJAX
#include "cgicc/Cgicc.h"
#include "cgicc/HTTPHTMLHeader.h"
#include "cgicc/HTMLClasses.h"

//Stuff for pipes
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <iostream>
#include <fstream>
#include <sstream>
#include <stdexcept>
#include <string>
#include <vector>

#include "mysql_connection.h"
#include "mysql_driver.h"
#include <cppconn/driver.h>
#include <cppconn/exception.h>
#include <cppconn/resultset.h>
#include <cppconn/statement.h>
#include <cppconn/prepared_statement.h>

#include "sites.h"
#include "site.h"

using namespace std;
using namespace cgicc; // Needed for AJAX functions.
// void get12Hours();
// void getNow();
// void getBankSum();


int main() {
  Cgicc cgi;    // Ajax object
  char *cstr;
  
  // Create AJAX objects to recieve information from web page.
  form_iterator itOp = cgi.getElement("operation");
  string Op = **itOp;
  //Op = "week";
  
  
  cout << "Content-Type: text/plain\n\n";
  //return 0;
  
  sites testsites;

  
  
  if (Op == "12hours"){
  //get12Hours();
  string twelveXMLString;
  twelveXMLString = "<sites>";
  
  for(int i=0; i < testsites.numSites() - 1 ; i++){
  	twelveXMLString += testsites.yesterday(i,"qWattsMin1");
  }
  twelveXMLString += "</sites>";
  cout << twelveXMLString << endl;
  
  }
  
  if (Op == "now"){
  	//getNow();
  	string currentXMLString;
  	currentXMLString = "<sites>";
  
  	for (int i=0; i < testsites.numSites() - 1; i++){
  		currentXMLString += testsites.latest(i,"qWattsMin1");
  	}
  	currentXMLString += "</sites>";
  	cout << currentXMLString << endl;  
  }
  
  if (Op == "week"){
  	string weekXMLString;
  	weekXMLString = "<sites>";
  
  	for(int i=0; i < testsites.numSites() - 1 ; i++){
  		weekXMLString += testsites.lastWeek(i,"qWattsMin1");
  	}
  	weekXMLString += "</sites>";
  	cout << weekXMLString << endl;
  
  }

//include this code once History tab is working, not completed, but this is the rough idea
//   if (Op == "user") {
//     string userXMLString;
//   	userXMLString = "<sites>";
//   
//   	for(int i=0; i < testsites.numSites() - 1 ; i++){
//   		userXMLString += testsites.qByID(i,"qWattsMin1", begTime, endTime);
//   	}
//   	userXMLString += "</sites>";
//   	cout << userXMLString << endl;
//   }
  
  //Test Code.
  //Run solarConnection.cpp in the terminal with these uncommented out to check connection and XML output
  
  //cout << "hello!" <<endl;
  //testsites.listSites();
  //cout << "Now outputting the latest wattage for the first site..." << endl;
  //cout << testsites.latest(1,"qWattsMin1") << endl << endl << endl;
  //cout << "Now outputting the last week of wattage data for the first site..." << endl << endl;
  //cout << testsites.lastWeek(4,"qWattsMin1") << endl << endl << endl;
  //cout << "Now outputting the data for the first site data on April 9th, 7am to 7pm... " << endl;
  //cout << testsites.qByID(1,"qWattsMin1","2018-4-9 7:00:00","2018-4-9 20:00:00") <<endl<< endl << endl;
//   cout << "Now outputting yesterdays data for one site" << endl;
//   cout << testsites.yesterday(0,"qWattsMin1") << endl << endl << endl;


return 0;
}

 