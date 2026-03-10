//Ejercicio 1 
let a = document.querySelector(".blog-logo");
a.addEventListener("click",(event)=>{
    event.preventDefault();
    alert("No puedes cliclar");
})
//Ejercicio 2.1
let elemento = document.querySelector(".kg-image");
elemento.addEventListener("click",()=>{
    elemento.src="../assets/magic-1.gif"
})
//Ejercicio 2.2

let p = document.querySelector(".post-content p");

p.addEventListener("click",()=>{
    p.style.color="aqua";
    p.style.backgroundColor="gold";
})
//Ejercicio 2.3
let art = document.querySelectorAll(".post")[0];
art.addEventListener("click",()=>{
art.style.backgroundColor = "orange";
})
//Ejercicio 3
let cambio = document.querySelectorAll(".kg-image")[1];
cambio.addEventListener("mouseover",()=>{
    cambio.src="../index_files/streacom-da2-dust-nets.png";
})
//Ejercicio 4

const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    let aleatorio = Math.floor(Math.random() * array.length);
    return array[aleatorio];
}

console.log(getRandom(colors))

//Ejercicio 5
let colores = ["#780000","#c1121f","#fdf0d5","#003049","#669bbc"]
console.log(getRandom(colores));

//Ejercicio 6
let gif = ["magic-1.gif","magic-2.gif","magic-3.gif","magic-4.gif"];
console.log(getRandom(gif));