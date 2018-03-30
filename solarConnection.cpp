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


using namespace std;
using namespace cgicc; // Needed for AJAX functions.
void get12Hours();
void getNow();

int main() {
  Cgicc cgi;    // Ajax object
  char *cstr;
  
  // Create AJAX objects to recieve information from web page.
  form_iterator itOp = cgi.getElement("operation");
  string Op = **itOp;
  //get site
  //get data for site with second parameter siteid
  
  //Get Latest Function output from Kara
  
  cout << "Content-Type: text/plain\n\n";
  
  if (operation = "12hours"){
  get12Hours();
  }
  if (operation = "now"){
  getNow();
  }
  };
  
  
  void get12Hours(){
  cout << "<?xml version=\"1.0\"?>";
  cout << "<sites>";
  cout << "<site><name>St. Andrews</name><maxWatts>12</maxWatts><numBanks>2</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 01:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 02:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 04:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 05:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 06:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 07:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 08:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 09:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 10:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 11:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 12:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "<site><name>Kings College</name><maxWatts>14</maxWatts><numBanks>2</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 04:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "<site><name>Log Cabins</name><maxWatts>4</maxWatts><numBanks>1</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "</sites>";}
  
  void getNow(){
    cout << "<?xml version=\"1.0\"?>";
  cout << "<sites>";
  cout << "<site><name>St. Andrews</name><maxWatts>12</maxWatts><numBanks>2</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 01:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 02:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "<site><name>Kings College</name><maxWatts>14</maxWatts><numBanks>2</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "<bank><mostrecent>2009-10-20 04:00:00.0</mostrecent><wattsorvolts>Volts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "<site><name>Log Cabins</name><maxWatts>4</maxWatts><numBanks>1</numBanks>";
  cout << "<bank><mostrecent>2009-10-20 03:00:00.0</mostrecent><wattsorvolts>Watts</wattsorvolts></bank>";
  cout << "</site>";
  cout << "</sites>";}
  
  

  
return 0;
}


