const input = document.querySelector("input")

const paises = ['China', 'França', 'Coreia do Sul', 'Coreia do Norte', 'Ucrânia', 'Rússia', 'Alemanha', 'Camboja', 'Luxemburgo', 'Bélgica', 'Laos', 'Iraque', 'Itália', 'Haiti', 'República Dominicana', 'Argélia', 'Myanmar', 'Afeganistão', 'Cuba', 'México', 'Panamá', 'Groenlândia', 'Filipinas', 'Ilhas Marshall', 'Granada', 'Ilhas Salomão', 'Guam', 'Holanda', 'Vietnã']

const correctAnswer = document.querySelector('certo')

input.addEventListener("awesomplete-selectcomplete", function(event) {
    handleAnswer2(event);

});

function handleAnswer2(event){
    const paisSelecionado = event.target.value
    const foiInvadido = paises.includes(paisSelecionado)
    if(foiInvadido){
        const divs = document.querySelectorAll("[data-pais='" + paisSelecionado + "']")
        for(div of divs) div.style.display="block"
    }
    console.log(paisSelecionado, foiInvadido)
}

const botaoDesistir = document.querySelector(".botao-desistir")
botaoDesistir.addEventListener("click", function(){
    const certeza = document.querySelector(".confirma")
    certeza.style.display="block"

})