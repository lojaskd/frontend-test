<?php 
	$logado = false;
	if (!empty($_POST['orderid']) && !empty($_POST['cpfcnpj'])) {
    $logado = true;
	}
	if(!$logado){
		$bodyclass = "system-login";
	}else{
		$bodyclass = "system-dashboard";
	}

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>LojasKD - Dashboard</title>
<script src="lib/system/jquery-3.2.0.min.js"></script>
<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="lib/assets/css/style.css">
<script src="lib/bootstrap/js/bootstrap.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<body class="<?php echo $bodyclass;?>">
	<section>
		<content>
			<?php 
			if($logado){
				include 'layout/dashboard.php';
			}else{
				include 'layout/login.php';
			}
			?>
		</content>
	</section>
	<script src="lib/system/scripts.js"></script>
</body>
</html>