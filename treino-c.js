fetch("data.json")
.then(res => res.json())
.then(data => {
    data[user].treinoC.forEach((exercicio, index) => {
        const novo_exercicio = document.createElement("p")
        novo_exercicio.textContent = exercicio
        fichas.c.appendChild(novo_exercicio)

        const repinput = document.createElement("input")
        repinput.id = `repc${index}`
        repinput.className = "rep"
        repinput.placeholder = "repetição"
        repinput.type = "number"
        fichas.c.appendChild(repinput)

        const pesoinput = document.createElement("input")
        pesoinput.className = "peso"
        pesoinput.id = `pesoc${index}`
        pesoinput.placeholder = "peso kg"
        pesoinput.type = "number"
        fichas.c.appendChild(pesoinput)

        repinput.value = localStorage.getItem(repinput.id)
        pesoinput.value = localStorage.getItem(pesoinput.id)
    })
})

function treino_c() {
            
    for (v in fichas) {
        fichas[v].style.display = "none"
    }

    fichas.c.style.display = "block"
    
    treinoa.style.backgroundColor = "rgb(0,0,0,0.4)"
    treinob.style.backgroundColor = "rgb(0,0,0,0.4)"
    treinoc.style.backgroundColor = "black"
    treinod.style.backgroundColor = "rgb(0,0,0,0.4)"
    treinoe.style.backgroundColor = "rgb(0,0,0,0.4)"

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