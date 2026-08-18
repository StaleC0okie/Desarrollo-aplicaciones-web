//Cambio tema
let temaActual = 'claro';
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');

function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent = temaActual === 'claro' ? 'Modo oscuro' : 'Modo claro';
    console.log(temaActual);
}

botonTema.addEventListener('click', cambiarTema);

function saludar() {
    const horaActual = new Date().getHours();
    let saludo;
    if (horaActual < 12) {
        saludo = 'Buenos dias'
    } else if (horaActual < 20) {
        saludo = 'Buenas tardes'
    } else {
        saludo = 'Buenas noches'
    }
    saludoElemento.textContent = saludo;
}

saludar();