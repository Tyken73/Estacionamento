function ComprarHoras(){
    var veiculo, horas, taxa, total;

    veiculo = document.getElementById('categoria').value;
    horas = document.getElementById('horas').value;
    total = document.getElementById('total');
    
    if (veiculo == 'subcompacto') { taxa = 3.50; }
    else if (veiculo == 'compacto') { taxa = 4.00; }
    else if (veiculo == 'hatch') { taxa = 4.50; }
    else if (veiculo == 'sedan') { taxa = 5.00; }
    else if (veiculo == 'suv') { taxa = 6.00; }
    else if (veiculo == 'pickup') { taxa = 7.00; }

    total.innerHTML = 'Total: R$' + taxa * horas;
}

function NovaCompra(){
    alert('O formulário será resetado');
}