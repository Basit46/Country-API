const search = document.querySelector(".input-sec button");
const results = document.querySelector(".result-sec");
const inputTyped = document.querySelector(".input-sec input")

const countryflag = document.querySelector(".result-sec .flag .flag-img")
const countryName = document.querySelector(".result-sec .flag .flag-name");
const capital = document.querySelector(".result-sec .details .capital p")
const continent = document.querySelector(".result-sec .details .continent p")
const population = document.querySelector(".result-sec .details .popt p")
const currency = document.querySelector(".result-sec .details .currency p")
const lang = document.querySelector(".result-sec .details .lang p");

search.addEventListener("click", function(){
    let input = inputTyped.value;
    results.style.display = "block";
    fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
    .then(res => res.json())
    .then(data => {
        countryflag.innerHTML = `<img src="${data[0].flags.png}" height="146px" width="246px" >`
        countryName.textContent = data[0].name.common;
        capital.textContent = data[0].capital;
        continent.textContent = data[0].continents
        population.textContent = data[0].population;
        currency.textContent = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
        lang.textContent = Object.values(data[0].languages).join(" , ");

    })
})