function processarTexto() {
    const textoOriginal = document.getElementById('textoEntrada').value;

    
    const textoMaiusculo = textoOriginal.toUpperCase();

    
    const textoSemEspacos = textoMaiusculo.replace(/\s+/g, ' ');

    
    const palavras = textoSemEspacos.split(' ');
    const numPalavras = palavras.length;

    
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Texto em maiusculas sem espacos extras: ${textoSemEspacos}\nNumero de palavras: ${numPalavras}`;
}