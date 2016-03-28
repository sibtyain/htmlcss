function doShadow(){
	  // create shadow DOM on the <p> element above
      var shadow = document.getElementById('#hostElement').createShadowRoot();
      
      shadow.innerHTML = '<p>Here is some new text</p>';
      
      var  theElement  = document.querySelector('#hostElement') ;
      
      

}
