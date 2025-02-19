fetch("data.json")
.then(res => res.json())
.then(data => {
    data[user].treinoA.forEach((exercicio, index) => {
        const novo_exercicio = document.createElement("p")
        novo_exercicio.textContent = exercicio
        fichas.a.appendChild(novo_exercicio)

        const repinput = document.createElement("input")
        repinput.id = `repa${index}`
        repinput.className = "rep"
        repinput.placeholder = "repetição"
        repinput.type = "number"
        fichas.a.appendChild(repinput)

        const pesoinput = document.createElement("input")
        pesoinput.className = "peso"
        pesoinput.id = `pesoa${index}`
        pesoinput.placeholder = "peso kg"
        pesoinput.type = "number"
        fichas.a.appendChild(pesoinput)

        repinput.value = localStorage.getItem(repinput.id)
        pesoinput.value = localStorage.getItem(pesoinput.id)
    })
})

function treino_a() {

    for (v in fichas) {
        fichas[v].style.display = "none"
    }

    fichas.a.style.display = "block"

    ficha.style.height = "1px"

    treinoa.style.backgroundColor = "black"
    treinob.style.backgroundColor = "rgb(0,0,0,0.4)"
    treinoc.style.backgroundColor = "rgb(0,0,0,0.4)"
    treinod.style.backgroundColor = "rgb(0,0,0,0.4)"
    treinoe.style.backgroundColor = "rgb(0,0,0,0.4)"

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