<?php
    include ('Database.php');
    $query = "SELECT * FROM publication";

    $result = mysqli_query($db, $query);
    if(!$result){
        die('Query Failed.'.mysqli_error($db).'Sorry');
    }
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]=array(
            'idpub' => $row['IDPUB'],
            'titlepub' => $row['TITLEPUB'],
            'descriptionpub' => $row['DESCRIPTIONPUB'],
            'vistaspub' => $row['VISTASPUB']
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring; 