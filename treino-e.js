fetch("data.json")
.then(res => res.json())
.then(data => {
    data[user].treinoE.forEach((exercicio, index) => {
        const novo_exercicio = document.createElement("p")
        novo_exercicio.textContent = exercicio
        fichas.e.appendChild(novo_exercicio)

        const repinput = document.createElement("input")
        repinput.id = `repe${index}`
        repinput.className = "rep"
        repinput.placeholder = "repetição"
        repinput.type = "number"
        fichas.e.appendChild(repinput)

        const pesoinput = document.createElement("input")
        pesoinput.className = "peso"
        pesoinput.id = `pesoe${index}`
        pesoinput.placeholder = "peso kg"
        pesoinput.type = "number"
        fichas.e.appendChild(pesoinput)

        repinput.value = localStorage.getItem(repinput.id)
        pesoinput.value = localStorage.getItem(pesoinput.id)
    })
})

function treino_e() {
            
    for (v in fichas) {
        fichas[v].style.display = "none"
    }

    fichas.e.style.display = "block"
    
}