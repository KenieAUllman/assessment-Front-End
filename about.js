console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('submitted successfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let bulldogImage = document.getElementById("bulldogImage");

bulldogImage.addEventListener("mouseover", bulldogImage); 
 

