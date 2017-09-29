/* lazy loader */

// Location of the object you're attempting to load, in this case a google font url
const OBJECT_LOCATION = 'https://fonts.googleapis.com/css?family=Raleway';

// IIFE on page load
(() => { 
	const XHR = new XMLHttpRequest();
	XHR.open('GET', OBJECT_LOCATION, true);
	XHR.onreadystatechange = () => {
	if (XHR.readyState == 4 && XHR.status == 200) {
		const STYLE = document.createElement('style');
		STYLE.innerHTML = XHR.responseText;
		document.head.appendChild(STYLE);
	}
	};
	XHR.send();
})();
