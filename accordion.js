(function() {
	var head = document.querySelectorAll('.accordion-head'),
		i;

	for ( i = 0; i < head.length; i++ ) {
		head[i].addEventListener('click', accordion);

	}

	function accordion() {
		this.nextElementSibling.classList.toggle('display');
		this.classList.toggle('active');
	}

}())