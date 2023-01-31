// import "./css/style.css"; //importing css

const form = document.querySelector("#conversion-form")
let cryptoSelect = document.querySelector(".cryptoSelect")
let amount = document.querySelector("#inputAmount")
let currency = document.querySelector("#dropdown2")
let output = document.querySelector("#output")

const criptoCurrency = async (e) => {
    e.preventDefault()
    try {
        let response = await fetch(`https://api.coinconvert.net/convert/${cryptoSelect.value}/${currency.value}?amount=${amount.value}`);

        let data = await response.json();

        output.value = Object.values(data)[2];

    } catch (err) {
        console.log(err);
    }
}


form.addEventListener("submit", criptoCurrency)
