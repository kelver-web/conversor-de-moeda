const button = document.getElementById("button-convert")
const select = document.getElementById("current-select")

const dollar = 5.2
const euro = 5.9
const bitcoin = 229762.85


const convertValues = () => {
    const inputReals = document.getElementById('input-reals').value
    const currencyRealText = document.getElementById('currency-real-text')
    const currenyValue = document.getElementById('currency-value')

    // currencyRealText.innerHTML = `R$${inputReals}`
    currencyRealText.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL",
    }).format(inputReals);

    if(select.value === 'US$ Dólar americano'){
        // currenyValue.innerHTML = `U$${(inputReals / dollar).toFixed(2)}`
    currenyValue.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
    }).format(inputReals / dollar);
    }
    
    if(select.value === '€ Euro'){
        currenyValue.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR",
        }).format(inputReals / euro);
    }

    if(select.value === '₿ Bitcoin'){
        currenyValue.innerHTML = parseFloat(inputReals / bitcoin).toFixed(5);   
    }
    
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    
    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/estados-unidos.png'
    }

    if(select.value === '₿ Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }
    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
