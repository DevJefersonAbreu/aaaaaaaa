document.addEventListener('DOMContentLoaded', () => {
    const btnNao = document.querySelector('.btn-nao');
    const btnSim = document.querySelector('.btn-sim');
    const imgSad = document.querySelector('.image-1');
    const imgHappy = document.querySelector('.image-2');

    // Função para mover o botão "NÃO" aleatoriamente
    function moveButton() {
        const container = document.getElementById('container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = btnNao.getBoundingClientRect();

        let newLeft = Math.random() * (containerRect.width - btnRect.width);
        let newTop = Math.random() * (containerRect.height - btnRect.height);

        // Ajustar para não sair da tela
        if (newLeft + btnRect.width > containerRect.width) newLeft = containerRect.width - btnRect.width;
        if (newTop + btnRect.height > containerRect.height) newTop = containerRect.height - btnRect.height;

        btnNao.style.left = `${newLeft}px`;
        btnNao.style.top = `${newTop}px`;
    }

    btnNao.addEventListener('mouseover', moveButton);

    btnSim.addEventListener('click', () => {
        imgSad.style.display = 'none';
        imgHappy.style.display = 'block';
    });
});