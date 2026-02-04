

function verificarNivel () {
    const resposta = document.getElementById("resposta")
    const nivelSelecionado = document.querySelector("input[name='nivel']:checked").value

    if (!nivelSelecionado) {
        resposta.innerHTML = "Nível é obrigatório."
        return
    }

    const nivel = nivelSelecionado

    switch (nivelSelecionado) {
        case "trainee":
            resposta.innerHTML = "Seu nível é trainee."
            break;
        case "jr":
            resposta.innerHTML = "Seu nível é Júnior."
            break;
        case "pl":
            resposta.innerHTML = "Seu nível é Pleno."
            break;
        case "sr":
            resposta.innerHTML = "Seu nível é senior."
            break;
    
        default:
            break;
    }

    console.log(resposta)
    console.log(nivelSelecionado)
}
