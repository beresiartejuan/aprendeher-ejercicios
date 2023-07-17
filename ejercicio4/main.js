function calcularArea(){

    const radio = document.getElementById("radio");
    const parse_radio = parseFloat(radio.value || 0);

    const area = Math.PI * parse_radio * parse_radio;

    const resultado = document.getElementById("resultado");

    if(isNaN(area)){

        resultado.innerText = "No se pudo calcular :(";
	return;

    }

    resultado.innerText = `${area}`;

}

function cambiarTexto(){
    document.querySelector("");
}
