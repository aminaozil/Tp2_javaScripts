//recupération de body
let bg = document.querySelector("body");

//recupération de button avec id
btn = document.querySelector("#themeToggle");

//déclaration de la variable qui recup la classe noir crée au css
let noir = "noir"

//ecouteur d'event du button 
//bg.classList.contains, on vérifie si bg contient une classe "noir" 

btn.addEventListener("click", function(){
    if (bg.classList.contains(noir)) {
        
        bg.classList.remove(noir);
        btn.style.color = " #000000";
        btn.style.borderColor = " #000000";
        
    
    }
       
    else {
        bg.classList.add(noir);
        btn.style.color = " #ffffff";
        btn.style.borderColor = " #ffffff";
       
    }
});