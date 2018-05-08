#MakeFile to build Solar Panel Project

# Put your user name below:
USER= shurbertj

CC= g++
 
#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: solarConnection PutHTML PutCGI 

site.o: site.h site.cpp
	$(CC) -c $(CFLAGS) site.cpp

sites.o: sites.h sites.cpp
	$(CC) -c $(CFLAGS) sites.cpp

solarConnection.o: solarConnection.cpp
	$(CC) -c $(CFLAGS) solarConnection.cpp
	
solarConnection: solarConnection.o sites.o site.o 
	$(CC) $(CFLAGS) solarConnection.o sites.o site.o -o solarConnection -L/usr/local/lib -lcgicc -lmysqlcppconn
	
PutCGI: solarConnection
	chmod 757 solarConnection
	cp solarConnection /usr/lib/cgi-bin/$(USER)_solarConnection.cgi 

	echo "Current contents of your cgi-bin directory: "
	ls -l /usr/lib/cgi-bin/	

PutHTML:
	cp Solar.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Home.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Project.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Importance.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Locations.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Graphs.html /var/www/html/class/softdev/$(USER)/SolarProject/
	cp Solarx.js /var/www/html/class/softdev/$(USER)/SolarProject/
	cp SolarNoData.js /var/www/html/class/softdev/$(USER)/SolarProject/
	cp SolarSummary.js /var/www/html/class/softdev/$(USER)/SolarProject/
	cp SolarPriceEval.js /var/www/html/class/softdev/$(USER)/SolarProject/ 
	cp SolarWeek.js /var/www/html/class/softdev/$(USER)/SolarProject/ 
	cp style.css /var/www/html/class/softdev/$(USER)/SolarProject/ 
	





	cp Solar.php /var/www/html/class/softdev/$(USER)/SolarProject/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/SolarProject/
	
clean:
	rm -f *.o  solarConnection