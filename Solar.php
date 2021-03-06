<?php
if (is_ajax()) 
{  if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists
    $action = $_POST["action"];
    switch($action) { //Switch case for value of action
      case "getSummary": getSummary(); break;
      case "getSite": getSite(); break;
      case "getMinutePower": getMinutePower(); break;
    }
  }
}

//Function to check if the request is an AJAX request
function is_ajax() 
{
return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

// Database Management
function openSolarDB() {
		//live database
   //$servername = "cs3.kenyon.edu";
   //$username = "braunk";
   //$password = "S214486";
   		//Snapshot of database
   $servername = "localhost";
   $username = "shurbertj";
   $password = "S214141";
   //both
   $dbname = "LIM-SERV";

   // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }
   return $conn;

}

// Site information 
    class site {
       public $name;
       public $max;
       public $banks;
       public $bankIDs;
       public $powers = array();
       public $timestamps = array();

       public function __construct($name, $max, $banks, $bankIDs) {
         $this->name = $name;
         $this->max = $max;
	 $this->banks = $banks;
         $this->bankIDs = $bankIDs;
       }
}

    class sitedetail {
       public $name;
       public $max;
       public $banks;
       public $powers = array();
       public $volts = array();
       public $timestamps = array();
       public $hours = array();
       public $average = array();
       public $week = array();
       public $month = array();

       public function __construct($name, $max, $banks) {
         $this->name = $name;
         $this->max = $max;
	 $this->banks = $banks;
       }
}

function initSites() {
    $ListOfSites[] = new site("Log Cabins",  1500, 2, ["A43C8B0C4A", "A43C8B0CD7"]);
    $ListOfSites[] = new site("St. Andrews Primary", 1500, 2, ["A43C8B0AB1","A43CE7BE69"]);
    $ListOfSites[] = new site("Victorious Nazarene", 800, 2, ["A43C6DC4D2","A43CE7BE5E"]);
    $ListOfSites[] = new site("Kings College", 800, 1, ["A43C6DC5EB"]);
    $ListOfSites[] = new site("Toledo Christian Academy", 800, 1, ["A43C895C02"]);
    $ListOfSites[] = new site("San Antonio Primary", 1200, 1, ["A43C6DC815"]);
    $ListOfSites[] = new site("Faith Nazarene", 1200, 1, ["A43CE7BE78"]);
    $ListOfSites[] = new site("Sarteneja Nazarene", 1200, 1, ["A43C6DC4C6"]);
    $ListOfSites[] = new site("Corazol Methodist", 1200, 1, ["A43CE7C04F"]);
    $ListOfSites[] = new site("ACES", 1500, 2, ["A43C8B0C4A","A43C8B0B9F"]);
    $ListOfSites[] = new site("Brighter Tomorrow", 600, 1, ["A43CE7BE41"]);
    $ListOfSites[] = new site("Kenyon Solar Demo", 600, 1, ["A43C6DC810"]);
    return $ListOfSites;
}

function getLatest($conn, $iid, $qid) {
    $sql = "SELECT Response, TimeStamp FROM `Answers` WHERE IID = '".$iid."' AND QID = '".$qid."' ORDER BY TimeStamp DESC LIMIT 1";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
         $assoc  = $result->fetch_assoc();
	 $value = $assoc["Response"];
	 $timestamp = $assoc["TimeStamp"];
    } else {
         $value = 0;
         $timestamp = "No Data";
    }
    return array ($value, $timestamp);

}

function getWeek($conn, $iid, $qid) {
    $sql = "SELECT AVG(Response) AS AVG, HOUR(TimeStamp) as HOUR, DAYOFWEEK(TimeStamp) AS DAY FROM `Answers` WHERE IID = '".$iid."' AND QID = '".$qid."' AND YEARWEEK (TimeStamp) = YEARWEEK( current_date -interval 1 week ) GROUP BY DAY, HOUR";
    $result = $conn->query($sql);
    $daytotal = [0.0,0.0,0.0,0.0,0.0,0.0,0.0];
    for ($i = 0; $i < $result->num_rows - 1; $i++) {
        $hourdata = $result->fetch_assoc();
	$day = $hourdata["DAY"];
	$hourwatts = $hourdata["AVG"]/1000;
	$daytotal[$day-1] += $hourwatts;
    }
    return $daytotal;
}

function getHourly($conn, $iid, $qid) {
    $sql = "SELECT AVG(Response) AS Average, HOUR(TimeStamp) AS Hour FROM `Answers` WHERE IID = '".$iid."' AND QID = '".$qid."' AND DATE(TimeStamp) = (SELECT MAX(DATE(TimeStamp)) FROM Answers WHERE IID = '".$iid."') GROUP BY Hour";
    $result = $conn->query($sql);
    $data = [];	
    $hour = [];    
    for ($i = 0; $i < $result->num_rows - 1; $i++) {
        $value = $result->fetch_assoc();
	 array_push($hour, $value["Hour"]);
	 array_push($data, $value["Average"]);

    }
    return array ($hour, $data);

}

function getByMinute($conn, $iid, $qid, $days) {
//$file = fopen("/var/log/solar/solar.log","a");
    $sql = "SELECT Response AS Power, HOUR( TIMESTAMP ) AS HOUR , TIME( TIMESTAMP ) AS TIME FROM  `Answers`  WHERE HOUR( TIMESTAMP ) >= '7' AND HOUR( TIMESTAMP ) < '21' AND IID =  '".$iid."' AND QID =  '".$qid."' AND DATE( TIMESTAMP ) = (  SELECT MAX( DATE( TIMESTAMP )-$days )  FROM Answers WHERE IID = '".$iid."' )";
    $result = $conn->query($sql);
//       fwrite($file, "sql:".$iid.$qid.$sql.":".$result->num_rows."\n");

    $watts = [];	
    for ($i = 0; $i < $result->num_rows; $i++) {
        $value = $result->fetch_assoc();
//	 fwrite($file, "P:".$value["Power"].":");
	 array_push($watts, $value["Power"]);
    }
    return $watts;
}

function createDayByMinutes() {
    $tstart = 7;
    $tend = 21;
    $data = [];
    for ($i = $tstart; $i < $tend; $i++) {
    	for ($j = 0; $j < 60; $j++ ) {
	    $index = $i.":".$j;
	    
	    $data[$index] = 0;
	}
    }
    return $data;
}

function getByMinute2($conn, $iid, $qid, $days) {
//$file = fopen("/var/log/solar/solar.log","a");
	
    $date = date("Y-m-d", strtotime("-".$days." days"));
//    fwrite($file,"day:".$date);
    $sql = "SELECT Response AS Power, HOUR( TIMESTAMP ) AS HOUR , MINUTE(TIMESTAMP) AS MINUTE, TIME( TIMESTAMP ) AS TIME FROM  `Answers`  WHERE HOUR( TIMESTAMP ) >= '7' AND HOUR( TIMESTAMP ) < '21' AND IID =  '".$iid."' AND QID =  '".$qid."' AND DATE( TIMESTAMP ) = '".$date."'";
    $result = $conn->query($sql);
    $minutes = createDayByMinutes();
    $lm=0;
    for ($i = 0; $i < $result->num_rows; $i++) {
        $value = $result->fetch_assoc();
	$m = (int)$value["MINUTE"];
//	if ($m != $lm+1) fwrite($file,"SK:".$lm.":".$m." ");
//	if ($m == $lm) fwrite($file,"RP:".$m." ");
	$lm = $m;
	 $index=$value["HOUR"].":".$value["MINUTE"];
//fwrite($file,"t".$index."*".$value["Power"]);
	 $minutes[$index] = (int)$value["Power"];
    }

//    fwrite($file,"ARRAY:".json_encode($minutes));
    $wattarray = [];
    $prev = 0;
    foreach ($minutes as $w) {
      $v = $w;
      if ($w == 0) {
      	 $v = $prev;
//	 fwrite($file, "F".$prev.":".$w.":".$v." ");
      }
      array_push($wattarray,(int)$v);
      $prev = (int) $v;
    }
    
    return $wattarray;
}


function getSummary() {
   $conn = openSolarDB();
   $ListOfSites = initSites();

   foreach ($ListOfSites as $site) {
       $i = 0;
       foreach ($site->bankIDs as $iid) {
          $results = getLatest($conn,$iid,'qWattsMin1'); 
          $site->powers[$i] = $results[0];
          $site->timestamps[$i] = $results[1];
	  $i++;
	
       }
   }
   // End connection
   $conn->close();
   //$return = $_POST;
   //$return["json"] = json_encode($ListOfSites);
   echo json_encode($ListOfSites);
 }  

function getSite() {

   $ListOfSites = initSites();
   $conn = openSolarDB();

   $siteNum = $_POST["site"];
//   fwrite($file, "site:".$siteNum."\n");
   $site = $ListOfSites[$siteNum];
   $detail = new sitedetail($site->name, $site->max, $site->banks);

   $i = 0;
   foreach ($site->bankIDs as $iid) {
      $results = getLatest($conn,$iid,'qWattsMin1'); 
      $detail->powers[$i] = $results[0];
      $detail->timestamps[$i] = $results[1];
      $results = getLatest($conn,$iid,'qvoltsMin1'); 
      $detail->volts[$i] = $results[0];
      $hourly = gethourly($conn,$iid,'qWattsMin1');
      if (count($hourly[0]) > 1) {
      	 $detail->hours=$hourly[0]; 
      }
      $detail->average[$i] = $hourly[1];
      $detail->week[$i] = getWeek($conn,$iid,'qWattsMin1');

      $i++;
   }
   
   
   echo json_encode($detail);

}
function getMinutePower() {


   $ListOfSites = initSites();
   $siteNum = $_POST["site"];
   $days = $_POST["days"];
   $conn = openSolarDB();
   $site = $ListOfSites[$siteNum];
   $watts = [];

//      fwrite($file,"Minutes\n".$siteNum."\n");
   $i = 0;
   foreach ($site->bankIDs as $iid) {
      $results = getByMinute2($conn,$iid,'qWattsMin1',$days); 
//      $results = getByMinute($conn,$iid,'qWattsMin1',$days); 
//   fwrite($file, "results:".$iid.json_encode($results));
      if ($i == 0) {
      	for($j = 0 ; $j < sizeof($results); $j++) {
	   $watts[$j] = (int)$results[$j];
        }
      } else {
      	for($j = 0 ; $j < sizeof($results); $j++) {
	   $watts[$j] += $results[$j];
        }
      }
      $i++;
   }
   $detail->name = $site->name;
   $detail->watts = $watts; 
   $detail->site = $siteNum;
//   fwrite($file, "all:".json_encode($detail));
   echo json_encode($detail);

}
?>