const converter = document.getElementById('btn')
const seletor = document.getElementById('select')

const valorEuro = 3.5
const dolar = 5.25

converterValor = () =>{
    const valorIpu = document.getElementById('valorInput').value
    const paragReal = document.getElementById('valor-real')
    const moeda = document.getElementById('currencyText')

    paragReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valorIpu);

    if(seletor.value === '€ Euro'){
        moeda.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(valorIpu / valorEuro);
    }

    if(seletor.value === 'US$ Dólar Americano'){
        moeda.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(valorIpu / dolar);
    }
}

changeValue = () =>{
    const changeTexto = document.getElementById('changetext')
    const changeImg = document.getElementById('image')

    if(seletor.value === 'US$ Dólar Americano'){
        changeTexto.innerHTML = 'Dólar'
        changeImg.src = "./desing/USA.png"
    }

    if(seletor.value === '€ Euro'){
        changeTexto.innerHTML = 'Euro'
        changeImg.src = "./desing/Euro_symbol.svg.png"
    }
    converterValor()
}


converter.addEventListener("click", converterValor)
seletor.addEventListener("change", changeValue)