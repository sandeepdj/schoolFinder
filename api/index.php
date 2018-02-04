<?php
require 'vendor/autoload.php';
header('Access-Control-Allow-Origin: *'); 

$app = new \Slim\Slim();

function dbconnect(){

    $conn = mysqli_connect("localhost","root","root","tsr");
    if($conn){
        return $conn;
    }else{
        echo "Error connecting database";
    }
}
 
$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

$app->get('/liveSearch/:srcText', function ($srcText) {
     $conn  = dbconnect();
     $response = array();
     $sql="SELECT a.id as refid, CONCAT(a.name,' , ',a.locality,' , ',c.name,' , ',b.name,', ',a.pincode) as sname
     FROM schools a
     INNER JOIN states b ON a.stid = b.id
     INNER JOIN districts c ON a.district_id = c.id
     WHERE a.name like '%".$srcText."%' OR c.name like '%".$srcText."%' OR a.pincode like '".$srcText."%' limit 10 ";
    $exec = mysqli_query($conn,$sql);
     while($row = mysqli_fetch_assoc($exec)){
         $response['schools'][] = $row;
     }
     $sqls = "select * from districts where  name like '".$srcText."%' limit 5";
     $execs = mysqli_query($conn,$sqls);
     while($row = mysqli_fetch_assoc($execs)){
         $response['districts'][] = $row;
     }
     echo json_encode($response);

});


$app->get('/schoolById/:schoolRefId', function ($schoolRefId) {
    $conn  = dbconnect();
    $response = array();
    $sql="SELECT a.id, a.refid, CONCAT(a.name,' , ',a.locality) as sname, c.name as distName,b.name as stateName,a.pincode,a.latitude,a.longitude,d.name as saddress,a.locality
    FROM schools a
    INNER JOIN states b ON a.stid = b.id
    INNER JOIN districts c ON a.district_id = c.id
    INNER JOIN school_addresses d ON a.id = d.id
    WHERE a.id= $schoolRefId";
   $exec = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_assoc($exec)){
        $response['sdetails']= $row;
    }
    
    echo json_encode($response);

});




$app->run();
 
?>