function buscarPalabra() {
    let texto = document.getElementById("palabra").value;
    let palabraBuscar = document.getElementById("buscar").value.trim();

    let palabras = texto.toLowerCase().split(/\s+/);
    let palabraBuscarLower = palabraBuscar.toLowerCase();

    let indice = palabras.indexOf(palabraBuscarLower);

    let resultado = document.getElementById("resultado");
    if (indice !== -1) {
        resultado.textContent = `La palabra "${palabraBuscar}" se encuentra en la posición ${indice}.`;
    } else {
        resultado.textContent = `La palabra "${palabraBuscar}" no se encontró.`;
    }
}