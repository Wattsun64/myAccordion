(function() {

	var acc = document.querySelectorAll('.accordion-head'),
		change = document.getElementById('change'),
		i;

		for ( i = 0; i < acc.length; i++ ) {
			acc[i].addEventListener('click', doSomething)
		}

		function doSomething() {
			var con = this.nextElementSibling;

			if ( con.style.display === 'none' ) {
				con.style.display = 'block'
			} else {
				con.style.display = 'none';
			}

		}


}())