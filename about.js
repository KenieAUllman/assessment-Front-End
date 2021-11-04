console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('submitted successfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function bulldogImage(evt) {
	evt.preventDefault

	alert('You are a good boy!')
}

let test = document.querySelector("onmouseover");

test.addEventListener("mouseover", bulldogImage); 
 

