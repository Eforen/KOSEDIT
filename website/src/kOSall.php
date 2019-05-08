<?php
	//sets the content type to javascript 
	header('Content-type: text/javascript');

	echo "/***********************\n"
 		." ** Block Definitions **\n"
 		." ***********************/\n";

	// includes all js files of the directory
	foreach(glob("kOSblocks/*.js") as $file) {
		echo "\n// Start of File: ".$file."\n";
		readfile($file);
		echo "\n// End of File: ".$file."\n";
	}

	echo "/****************************\n"
 		." ** KerboScript Generators **\n"
 		." ****************************/\n";

	echo "\n// Start of Base File\n";
	readfile("kOSgen/kOS.js");
	echo "\n// End of Base File\n";

	// includes all js files of the directory
	foreach(glob("kOSgen/kOS/*.js") as $file) {
		echo "\n// Start of File: ".$file."\n";
		readfile($file);
		echo "\n// End of File: ".$file."\n";
	}
?>