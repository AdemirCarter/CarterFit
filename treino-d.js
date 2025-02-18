fetch("data.json")
.then(res => res.json())
.then(data => {
    data[user].treinoD.forEach((exercicio, index) => {
        const novo_exercicio = document.createElement("p")
        novo_exercicio.textContent = exercicio
        fichas.d.appendChild(novo_exercicio)

        const repinput = document.createElement("input")
        repinput.id = `repd${index}`
        repinput.className = "rep"
        repinput.placeholder = "repetição"
        repinput.type = "number"
        fichas.d.appendChild(repinput)

        const pesoinput = document.createElement("input")
        pesoinput.className = "peso"
        pesoinput.id = `pesod${index}`
        pesoinput.placeholder = "peso kg"
        pesoinput.type = "number"
        fichas.d.appendChild(pesoinput)

        repinput.value = localStorage.getItem(repinput.id)
        pesoinput.value = localStorage.getItem(pesoinput.id)
    })
})

function treino_d() {
            
    for (v in fichas) {
        fichas[v].style.display = "none"
    }

    fichas.d.style.display = "block"
    
}