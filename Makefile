#MakeFile to build Solar Panel Project
# 

# Put your user name below:
USER= shurbertj

CC= g++
 
#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: solarConnection PutHTML PutCGI 

solarConnection.o: solarConnection.cpp
	$(CC) -c $(CFLAGS) solarConnection.cpp
	
solarConnection: solarConnection.o 
	$(CC) $(CFLAGS) solarConnection.o -o solarConnection -L/usr/local/lib -lcgicc
	
PutCGI: solarConnection
	chmod 757 solarConnection
	cp solarConnection /usr/lib/cgi-bin/$(USER)_solarConnection.cgi 

	echo "Current contents of your cgi-bin directory: "
	ls -l /usr/lib/cgi-bin/	

PutHTML:
	cp test.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solar.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Home.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Project.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Importance.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Locations.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Graphs.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solar.css /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solarx.js /var/www/html/class/softdev/$(USER)/SolarProject/
	cp SolarSummary.js /var/www/html/class/softdev/$(USER)/SolarProject/

	cp Solar.php /var/www/html/class/softdev/$(USER)/SolarProject/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/SolarProject/
	
clean:
	rm -f *.o  solarConnection