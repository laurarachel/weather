var button = document.querySelectorAll(".button")[0];
const input = document.querySelectorAll(".input")[0];



button.addEventListener('click', ()=>{
    
    if (input.value>=0 && input.value<15){
        alert('Es demasiado frio. Usa una bufanda Chic y una casaca de cuero negro!');
        
    } else if (input.value>15 && input.value <=40) {
        alert('Es demasiado caluroso. Puedes combinar una falda con unos botines!');
        
    } else {
        alert('Ingresa un numero adecuado, sigue las instrucciones');
    }
});

