/*
 * menuOptions
 */

function toggle(){
	//alert ("the message for toggle");
	
	theDiv = document.getElementById("menuOptions");
	//alert( window.getComputedStyle(theDiv).getPropertyValue('display'));
	
	if (window.getComputedStyle(theDiv).getPropertyValue('display') === "none"){
		theDiv.style.display = "block";
		theDiv.style.position = "absolute";

	}else{
		theDiv.style.display = "none";
		theDiv.style.position = "absolute";

		
	}
}
