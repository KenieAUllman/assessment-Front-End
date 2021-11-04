function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('You are correct!')
}


let form = document.querySelector('form#career');

form.addEventListener('submit', handleSubmit);


function myFavColor(evt2) {
    evt2.preventDefault();

    alert("Purple")
}

let button1 = document.getElementById('color');
button1.addEventListener('click', myFavColor)


function myFavPlace(evt3) {
    evt3.preventDefault();

    alert("My Master's Chair")
}

document.getElementById('place').addEventListener('click', myFavPlace)

function myFavRite(evt4) {
    evt4.preventDefault();
    
    alert('Howling loudly when master places the leash upon my neck')
}

document.getElementById('ritual').addEventListener('click', myFavRite)

