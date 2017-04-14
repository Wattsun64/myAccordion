(function() {

	var httpRequest = new XMLHttpRequest(),
		change = document.getElementById('change');

	change.addEventListener('click', requestChange)

	function requestChange() {
			
			httpRequest.onreadystatechange = function() {
			
			if ( httpRequest.readyState === 4 && httpRequest.status === 200 ) {				

				change.innerHTML = httpRequest.responseText;
			}

		}

		httpRequest.open('GET', 'sample.txt', true)
		httpRequest.send();
	}
	

}())