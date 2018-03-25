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


int main() {
  Cgicc cgi;    // Ajax object
  char *cstr;
  
  // Create AJAX objects to recieve information from web page.
  form_iterator itname = cgi.getElement("command");
  //get site
  //get data for site with second parameter siteid
  
  cout << "Content-Type: text/plain\n\n";
  cout << "<?xml version=\"1.0\"?>";
  cout << "<sites>";
  cout << "<site><name>St. Andrews</name><bank><panels>4</panels>";
  cout << "<currentpower>324</currentpower></bank>";
  cout << "<bank><currentpower>322</currentpower></bank></site>";
  cout << "<site><name>Kings College</name><bank><currentpower>553</currentpower></bank>";
  cout << "</site>";
  cout << "</sites>";
  
return 0;
}


