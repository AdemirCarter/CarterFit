fetch("data.json")
.then(res => res.json())
.then(data => {
    data[user].treinoB.forEach((exercicio, index) => {
        const novo_exercicio = document.createElement("p")
        novo_exercicio.textContent = exercicio
        fichas.b.appendChild(novo_exercicio)

        const repinput = document.createElement("input")
        repinput.id = `repb${index}`
        repinput.className = "rep"
        repinput.placeholder = "repetição"
        repinput.type = "number"
        fichas.b.appendChild(repinput)

        const pesoinput = document.createElement("input")
        pesoinput.className = "peso"
        pesoinput.id = `pesob${index}`
        pesoinput.placeholder = "peso kg"
        pesoinput.type = "number"
        fichas.b.appendChild(pesoinput)

        repinput.value = localStorage.getItem(repinput.id)
        pesoinput.value = localStorage.getItem(pesoinput.id)
    })
})

function treino_b() {

    for (v in fichas) {
        fichas[v].style.display = "none"
    }

    fichas.b.style.display = "block"

    treinoa.style.backgroundColor = "rgb(29, 29, 29)"
    treinob.style.backgroundColor = "black"
    treinoc.style.backgroundColor = "rgb(29, 29, 29)"
    treinod.style.backgroundColor = "rgb(29, 29, 29)"
    treinoe.style.backgroundColor = "rgb(29, 29, 29)"

    ficha.style.height = "1px"

    clearInterval(intervalo)
    intervalo = setTimeout(function() {
        ficha.style.height = "350px"
        usou = true

        if (usou = true) {
            clearInterval(intervalo)
            usou = false
        }
    }, 400)
}