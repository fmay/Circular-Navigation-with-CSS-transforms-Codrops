(function(){

	var anchors = document.getElementsByTagName('a'),
    button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

    //remove the following function when u need normal functioning links
	[].forEach.call(anchors, function(anchor){
	  anchor.onclick = function(e){
	    e.preventDefault();
	  }
	});

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	button.addEventListener('focus', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.preventDefault;
	  	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	function closeNav(){
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
		open = false;
		button.innerHTML = "+";
	}
	document.addEventListener('click', closeNav);

})();

