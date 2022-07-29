const menuToggle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('.nav-items');

	menuToggle.addEventListener('click', function () {
		nav.classList.toggle('active')
	});


  let anchor = document.querySelectorAll('.nav-items li a')
	for( let i = 0; i < anchor.length; i++ ){
		anchor[i].addEventListener('click', function(){

		let active = nav.classList.contains('active')
			if(active){	
				nav.classList.remove('active')
			}
		  })
     	}

