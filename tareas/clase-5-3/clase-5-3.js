//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function crearLabel(i) {
    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", `video-${i}`);
    etiqueta.innerText = `Video ${i}`;
    return etiqueta;
}

function crearBR() {
    const br = document.createElement("br");
    return br;
}

function crearInputHoras() {
    const horasDuracion = document.createElement("input");
    horasDuracion.className = "horas";
    horasDuracion.type = "number";
    return horasDuracion;
}

function crearInputMinutos() {
    const minutosDuracion = document.createElement("input");
    minutosDuracion.className = "minutos";
    minutosDuracion.type = "number";
    return minutosDuracion;
}

function crearInputSegundos() {
    const segundosDuracion = document.createElement("input");
    segundosDuracion.className = "segundos";
    segundosDuracion.type = "number";
    return segundosDuracion;
}

function crearBotonCalcular() {
    const $botonCalcular = document.createElement("button");
    $botonCalcular.setAttribute("id", "boton-calcular-total");
    $botonCalcular.innerText = "Calcular tiempo total";
    return $botonCalcular;
}

function sumarHorasMinutosSegundos(horas, minutos, segundos) {
    minutos = minutos + parseInt(segundos / 60);
    segundos = segundos % 60;
    horas = horas + parseInt(minutos / 60);
    minutos = minutos % 60;
    if (segundos / 10 < 1) {
        segundos = "0" + segundos;
    }
    if (minutos / 10 < 1) {
        minutos = "0" + minutos;
    }
    return `${horas}:${minutos}:${segundos}`;
}

function calcularTotal(lista) {
    let total = 0;
    for (let node of lista) {
        total += Number(node.value);
    }
    return total;
}

const $botonOK = document.querySelector("#boton-ok");
const $botonCalcularTotal = crearBotonCalcular();
$botonOK.onclick = function () {
    const cantidadVideos = document.querySelector("#cantidad-videos").value;
    const $formulario = document.querySelector("form");
    for (let i = 1; i <= cantidadVideos; i++) {
        $formulario.appendChild(crearLabel(i));
        $formulario.appendChild(crearInputHoras());
        $formulario.appendChild(crearInputMinutos());
        $formulario.appendChild(crearInputSegundos());
        $formulario.appendChild(crearBR());
    }
    $formulario.appendChild($botonCalcularTotal);
    return false;
};

$botonCalcularTotal.onclick = function () {
    const horas = calcularTotal(document.querySelectorAll(".horas"));
    const minutos = calcularTotal(document.querySelectorAll(".minutos"));
    const segundos = calcularTotal(document.querySelectorAll(".segundos"));
    const resultado = sumarHorasMinutosSegundos(horas, minutos, segundos);
    return false;
};
