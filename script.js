function jogar() {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const escolhaUsuario = prompt('Escolha: Pedra, Papel ou Tesoura?');
    
    if (!escolhaUsuario) {
        alert('Jogo cancelado!');
        return;
    }
    
    const escolhaFormatada = escolhaUsuario.trim().charAt(0).toUpperCase() + escolhaUsuario.trim().slice(1).toLowerCase();
    
    if (!opcoes.includes(escolhaFormatada)) {
        alert('Escolha inválida! Tente novamente.');
        return;
    }
    
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    
    let resultado = '';
    if (escolhaFormatada === escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaFormatada === 'Pedra' && escolhaComputador === 'Tesoura') ||
        (escolhaFormatada === 'Papel' && escolhaComputador === 'Pedra') ||
        (escolhaFormatada === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
        resultado = 'Você venceu!';
    } else {
        resultado = 'Você perdeu!';
    }
    
    alert(`Você escolheu: ${escolhaFormatada}\nComputador escolheu: ${escolhaComputador}\n${resultado}`);
}