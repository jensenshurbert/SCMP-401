# Week 2 Notebook
### 1/29/18-2/4/18
#### Advisor: Jim Skon
Spoke with Jim Skon about the Belize Solar Panel data he has been collecting with the goal of creating a better website for data visualization. Decided to collaborate with Kara Braun and Matt Carney on the project. Below is some research and tenative plans for the course of the project.

##### Requirements: 
* Analysis - summary, cost, power output, efficiency
* Time Scales - now, day, week, month, long-term, YTD, seasonal
* Site/location based data
* Visualizations - map, data
* Background - Belize Solar Project, location, climate, pictures
* User Interface - refresh to same page, update home page
* Performance - database sub-tabling, minimize clicking

##### Background:
###### Solar Energy:
* Traditional energy resources are becoming less viable
* Energy from the sun is converted into thermal or electrical energy
* Solar is clean and abundant
* Panels are typically placed on roofs or in direct line with sunlight 
###### Belize:
* Eastern Coast of Central America
* Tropical climate - two seasons (hot and dry)
* Avg. temperature 84 degrees F
###### Belize Solar Project:
* Jim Skon and group of Kenyon Students
* Volunteer to install solar panels on primary schools in the area
  * Schools gained access to new computer labs so they need more power
* Grid-tie Solar Power Systems
###### Current Website Research
* Show refresh of summary page
  * very slow, graphs not labeled, comparing data from different times with different scales
* Specific site
  * Static page with no interactive visualizations, real-time data not really in real time, generally, more information can be gathered by adding or changing the current visualizations
* Graphs - only shows data from one day
##### Our plan
###### Overview
Create/upgrade a website that analyses the data in an efficient way. Our website will allow user interaction with the data and provide clear and informative data visualizations.
###### Data Retrival and Management
* As of right now, this will be Kara's component
###### Data Analysis
* Matt's section
###### Data Visualizations
* I will be the lead person for this section of the project
* Goal - display the findings of our analyses in a clear and interactive way
* What makes good visualizations
  * Clear context that is measured against clear goals
  * Simple and digestible
  * Choose the right visual for the purpose
  * Keep users engaged
* Types of visualizations
  * Line charts
  * Bar charts
  * Scatter plots 
  * Bubble charts 
  * Pie charts
  * Etc.
* Connect visualizations with locations on map
* Tableau Software
  * Data visualization tool that allows you to input your own data
  * Can be used to compare your data based on different constraints
  * Interactive element with the users 
  
#### Up Next
This next week, we will finalize the list of project requirements and meet with Jim Skon to get time estimates for each section of the project in order to divide the work. This will allow us to begin our individual components of the project. I also plan to talk to Skon about Tableau to make sure it will be appropriate for his dataset. 


# Week 3 Notebook
### 2/5/18-2/11/18

#### Overview
This week, most of my efforst were in researching Tableau and HighChart, and deciding which visualizations to include in the final project. After some thought, I decided to download Tableau and try to make a visualization. I also created a mockup of what will be included in each page of the website. A layout description and walkthrough of Tableau is below. 

#### Layout
Created list of personal requirements for the layout of the website and data visualizations
1. Improve homepage - brief project description, example visualization
2. Include project description page - description, history, pictures
3. Include importance and background of solar - Location description, possible weather, diagram of panel connections and how it works.
4. Power produced from solar panels page - user interaction with changing time and/or locations
5. Cost analysis page - stacked bars, user interaction with location
6. Performance decay page - stacked bars, user interaction with location

#### Tableau
Need to be able to import a data set and provide the appropriate visualization. The goal of this exercise was to see if Tableau is an appropriate choice for the data visualizations we want. 

The data set that I used was the csv file from August 2016, which is an example data set on his project site. This gave data on the specific locations, where the data was split into 4 columns (location, watts vs. volts, amount of watts or volts, time stamp). Tableau has a quick and easy way to import a data set - Connect, to a file, text file, select file on local machine. Once the data set is connected, select the Sheet 1 tab on the bottom of the page. This will take you to the page where you can create your data visualizations. From here, you can drag dimensions and/or measures to the columns/rows input bars. 

The current data set isn't labeled so I still have to figure out how to create appropriate labels for the graphs. From this exercise, I created two different types of visualizations. One that is one line graph where hours (24) is on the x-axis and volts is on the y-axis. The user can overlay their mouse along the visualization where they are told the location, exact hour and number of volts corresponding to that line. The lines are also different colors to indicate the different locations. Tableau also generated a legend where the user could tell which color corresponds to which location without having to interact with the graph. Another visualization that I created is very similar to the first but I was able to split it up into different graphs depending on the location. 

# Week 4 Notebook
### 2/12/18-2/18/18

#### Overview
This week, I recieved website code from Professor Skon and experimented more with Tableau. Skon gave me access to the html and js files for the project. 

#### Setting up website to personal computer 
After recieving the html and js files and reviewing them, the next step was to get the website working on my personal computer since I don't have access to his log in information. My goal was to be able to get the website running on my computer through the Kenyon cs server, which I have access to through another course. 

In order to access code, I viewed the page source on the current website in order to get the code for html and js. Then, through BBEdit, I created new personal files called Solar.html, Solarx.js, Solar.css and my Makefile. Through my Linux terminal, I created a new project (SolarProject) then saved my new files to that location. I added the current code to the html and js files, and created my Makefile. In order for the Makefile to push my files to the cs server, I created a new directory (mkdir) on the server and used my Makefile to allow me to view the html on Chrome. 

After this, it seems like I have files missing that I currently don't have access to since the html is very minimal and doesn't look much like the original website. 
