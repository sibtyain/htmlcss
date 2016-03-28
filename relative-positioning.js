function onBodyLoad(){

	//	alert( getElementStyle("body"));
		alert( getElementStyle("div"));
	}

	function getElementStyle( theElement ){
		positioningContext = document.querySelector(theElement);

		values = 'The Element <' + theElement + '>' +String.fromCharCode(13) +
		' ' +String.fromCharCode(13) +
		'float:'+window.getComputedStyle(positioningContext).float + String.fromCharCode(13) +
		'clear:'+window.getComputedStyle(positioningContext).clear + String.fromCharCode(13) +
		'position:'+window.getComputedStyle(positioningContext).position + String.fromCharCode(13) +
		'display:'+window.getComputedStyle(positioningContext).display;

		return values;
	}