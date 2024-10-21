document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Swiper
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    // Inicializa o AOS (Animate On Scroll)
    AOS.init();

    // Carrega serviços do JSON
    fetch('servicos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('servicos-container');
            data.servicos.forEach(servico => {
                const card = `
                    <div class="card">
                        <h3>${servico.titulo}</h3>
                        <p>${servico.descricao}</p>
                        <p>Preço: ${servico.preco}</p>
                        <img src="${servico.foto}" alt="${servico.titulo}" class="servico-imagem">
                    </div>`;
                container.innerHTML += card;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os serviços:', error);
            const container = document.getElementById('servicos-container');
            container.innerHTML = '<p>Desculpe, não conseguimos carregar os serviços no momento.</p>';
        });

    // Carrega testemunhos do JSON
    fetch('testemunhos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testemunhos-container');
            data.forEach(testemunho => {
                const card = `
                    <div class="testemunho" data-aos="fade-up">
                        <img src="${testemunho.foto}" alt="Foto do cliente ${testemunho.nome}" />
                        <p><strong>${testemunho.nome}</strong></p>
                        <p>${testemunho.texto}</p>
                    </div>`;
                container.innerHTML += card;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os testemunhos:', error);
            const container = document.getElementById('testemunhos-container');
            container.innerHTML = '<p>Desculpe, não conseguimos carregar os testemunhos no momento.</p>';
        });

    // Inicializa o EmailJS
    emailjs.init('vAkLpwCSKcKibEIqn');

    const form = document.getElementById('form-contato');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Envia o email usando o EmailJS
        emailjs.sendForm('service_l6fge72', 'template_846d1zj', this)
            .then(function (response) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            }, function (error) {
                alert('Falha no envio da mensagem: ' + JSON.stringify(error));
            });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Menu Hamburguer
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menu = document.getElementById('menu');

    menuHamburguer.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
