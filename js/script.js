/*Loading*/
window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    if(loader){
        loader.classList.add('hidden');
    }
});

/*Filtros do Cardápio*/
const filterButtons =
document.querySelectorAll('.filtro-btn');

const categorias =
document.querySelectorAll('.categoria');

if(filterButtons.length > 0){

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            filterButtons.forEach(btn => {
                btn.classList.remove('ativo');
            });

            button.classList.add('ativo');

            const filter = button.dataset.filter;

            categorias.forEach(categoria => {

                if(filter === 'all'){
                    categoria.style.display = 'block';
                }
                else if(categoria.classList.contains(filter)){
                    categoria.style.display = 'block';
                }
                else{
                    categoria.style.display = 'none';
                }
            });
        });
    });
}

/*Botões Detalhes*/
const botoes = document.querySelectorAll('.btn-detalhes');

if(botoes.length > 0){

    botoes.forEach(botao => {

        botao.addEventListener('click', () => {

            const detalhes = botao.parentElement.parentElement.nextElementSibling;

            detalhes.classList.toggle('ativo');

            if(detalhes.classList.contains('ativo')){
                botao.textContent =
                'Ocultar detalhes';
            }
            else{
                botao.textContent =
                'Ver detalhes';
            }
        });
    });
}

/*Menu Hambúrguer*/
const menuToggle =
document.getElementById('menu-toggle');

const navLinks =
document.getElementById('nav-links');

if(menuToggle && navLinks){

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('ativo');

    });
}

window.addEventListener('scroll', () => {

    const header =
    document.querySelector('header');

    header.classList.toggle(
        'scroll',
        window.scrollY > 50
    );
});

const formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Pedido enviado com sucesso! 🍝\nEm breve entraremos em contato.");

        formulario.reset();
    });