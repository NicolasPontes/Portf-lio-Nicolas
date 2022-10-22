/*

    OBJETIVO: Dividir o portifólio por abas

    passo 1: separar os elementos por aba
    passo 2: identificação de clique por aba
    passo 3: desmarcar o antigo após o click[
    passo 4: identificar o click como selecionada
    passo 6: esconder conteudo anterior
    passo 6: mostrar o conteudo novo
    
*/

//passo 1: separar os elementos por aba

const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    aba.addEventListener("click",function(){

        if(aba.classList.contains("selecionada")){
            return;
        }
        
        SelecaoDaAba(aba)

        MostrarInfoAbas(aba)
    
    });
});

function SelecaoDaAba(aba){
    const abaSelecionada = document.querySelector('.aba.selecionada') ;
        abaSelecionada.classList.remove('selecionada');

        aba.classList.add("selecionada");

}
function MostrarInfoAbas(aba){
    const informacaoSelecionada = document.
    querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove
    ("selecionada");
   
   const idDoElementoInformacoesDaAba = 
   `informacao-${aba.id}`
   
   
   const informacaoMostrada = document.
   getElementById(idDoElementoInformacoesDaAba)
   informacaoMostrada.classList.add
   ("selecionada")
}
