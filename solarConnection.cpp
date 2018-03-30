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
  //cout << Op << endl;
  if (Op == "12hours"){
  get12Hours();
  }
  if (Op == "now"){
  getNow();
  }
  

return 0;
}

  void get12Hours(){
  	cout << "<?xml version=\"1.0\"?>";
  cout << "<sites>";
  cout << "<site><name>St. Andrews</name><maxWatts>12</maxWatts><numBanks>2</numBanks>";
  cout << "<bank>";
  cout << "<hour>1</hour><wattsorvolts>3</wattsorvolts>";
  cout << "<hour>2</hour><wattsorvolts>4</wattsorvolts>";
  cout << "<hour>3</hour><wattsorvolts>6</wattsorvolts>";
  cout << "<hour>4</hour><wattsorvolts>10</wattsorvolts>";
  cout << "<hour>5</hour><wattsorvolts>12</wattsorvolts>";
  cout << "<hour>6</hour><wattsorvolts>17</wattsorvolts>";
  cout << "<hour>7</hour><wattsorvolts>18</wattsorvolts>";
  cout << "<hour>8</hour><wattsorvolts>15</wattsorvolts>";
  cout << "<hour>9</hour><wattsorvolts>11</wattsorvolts>";
  cout << "<hour>10</hour><wattsorvolts>8</wattsorvolts>";
  cout << "<hour>11</hour><wattsorvolts>4</wattsorvolts>";
  cout << "<hour>12</hour><wattsorvolts>3</wattsorvolts>";
  cout << "</bank>";
  cout << "<bank>";
  cout << "<hour>1</hour><wattsorvolts>0</wattsorvolts>";
  cout << "<hour>2</hour><wattsorvolts>4</wattsorvolts>";
  cout << "<hour>3</hour><wattsorvolts>6</wattsorvolts>";
  cout << "<hour>4</hour><wattsorvolts>10</wattsorvolts>";
  cout << "<hour>5</hour><wattsorvolts>12</wattsorvolts>";
  cout << "<hour>6</hour><wattsorvolts>20</wattsorvolts>";
  cout << "<hour>7</hour><wattsorvolts>18</wattsorvolts>";
  cout << "<hour>8</hour><wattsorvolts>15</wattsorvolts>";
  cout << "<hour>9</hour><wattsorvolts>11</wattsorvolts>";
  cout << "<hour>10</hour><wattsorvolts>8</wattsorvolts>";
  cout << "<hour>11</hour><wattsorvolts>2</wattsorvolts>";
  cout << "<hour>12</hour><wattsorvolts>0</wattsorvolts>";
  cout << "</bank>";
  cout << "</site>";
  cout << "<site><name>Kings College</name><maxWatts>14</maxWatts><numBanks>1</numBanks>";
  cout << "<bank>";
  cout << "<hour>1</hour><wattsorvolts>0</wattsorvolts>";
  cout << "<hour>2</hour><wattsorvolts>0</wattsorvolts>";
  cout << "<hour>3</hour><wattsorvolts>2</wattsorvolts>";
  cout << "<hour>4</hour><wattsorvolts>4</wattsorvolts>";
  cout << "<hour>5</hour><wattsorvolts>6</wattsorvolts>";
  cout << "<hour>6</hour><wattsorvolts>9</wattsorvolts>";
  cout << "<hour>7</hour><wattsorvolts>11</wattsorvolts>";
  cout << "<hour>8</hour><wattsorvolts>14</wattsorvolts>";
  cout << "<hour>9</hour><wattsorvolts>8</wattsorvolts>";
  cout << "<hour>10</hour><wattsorvolts>2</wattsorvolts>";
  cout << "<hour>11</hour><wattsorvolts>1</wattsorvolts>";
  cout << "<hour>12</hour><wattsorvolts>0</wattsorvolts>";
  cout << "</bank>";  
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


