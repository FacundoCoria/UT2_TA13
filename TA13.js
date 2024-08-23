const btn = document.getElementById("botonCambiar");
const txt = document.getElementById("txtOriginal");

btn.addEventListener("click", () =>{
    const cambioTxt = "Texto cambiado";
    txt.innerHTML = cambioTxt;
});