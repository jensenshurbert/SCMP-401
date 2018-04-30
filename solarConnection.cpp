//Jensen Shurbert
//Shakespeare Lookup wordlookupclient.cpp
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
void get12Hours();
void getNow();
void getBankSum();


int main() {
  Cgicc cgi;    // Ajax object
  char *cstr;
  
  // Create AJAX objects to recieve information from web page.
  form_iterator itOp = cgi.getElement("operation");
  string Op = **itOp;
  Op = "now";
  //get site
  //get data for site with second parameter siteid
  
  //Get Latest Function output from Kara
  
  cout << "Content-Type: text/plain\n\n";
  //cout << Op << endl;
  //return 0;
  
  sites testsites;
  //testsites.listSites();

  
  
  if (Op == "12hours"){
  //get12Hours();
//   string twelveXMLString;
//   twelveXMLString = "<sites>";
//   
//   for(int i=0; i < testsites.numSites() - 1 ; i++){
//   	twelveXMLString += testsites.lastWeek(i,"qWattsMin1");
//   }
//   twelveXMLString += "</sites>";
//   cout << twelveXMLString << endl;
  
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
  
  //cout << "hello!" <<endl;
  //testsites.listSites();
  //cout << "Now outputting the latest wattage for the first site..." << endl;
  //cout << testsites.latest(1,"qWattsMin1") << endl << endl << endl;
  cout << "Now outputting the last week of wattage data for the first site..." << endl << endl;
  cout << testsites.lastWeek(4,"qWattsMin1") << endl << endl << endl;
  //cout << "Now outputting the data for the first site data on April 9th, 7am to 7pm... " << endl;
  //cout << testsites.qByID(1,"qWattsMin1","2018-4-9 7:00:00","2018-4-9 20:00:00") <<endl<< endl << endl;
//   cout << "Now outputting yesterdays data for one site" << endl;
//   cout << testsites.yesterday(0,"qWattsMin1") << endl << endl << endl;

//NEXT STEPS
//comment out dummy code
//keep "text xml" but make sure the cpp program is only outputting xml
//instead of my dummy functions, use hers - check in website, if breaks, check network response, check that in xml format checker
//keep Op different for each js file 

return 0;
}

  // void get12Hours(){
//   	cout << "<?xml version=\"1.0\"?>";
//   cout << "<sites>";
//   cout << "<site><name>St. Andrews</name><maxWatts>12</maxWatts><numBanks>2</numBanks>";
//   cout << "<bank>";
//   cout << "<hour>1</hour><wattsorvolts>3</wattsorvolts>";
//   cout << "<hour>2</hour><wattsorvolts>4</wattsorvolts>";
//   cout << "<hour>3</hour><wattsorvolts>6</wattsorvolts>";
//   cout << "<hour>4</hour><wattsorvolts>10</wattsorvolts>";
//   cout << "<hour>5</hour><wattsorvolts>12</wattsorvolts>";
//   cout << "<hour>6</hour><wattsorvolts>17</wattsorvolts>";
//   cout << "<hour>7</hour><wattsorvolts>18</wattsorvolts>";
//   cout << "<hour>8</hour><wattsorvolts>15</wattsorvolts>";
//   cout << "<hour>9</hour><wattsorvolts>33</wattsorvolts>";
//   cout << "<hour>10</hour><wattsorvolts>8</wattsorvolts>";
//   cout << "<hour>11</hour><wattsorvolts>4</wattsorvolts>";
//   cout << "<hour>12</hour><wattsorvolts>3</wattsorvolts>";
//   cout << "</bank>";
// //   cout << "<bank>";
// //   cout << "<hour>1</hour><wattsorvolts>0</wattsorvolts>";
// //   cout << "<hour>2</hour><wattsorvolts>4</wattsorvolts>";
// //   cout << "<hour>3</hour><wattsorvolts>6</wattsorvolts>";
// //   cout << "<hour>4</hour><wattsorvolts>10</wattsorvolts>";
// //   cout << "<hour>5</hour><wattsorvolts>12</wattsorvolts>";
// //   cout << "<hour>6</hour><wattsorvolts>20</wattsorvolts>";
// //   cout << "<hour>7</hour><wattsorvolts>18</wattsorvolts>";
// //   cout << "<hour>8</hour><wattsorvolts>15</wattsorvolts>";
// //   cout << "<hour>9</hour><wattsorvolts>11</wattsorvolts>";
// //   cout << "<hour>10</hour><wattsorvolts>8</wattsorvolts>";
// //   cout << "<hour>11</hour><wattsorvolts>2</wattsorvolts>";
// //   cout << "<hour>12</hour><wattsorvolts>0</wattsorvolts>";
// //   cout << "</bank>";
//   cout << "</site>";
//   cout << "<site><name>Kings College</name><maxWatts>14</maxWatts><numBanks>1</numBanks>";
//   cout << "<bank>";
//   cout << "<hour>1</hour><wattsorvolts>0</wattsorvolts>";
//   cout << "<hour>2</hour><wattsorvolts>0</wattsorvolts>";
//   cout << "<hour>3</hour><wattsorvolts>2</wattsorvolts>";
//   cout << "<hour>4</hour><wattsorvolts>4</wattsorvolts>";
//   cout << "<hour>5</hour><wattsorvolts>6</wattsorvolts>";
//   cout << "<hour>6</hour><wattsorvolts>9</wattsorvolts>";
//   cout << "<hour>7</hour><wattsorvolts>0</wattsorvolts>";
//   cout << "<hour>8</hour><wattsorvolts>0</wattsorvolts>";
//   cout << "<hour>9</hour><wattsorvolts>8</wattsorvolts>";
//   cout << "<hour>10</hour><wattsorvolts>2</wattsorvolts>";
//   cout << "<hour>11</hour><wattsorvolts>1</wattsorvolts>";
//   cout << "<hour>12</hour><wattsorvolts>0</wattsorvolts>";
//   cout << "</bank>";  
//   cout << "</site>";
//   cout << "</sites>";}
//   
//   void getBankSum(){
//   	
//   
//   }
//   
//   void getNow(){
//     cout << "<?xml version=\"1.0\"?>";
//   cout << "<sites>";
//   cout << "<site><name>St. Andrews</name><maxWatts>12</maxWatts><numBanks>2</numBanks>";
//   cout << "<bank><mostrecent>2009-10-20 01:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
//   cout << "<bank><mostrecent>2009-10-20 02:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
//   cout << "</site>";
//   cout << "<site><name>Kings College</name><maxWatts>14</maxWatts><numBanks>2</numBanks>";
//   cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
//   cout << "<bank><mostrecent>2009-10-20 04:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
//   cout << "</site>";
//   cout << "<site><name>Log Cabins</name><maxWatts>4</maxWatts><numBanks>1</numBanks>";
//   cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
//   cout << "</site>";
//   cout << "</sites>";}
// 
// 
