#MakeFile to build and deploy the Sample US CENSUS Name Data using ajax
# For CSC3004 Software Development

# Put your user name below:
USER= shurbertj

CC= g++
 
#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: PutHTML



PutHTML:
	cp Solar.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Home.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Project.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Importance.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Locations.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Graphs.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solar.css /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solarx.js /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solar.php /var/www/html/class/softdev/$(USER)/SolarProject/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/SolarProject/
	
clean:
	rm -f *.o  SolarProject