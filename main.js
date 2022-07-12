/* Cria variável com o input para os países */
const input = document.querySelector('input')

/* Cria a vairável com os países que são as respostas corretas do quiz */
const paises = ['China', 'França', 'Coreia do Sul', 'Coreia do Norte', 'Ucrânia', 'Rússia', 'Alemanha', 'Camboja', 'Luxemburgo', 'Bélgica', 'Laos', 'Iraque', 'Itália', 'Haiti',
'República Dominicana', 'Argélia', 'Myanmar', 'Afeganistão', 'Cuba', 'México', 'Panamá', 'Groenlândia', 'Filipinas', 'Ilhas Marshall', 'Granada', 'Ilhas Salomão', 'Guam', 'Holanda', 'Vietnã']

/* Cria o listener para que ao selecionar um dos países que aparecem no autocomplete ele já cheque se a resposta está correta ou errada */
input.addEventListener("awesomplete-selectcomplete", function(event) {
    handleAnswer2(event);
});

function handleAnswer2(event){
    const paisSelecionado = event.target.value
    const foiInvadido = paises.includes(paisSelecionado)

    /* Cria a condição para que o display das divs sejam alterados caso a resposta esteja correta */
    if(foiInvadido){
        /* Busca a div com as respostas e muda o display para que as respostas apareçam na tela */
        const divs = document.querySelectorAll("[data-pais='" + paisSelecionado + "']")
        for(div of divs) div.style.display="block"
    }
}

/* Cria o botão para que o visitante desista do quiz e vá para a página de respostas */
const botaoDesistir = document.querySelector(".botao-desistir")
/* Cria a funcionalidade na página que entende quando o visitante clicou no botão de desistir e muda o html para que ele confirme a desistência */
botaoDesistir.addEventListener("click", function(){
    const certeza = document.querySelector(".confirma")
    certeza.style.display="block"

})