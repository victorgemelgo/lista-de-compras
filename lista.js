//inputs
let item = document.getElementById('item');
let quantidade = document.getElementById('quant');
let valor = document.getElementById('valor');

//botao
let botaoAdd = document.getElementById('adicionar');

//lista
let lista = document.getElementById('adicionados');



botaoAdd.addEventListener('click', () => {
    var listaAtual = lista.innerHTML;

    lista.innerHTML = listaAtual + "<tr class='itens'><td>" + item.value + "</td>" + "<td class='quant-item'>" + quantidade.value + "</td>" + "<td class='total'>" + valor.value + "</td></tr>";

    let total = document.querySelectorAll('.total');
    let quantItem = document.querySelectorAll('.quant-item');
    let i;
    let campoTotal = document.getElementById('valor-total');
    let campoItens = document.getElementById('itens-total');
    let valorTotal = 0;
    let itensTotal = 0;

    for (i = 0; i < total.length; i++) {
        
        
        valorTotal = valorTotal + parseFloat(total[i].innerHTML) * parseFloat(quantItem[i].innerHTML);
        campoTotal.innerHTML = valorTotal;
        itensTotal = itensTotal + parseFloat(quantItem[i].innerHTML);
        campoItens.innerHTML = itensTotal;
    }
})



