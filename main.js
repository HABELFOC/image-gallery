document.addEventListener('DOMContentLoaded', () => {

	// Get DOM Element
	const currentImg = document.querySelector('#current');
	const imgs = document.querySelector('.imgs');
	const imgOpacity = 0.7;

	// Listen for img selected
	imgs.addEventListener('click', changeCurrentImg); 


	function changeCurrentImg(e){
		// Reset imgs opacity
		Array.from(imgs.children).forEach(item => item.style.opacity = 1);

		// Grab selected img
		let selectedImg = e.target;

		// Add 'fade-in' class to 'current' img (add fadeIn animation)
		currentImg.classList.add('fade-in');

		// Change 'current' img to the selected img
		currentImg.src = selectedImg.src;

		// Remove 'fade-in' class from 'current' img in specify time
		setTimeout(() => currentImg.classList.remove('fade-in'), 500);

		// change opacity to the 'selected' img
		selectedImg.style.opacity = imgOpacity;
	}


});